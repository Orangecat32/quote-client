import sio from 'socket.io-client';

const wsParams = {protocol: 'ws', hostname: 'localhost', port: 3002};
const sioParams = {protocol: 'http', hostname: 'localhost', port: 8005};


export const ioConnect = () => {
  const url = `${sioParams.protocol}://${sioParams.hostname}:${sioParams.port}`;
  console.log("socket.io connecting to: " + url);
  try {
    const socket = sio(url);
    return socket;
  } catch (ex) {
    console.error('threw inside open connection', ex);
    throw new Error(ex);
  }
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
