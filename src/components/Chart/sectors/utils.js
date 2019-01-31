const ONE_BILLION = 1000000000;

export const getOption = (p) => ({
  title : {
    text: 'SPX Weightings',
   // subtext: 'sub text',
    x:'center'
  },
  tooltip : {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: p.sectors
  },
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
  },{})

  p.portfolio.forEach(t => {
    sectors[t.sector].value += t.mktCap;
  });

 const x = Object.values(sectors).map(s => Object.assign(s,{value : s.value / ONE_BILLION }));
console.log(x)
 return x;
}