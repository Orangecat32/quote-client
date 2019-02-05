
import { eventChannel } from 'redux-saga';
import { take, call, put } from 'redux-saga/effects';
import {update, refresh, errorOccured, 
  DATA_CONNECT, DATA_PORTFOLIO_SUCCESS, DATA_REFRESH ,DATA_PORTFOLIO_FAILED, DATA_PORTFOLIO_REQUEST
} from '../actions/dataActions';

import {openWSConnection, ioConnect} from '../api/liveApi';
import { portfolioRequestAll} from '../api/portfolioApi';

const UPDATE_RATE = 15000;

export function* liveSagas() {
  yield take(DATA_CONNECT);
  const socket = yield call(ioConnect);
  yield call(portfolioFetch, socket);
  yield take(DATA_REFRESH, liveUpdates(socket));
}


export function* portfolioFetch(socket) {
  try {
    yield put({type: DATA_PORTFOLIO_REQUEST});
    const response = yield call(portfolioRequestAll);
    const json= yield response.json();
    yield put({type: DATA_PORTFOLIO_SUCCESS, payload: json});

    yield liveUpdates(socket);
  } catch (e) {
      console.log(e)
      yield put({type: DATA_PORTFOLIO_FAILED, payload:e});
  }
}


export function* liveUpdates(socket) {
  const chan = new eventChannel(emit =>
    {
      socket.emit('subscribe', JSON.stringify({interval: UPDATE_RATE}));
      socket.on('tickers', (data) => emit( JSON.parse(data)));
      socket.on('timer', (t) => { console.log('on.timer', t)});
    
      const unsubscribe = () => {
        console.log('unsub channel');
        socket.emit('unsubscribe');
      }

      return unsubscribe;
    }
  );

  while (true){
    if(!chan) {
      console.log('null channel')
    }
    const message = yield take(chan);
    yield put(update(message));
  }
}



// plain websocket version of basic requests. -------------------------------------------------------------------------
export function* liveSagasWS() {
  yield take (DATA_CONNECT);
  const socket= yield call(openWSConnection);

  const chan = new eventChannel(emit =>
    {
      socket.onmessage = (messageEvent) => {
        const wsMsg = JSON.parse(messageEvent.data);
        
        if(wsMsg['tickers']) {
          console.log('saga message:', wsMsg);
          emit(wsMsg);
        }
        else if (wsMsg['connection'] === 'ok') {
          const sector = 'Health Care';
          socket.send(JSON.stringify({command: 'subscribe', sector, interval: 1000}));
        }
      }
            
      socket.onopen = (openEvent) => {
        console.log("WebSocket OPEN: " + JSON.stringify(openEvent, null, 4));
      };

      socket.onclose = (closeEvent) => {
        console.log("WebSocket CLOSE: " + JSON.stringify(closeEvent, null, 4));
      };

      socket.onerror = (errorEvent) => {
        console.log("WebSocket ERROR: " + JSON.stringify(errorEvent, null, 4));
      };

      const unsubscribe = () => {
        console.log('unsub channel')
      }

      return unsubscribe;
    }
  );

   
  while (true){
    const message = yield take(chan);
    yield put(update(message));
  }
}
