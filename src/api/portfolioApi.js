import sio from 'socket.io-client';

let webSocket   = null;
//const socketType = 'socketio';
const socketType = 'websocket';

const wsParams = {protocol: 'ws', hostname: 'localhost', port: 3002, interval: 1000};
const sioParams = {protocol: 'http', hostname: 'localhost', port: 8005, interval: 1000};
const restParams = {protocol: 'http', hostname: 'localhost', port: 4000};

let spxSectors = [];

export const portfolioRequest = (sector) => {
  if(!sector) {
    return portfolioRequestAll();
  }
  
  const url = `${restParams.protocol}://${restParams.hostname}:${restParams.port}`;
  const sectorName = sector.replace(/\+/g, ' ').toLowerCase();
  return fetch(`${url}/portfolio/${sectorName}`);
}

export const portfolioRequestAll = () => {
  const url = `${restParams.protocol}://${restParams.hostname}:${restParams.port}`;
  return fetch(`${url}/portfolio/`);
}


export function requestUpdates(callback) {
  console.log('using connectyion type:', socketType);
  switch(socketType) {
    case 'websocket':
      openWSConnection(callback);
      break;
    case 'socketio':
    default:
      openSioConnection(callback);
      break;
  }
}

const  openSioConnection = (cb) => {
  const url = `${sioParams.protocol}://${sioParams.hostname}:${sioParams.port}`;
  console.log("socket.io connecting to: " + url);

  const socket = sio(url);
  socket.on('timer', cb);
  socket.emit('subscribe', sioParams.interval);
}

const  openWSConnection = (callback) => {
  const url = `${wsParams.protocol}://${wsParams.hostname}:${wsParams.port}`;
  console.log("websocket connecting to: " + url);
  try {
      webSocket = new WebSocket(url);
      if(webSocket.readyState === 3){
        console.log("server not found ");
        return;
      }

      webSocket.onopen = function(openEvent) {
        console.log("WebSocket OPEN: " + JSON.stringify(openEvent, null, 4));
      };

      webSocket.onclose = function (closeEvent) {
        console.log("WebSocket CLOSE: " + JSON.stringify(closeEvent, null, 4));
      };

      webSocket.onerror = function (errorEvent) {
        console.log("WebSocket ERROR: " + JSON.stringify(errorEvent, null, 4));
      };

      webSocket.onmessage = (messageEvent) => {
        const wsMsg = JSON.parse(messageEvent.data);
        console.log('message:', wsMsg);

        if(wsMsg['tickers']) {
          callback(wsMsg);
        }
        else if (wsMsg['connection'] === 'ok') {
          // make request for the sector list  http://localhost:4000/sectors
          const url = `${restParams.protocol}://${restParams.hostname}:${restParams.port}/sectors`;
          fetch(url)
          .then(response => {
            console.log('response', response);
            return (!response.ok) ? response.json() : undefined;
          })
          .then(data => {
            spxSectors = data;
            const sector = data ? spxSectors[1] : 'Real Estate';
            // console.log(spxSectors);
            webSocket.send(JSON.stringify({command: 'subscribe', sector, interval: 1000}));
          })
          .catch(err => {
            // Do something for an error here
            console.error('communication error', err);
          });
        }
      };
  } catch (exception) {
      console.error('threw inside openWSConnection');
      console.error(exception);
  }
}


/*
settings
{interval: 1000, symbols: ['C', 'A', 'T'], priceVol: 0.01, volumeVol: 1.0 }

tick
{symbol, price, vol, time}

*/
