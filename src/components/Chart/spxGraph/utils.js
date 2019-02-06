const ONE_BILLION = 1000000000;
const ONE_MILLION = 1000;

export const option = (p) => {
  const data = buildSeries(p.sectors, p.portfolio, p.selectedSector);
   return (
    {
    xAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    yAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        scale: true
    },
    series: data
    }
)};

const buildSeries = (sectors, portfolio, selectedSector) => {
  const items = portfolio.map(f => [f.avgVol50d / 1000, f.PEttm, f.mktCap /1000, f.symbol, f.sector]);
  return selectedSector ? fillSeries(selectedSector, items) : sectors.map(s => fillSeries(s, items));
}


const fillSeries = (sector, items) => {
  const data = items.filter(item => item[4] === sector);

  return {
    name: sector,
    data: data,
    type: 'scatter',
    symbolSize: function (x) {
        return Math.sqrt(x[2]) / 5e2;
    },
    label: {
        emphasis: {
            show: true,
            formatter: function (param) {
                return param.data[3];
            },
            position: 'top'
        }
    },
    itemStyle: {
        normal: {
            shadowBlur: 10,
            shadowColor: 'rgba(25, 100, 150, 0.5)',
            shadowOffsetY: 5,
        }
    }
  };
};

