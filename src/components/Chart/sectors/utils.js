const ONE_BILLION = 1000000000;

export const option = (props) => {
  console.log('sector chart:', props.selectedSector);
  const firms = props.portfolio
    .filter(f => f.sector === props.selectedSector)
    .map(t => ({name: t.symbol, value: t.mktCap / ONE_BILLION}))
    .sort((a, b) => a.value - b.value);

  const names = firms.map(f => f.name);
  const values = firms.map(f => f.value);

  return {
    title : {
        text: `Mkt Cap (billions) ${names.length} firms`,
     //   subtext: 'subtext'
    },
    tooltip : {
      trigger: 'axis',
        formatter: "{b} {d}%"
    },
    calculable : true,
    xAxis : [
        {
            type : 'value',
            boundaryGap : [0, 0.01]
        }
    ],
    yAxis : [
        {
            type : 'category',
            data : names
        }
    ],
    series : [
        {
            name:'Mkt Cap',
            type:'bar',
            data: values
        }
    ]
  }
};
 