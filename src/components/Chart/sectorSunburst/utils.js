export const option = (p) => {

  const data = 
  [
    {
      name: 'SPX',
      value: (p.sectors || []).length,
      children: (p.sectors || []).map(s => (
        {
          name: s, 
          value: 1, 
          children: p.portfolio.filter(f => (f.sector === s)).map(g => (
            {
              name: g.subIndustry,
              value: 1,
              children: p.portfolio.filter(h => (g.subIndustry === h.subIndustry)).map(k => (
                {
                  name: k.symbol,
                  value: 1,
                  children: []
                }
              ))
            }
          ))
        }
      )),
    }
  ];

  return {
    tooltip : {
      trigger: 'item',
      formatter: "{a} {b} {c}"
    },
    visualMap: {
      type: 'continuous',
      min: 0,
      max: 10,
      inRange: {
          color: ['#2D5F73', '#538EA6', '#F2D1B3', '#F2B8A2', '#F28C8C']
      }
    },
    series: {
      type: 'sunburst',
      data: data,
      radius: [0, '90%'],
      label: {}
      // label: {
      //     rotate: 'radial'
      // }
    }
  }
};

