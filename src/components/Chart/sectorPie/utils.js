const ONE_BILLION = 1000000000;

export const getAllSectorsOption = (p) => ({
  title : {
    text: 'SPX Sector Market Cap',
   // subtext: 'sub text',
    x:'center'
  },
  tooltip : {
    trigger: 'item',
    formatter: "{b} {d}%"
  },
  // legend: {
  //   orient: 'vertical',
  //   left: 'left',
  //   data: p.sectors
  // },
  series : [
    {
    name: 'Sector',
    type: 'pie',
    radius : '55%',
    center: ['50%', '60%'],
    data: computeSectorWeights(p),
    itemStyle: {
      emphasis: {
      shadowBlur: 10,
      shadowOffsetX: 0,
      shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    }
    }
  ]
});


const computeSectorWeights = (p) => {
  const sectors = (p.sectors || []).reduce((acc, s) => {
    return {...acc, [s]: {value: 0, name: s} }
  },{});

  // add up the capitalization of the sectors
  (p.portfolio || []).forEach(t => sectors[t.sector].value += t.mktCap);

  //  divide by billion to get reasonable looking number
  return Object.values(sectors).map(s => ({ ...s, value : s.value / ONE_BILLION }));
}