import{ONE_BILLION} from './constants';

export const computeSectorWeights = (sectorNames, portfolio) => {
  const sectors = (sectorNames || []).reduce((acc, s) => {
    return {...acc, [s]: {value: 0, name: s} }
  },{});

  // add up the capitalization of the sectors
  (portfolio || []).forEach(t => sectors[t.sector].value += t.mktCap);

  //  divide by billion to get reasonable looking number
  return Object.values(sectors).map(s => ({ ...s, value : s.value / ONE_BILLION }));
}


export const computeSubIndustryWeights = (portfolio, sector, subIndustries) => {
  const subs = (subIndustries || []).reduce((acc, s) => {
    return {...acc, [s]: {value: 0, name: s} }
  },{});

  // add up the capitalization of the sectors
  (portfolio || []).filter(f => f.sector === sector).forEach(t => subs[t.subIndustry].value += t.mktCap);

  //  divide by billion to get reasonable looking number
  return Object.values(subs).map(s => ({ ...s, value : s.value / ONE_BILLION }));
}


export const sectorSubIndustries = (portfolio, sector) => {
  const obj = (portfolio || []).reduce((acc, ticker) => {
    return acc[ticker.subIndustry] || ticker.sector !== sector ? acc : {...acc, [ticker.subIndustry] : true}
  },{});

  return Object.keys(obj).sort();
};


export const subIndustryFirms = (portfolio, subIndustry) => {
  const obj = (portfolio || []).reduce((acc, ticker) => {
    return ticker.subIndustry !== subIndustry ? acc : acc.concat({value: ticker.mktCap, name: ticker.symbol})
  },[]);

  return obj.sort((a,b) => a.name - b.name);
};



