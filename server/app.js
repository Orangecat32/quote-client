const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const http = require('http');
const websocket = require('ws');
const socketIO = require('socket.io');
const utils = require('./utils');
const cors = require('cors');

const portfolio = require('./mock/spx-2019-01-02.json');

const port = process.env.PORT || 4000; // html page port
const wsport = 3002; // websocket port
const sioport = 8005; // socket-io port

const app = express();
const server = http.createServer(app);
app.use(morgan('tiny'));
app.use(cors());
app.options('*', cors()); // For internal production use, whitelist local domain
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));


// socket.io related  ----------------------------------------------------------------------

const socketioServer = socketIO(server);

socketioServer.listen(sioport);
console.log('io listening on port ', sioport);

socketioServer.on('connection', (client) => {
  const t = JSON.stringify(new Date());
  console.log('io connection made:', t);
  client.emit('ready', t);

  let timerId;
  client.on('subscribe', (m) => {
    console.log('got subscribe',m);

    if(timerId) {
      clearInterval(timerId);
    }

    const msg = JSON.parse(m);
    const interval = msg && msg.interval > 0 ? msg.interval : 1000;
    const {sector} = msg;
    console.log('updating subscribe with:',interval, sector);
    
    let tickData = utils.buildTickUpdate(sector);
    tickData = utils.buildTickUpdate(sector, tickData);
    client.emit('tickers', JSON.stringify(tickData));

    timerId = setInterval(() => {
      tickData = utils.buildTickUpdate(sector, tickData);
      client.emit('tickers', JSON.stringify(tickData));
    }, interval);
  });

  client.on('unsubscribe', () => {
    if(timerId) {
      clearInterval(timerId);
    }
  });
});

// plain websocket related  -----------------------------------------------------------------------------

const websocketServer = new websocket.Server({ server });

server.listen(wsport, () => { // note that the http server is used here, unlike socketio
  debug(`websocket listening on port ${chalk.green(wsport)}`);
  console.log(`Websocket server started on port ${wsport}`);
});


// when a websocket connection is established
websocketServer.on('connection', (webSocketClient) => {
  // send ack to the new client
  console.log(`Websocket connection ${'ok'}`);
  webSocketClient.send('{ "connection" : "ok"}');

  webSocketClient.on('message', (msg) => {
    console.log('incoming message:', msg);
    const m = JSON.parse(msg);
    console.log('msg: ', m);
    if (m.command === 'subscribe') {
      const interval = m.interval > 0 ? m.interval : 1000;
      console.log('subscribe interval ', interval);
      let tickData;
      const updates = setInterval(() => {
        try {
          tickData = utils.buildTickUpdate(m, tickData);
          webSocketClient.send(JSON.stringify(tickData));
        } catch (err) {
          console.log('err in set interval');
          clearInterval(updates);
        }
      }, interval);
    }
  });
});

// --------------------------------------------------------------------------------
//  Reference data

//  parse refdata

const sectors = portfolio.reduce((acc, p) => {
  if (acc.indexOf(p.sector) === -1) {
    acc.push(p.sector);
  }
  return acc;
}, []);

app.listen(port, () => { debug(`express listening on port ${chalk.green(port)}`); });

app.get('/spx', (req, res) => {
  res.sendFile(path.join(__dirname, './public/mock/', '/spx-2019-01-02.json'));
});

app.get('/portfolio/:id', (req, res) => {
  // convert + to space and make lowercase
  const sectorName = req.params.id.replace(/\+/g, ' ').toLowerCase();
  const names = portfolio.reduce((acc, p) => {
    if (sectorName === p.sector.toLowerCase()) {
      acc.push(p);
    }
    return acc;
  }, []);

  res.send(JSON.stringify(names));
});


app.get('/portfolio', (req, res) => {
  res.send(JSON.stringify(portfolio));
});


app.get('/sectors', (req, res) => {
  res.send(JSON.stringify(sectors));
  // res.sendFile(path.join(__dirname, './public/mock/', '/sectors.json'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/', '/index.html'));
});

