// sample request: https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl&types=quote,chart&range=3m ;

export const iexHistRequest = (symbol, range = '3m') => {
  const s = symbol.toLowerCase();
  const url = `https://api.iextrading.com/1.0/stock/market/batch?symbols=${s}&types=quote,chart&range=${range}`;
  console.log('fetching', url);
  return fetch(`${url}`)
    .then((response) => response)
    .catch((err) => ({ error: err }));
};
