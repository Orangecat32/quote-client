import sio from 'socket.io-client';

let webSocket   = null;
//const socketType = 'socketio';
const socketType = 'websocket';

const wsParams = {protocol: 'ws', hostname: 'localhost', port: 3002, interval: 1000};
const sioParams = {protocol: 'http', hostname: 'localhost', port: 8005, interval: 1000};


///  old style callback, noredux
export function requestUpdates() {
  console.log('using connectyion type:', socketType);
  switch(socketType) {
    case 'websocket':
      openWSConnection();
      break;
    case 'socketio':
    default:
      openSioConnection();
      break;
  }
}



const  openSioConnection = () => {
  const url = `${sioParams.protocol}://${sioParams.hostname}:${sioParams.port}`;
  console.log("socket.io connecting to: " + url);

  const socket = sio(url);
  socket.on('timer', (t) => { console.log('on:', 'timer', t)});
  socket.emit('subscribe', sioParams.interval);
  socket.on('connect', () => { console.log('on:', 'connect')});
  socket.on('connect_error', () => { console.log('on:', 'connect_error')});
  socket.on('connect_timeout', () => { console.log('on:', 'connect_timeout')});
  socket.on('reconnect_error', () => { console.log('on:', 'reconnect_error')});
  socket.on('tickers', () => { console.log('on:', 'tickers')});


}

export const  openWSConnection = () => {
  const url = `${wsParams.protocol}://${wsParams.hostname}:${wsParams.port}`;
  console.log("websocket connecting to: " + url);
  try {
      const webSocket = new WebSocket(url);
      return webSocket;
  } catch (exception) {
      console.error('threw inside openWSConnection');
      console.error(exception);
  }
}

//  add new redux style