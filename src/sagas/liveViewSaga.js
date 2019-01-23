import io from 'socket.io-client';
import { eventChannel } from 'redux-saga';
import { fork, take, call, put, cancel, takeEvery, delay } from 'redux-saga/effects';
import {
  login, update, increment, removeUser, newMessage, refresh, errorOccured, LIVE_VIEW_CONNECT
} from '../actions/liveViewActions';

import {openWSConnection} from '../api/liveApi';


export function* liveSagas() {
  console.log('first saga');
  yield take (LIVE_VIEW_CONNECT);
  const socket= yield call(openWSConnection);

  const chan = new eventChannel(emit=>{
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
   
    const unsubscribe = () => {
     console.log('unsub channel')
    }

    return unsubscribe;
  });

   
  while (true){
    let message = yield take(chan);
  //  console.log('ws:', message)
    yield put(update(message));
  }
}

//   console.log('take connect', socket);
  
//   socket.onopen = function(openEvent) {
//     console.log("WebSocket OPEN: " + JSON.stringify(openEvent, null, 4));
//   };

//   socket.onclose = function (closeEvent) {
//     console.log("WebSocket CLOSE: " + JSON.stringify(closeEvent, null, 4));
//   };

//   socket.onerror = function (errorEvent) {
//     console.log("WebSocket ERROR: " + JSON.stringify(errorEvent, null, 4));
//   };

//   socket.onmessage = (messageEvent) => {
//     const wsMsg = JSON.parse(messageEvent.data);
   

//     if(wsMsg['tickers']) {
//       console.log('saga message:', wsMsg);
//       yield put(update(wsMsg));
//     }
//     else if (wsMsg['connection'] === 'ok') {
//       const sector = 'Health Care';
//       socket.send(JSON.stringify({command: 'subscribe', sector, interval: 1000}));
//   }
// }
//   }

//  console.log('first saga done');
 //yield fork(flow);


function connectEx() {
  const socket = io('http://localhost:3000');
  return new Promise(resolve => {
    socket.on('connect', () => {
      resolve(socket);
    });
  });
}

function subscribe(socket) {
  // return eventChannel(emit => {
  //   socket.on('users.login', ({ username }) => {
  //     emit(addUser({ username }));
  //   });
  //   socket.on('users.logout', ({ username }) => {
  //     emit(removeUser({ username }));
  //   });
  //   socket.on('messages.new', ({ message }) => {
  //     emit(newMessage({ message }));
  //   });
  //   socket.on('disconnect', e => {
  //     // TODO: handle
  //   });
  //   return () => {};
  // });
}

function* read(socket) {
  const channel = yield call(subscribe, socket);
  while (true) {
    let action = yield take(channel);
    yield put(action);
  }
}

function* write(socket) {
  while (true) {
    const { payload } = yield take(`${refresh}`);
    socket.emit('message', payload);
  }
}

function* handleIO(socket) {
  yield fork(read, socket);
  yield fork(write, socket);
}

function* flow() {
    yield cancel(refresh);
  console.log('flow');
  // while (true) {
  //   let { payload } = yield take(`${login}`);
  //   const socket = yield call(connectEx);
  //   socket.emit('login', { username: payload.username });

  //   const task = yield fork(handleIO, socket);

  //   let action = yield take(`${logout}`);
  //   yield cancel(task);
  //   socket.emit('logout');
  // }
}

export function* currentUserSaga() {
  const { id } = yield take(login);
  const response = yield call(fetch,`http://localhost:8081/user/${id}`);
 
}





// export const handleNewMessage = function* handleNewMessage(params) {
//   const socket = new WebSocket('ws://localhost:8989')
//   yield takeEvery('ADD_MESSAGE', (action) => {
//     socket.send(JSON.stringify(action))
//   })
// }