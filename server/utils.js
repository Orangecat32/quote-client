const allTickers = require('./mock/spx-2019-01-02.json');

const randomSign = () => (Math.floor(Math.random() * 2) % 2 ? 1 : -1);
const compareTickers = (a,b) => a.symbol.localeCompare(b.symbol)


const initTickers = (sector) => {
  //  remove duplicates, then sort
  console.log('init tickers:',allTickers[0].symbol);
  let ts = Object.values(allTickers.reduce((acc, t) => Object.assign(acc, { [t.symbol]: t }), {})).sort(compareTickers);
  const names = sector ? ts.filter(t => t.sector === sector) : ts;
  const tickers = names.map(t => ({ ...t, symbol: t.symbol, last: t.close, increment: t.close * t.volPct50d / 1000, pc: 0 }));

  return {
    sector,
    timer: new Date(),
    tickers
  };
};

const incrementTicker = (t) => {
  const last = randomSign() * t.increment + t.last;
  const pc = (last - t.close) / t.close;
  const bid = last - 0.01;
  const ask = last + 0.01;

  return Object.assign(t, { symbol: t.symbol, last, pc, bid, ask });
};


const incrementTickers = (td) => {
  let tickers = (td.tickers || []).map(t => incrementTicker(t));
  return Object.assign(td, { timer: new Date(), tickers});
};

const buildTickUpdate = (sector, td) => {
  const tickData = td ? incrementTickers(td) : initTickers(sector);
  return Object.assign(tickData, { timer: new Date() });
};


module.exports = {
  buildTickUpdate
};

