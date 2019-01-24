
export const columnDef = [
  {
    headerName: "Symbol", 
    field: "symbol"
  },
  {
    headerName: "Bid", 
    field: "bid",
    cellRenderer: (params) => (params.value ? params.value.toFixed(2) : '')
  },
  {
    headerName: "Ask", 
    cellRenderer: (params) => (params.value ? params.value.toFixed(2) : ''),
    field: "ask"
  },
  {
    headerName: "Location", 
    field: "Location"
  },
  {
    headerName: "Sub-Industry", 
    field: "subIndustry"
  }
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



*/