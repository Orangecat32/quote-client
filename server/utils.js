const sectors = require('./mock/sectors.json');
const allTickers = require('./mock/spx-2019-01-02.json');

const randomSign = () => (Math.floor(Math.random() * 2) % 2 ? 1 : -1);

const initTickers = (m) => {
  console.log('initTickData');

  const sector = m && m.sector
    ? m.sector
    : sectors && sectors.length > 0
      ? sectors[0] : 'Energy';

  //  remove duplicates
  const ts = Object.values(allTickers.reduce((acc, t) => Object.assign(acc, { [t.symbol]: t }), {}));

  return {
    sector,
    timer: new Date(),
    tickers: ts.filter(t => t.sector === sector)
      .map(t => ({ ...t, last: t.close, increment: t.close * t.volPct50d / 1000, pc: 0 }))
  };
};

const incrementTicker = (m, t) => {
  const last = randomSign() * t.increment + t.last;
  const pc = (last - t.close) / t.close;
  const bid = last - 0.01;
  const ask = last + 0.01;

  return Object.assign(t, { last, pc, bid, ask });
};


const incrementTickers = (m, td) => {
  return Object.assign(td, { timer: new Date(), tickers: (td.tickers || []).map(t => incrementTicker(m, t)) });
};

const buildTickUpdate = (m, td) => {
  const tickData = td ? incrementTickers(m, td) : initTickers(m);
  return Object.assign(tickData, { timer: new Date() });
};


module.exports = {
  buildTickUpdate
};

