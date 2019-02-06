import {fmtPercent, fmtPrice, fmtShares, fmtMktCap, fmtVolume} from '../../../shared/utils';

export const columnDef = [
  {
    headerName: "Symbol", 
    field: "symbol",
    width: 90,
    pinned: 'left',
    sortable: true
  },
  {
    headerName: "Last", 
    cellRenderer: (params) => fmtPrice(params.value),
    width: 80,
    cellStyle: {'text-align': 'right'},
    sortable: true,
    field: "last"
  },
  {
    headerName: "Chng", 
    cellRenderer: (params) => fmtPercent(params.value),
    width: 90,
    cellStyle: {'text-align': 'right'},
    sortable: true,
    field: "pc"
  },
  {
    headerName: "Bid", 
    field: "bid",
    width: 80,
    cellStyle: {'text-align': 'right'},
    sortable: true,
    cellRenderer: (params) => fmtPrice(params.value)
  },
  { 
    headerName: "Ask", 
    cellRenderer: (params) => fmtPrice(params.value),
    width: 80,
    sortable: true,
    cellStyle: {'text-align': 'right'},
    field: "ask"
  },
  {
    headerName: "Shares", 
    sortable: true,
    width: 90,
    cellStyle: {'text-align': 'right'},
    cellRenderer: (params) => fmtShares(params.value),
    field: "sharesOut"
  }, 
  {
    headerName: "MktCap", 
    headerTooltip: 'Market capitalization in billions',
    sortable: true,
    width: 90,
    cellStyle: {'text-align': 'right'},
    cellRenderer: (params) => fmtMktCap(params.value),
    field: "mktCap"
  }, 
  {
    headerName: "Location", 
    sortable: true,
    field: "Location"
  },
  {
    headerName: "Sector", 
    sortable: true,
    field: "sector"
  },
  {
    headerName: "Sub-Industry", 
    sortable: true,
    field: "subIndustry"
  }, 
  {
    headerName: "Company", 
    sortable: true,
    field: "company"
  },
  { 
    headerName: "Avg. Vol", 
    headerTooltip: 'Average daily trade volume over last 50 days in millions',
    cellRenderer: (params) => fmtVolume(params.value),
    width: 100,
    sortable: true,
    cellStyle: {'text-align': 'right'},
    field: "avgVol50d"
  },
 
  { 
    headerName: "Volatility", 
    headerTooltip: 'Last 50 days average volatility',
  //  cellRenderer: (params) => params.value,
    width: 100,
    sortable: true,
    cellStyle: {'text-align': 'right'},
    field: "volPct50d"
  },
  { 
    headerName: "PE TTM", 
    headerTooltip: 'Trailing 12 month PE',
  //  cellRenderer: (params) => params.value,
    width: 100,
    sortable: true,
    cellStyle: {'text-align': 'right'},
    field: "PEttm"
  },
  { 
    headerName: "Avg $Vol", 
    headerTooltip: 'close * avgVol50d / 1000',
    cellRenderer: (params) => fmtPrice(params.value),
    width: 100,
    sortable: true,
    cellStyle: {'text-align': 'right'},
    field: "dollarVol"
  },
];

/*

Location: "Santa Clara, California"
PEttm: 23.64
ShortName: "Agilent Techno"
ask: 67.39916699999999
avgVol50d: 2849033
bid: 67.37916699999998
close: 67.46
company: "Agilent Technologies Inc"
high52wk: 75.11
increment: 0.023610999999999997
last: 67.38916699999999
low52wk: 60.42
mktCap: 21488034000
pc: -0.001050000000000111
sector: "Health Care"
sharesOut: 318530000
subIndustry: "Health Care Equipment"
symbol: "A"
volPct50d: 0.35
dollarVol: close/ avgVol50d



*/