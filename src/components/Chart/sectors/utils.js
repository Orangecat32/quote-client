const ONE_BILLION = 1000000000;

export const option = (props) => {
  console.log('sector chart:', props.selectedSector);
  const firms = props.filteredTickers
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
        trigger: 'axis'
    },
    // legend: {
    //     data:['2011年', '2012年']
    // },
    // toolbox: {
    //     show : true,
    //     feature : {
    //         mark : {show: true},
    //         dataView : {show: true, readOnly: false},
    //         magicType: {show: true, type: ['line', 'bar']},
    //         restore : {show: true},
    //         saveAsImage : {show: true}
    //     }
    // },
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
        // {
        //     name:'2011年',
        //     type:'bar',
        //     data:[18203, 23489, 29034, 104970, 131744, 630230]
        // },
        {
            name:'Mkt Cap',
            type:'bar',
            data: values
        }
    ]
  }
};
 