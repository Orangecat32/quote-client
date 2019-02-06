import {ONE_MILLION, fmtMktCap} from '../../../shared/utils';

export const option = (p) => {
  const data = buildSeries(p.sectors, p.portfolio, p.selectedSector);
   return (
    {
      tooltip : {
        trigger: 'item',
        formatter: function(params) {
            const firm = params.data[5];
            return `${firm.symbol}    MktCap: ${fmtMktCap(firm.mktCap)}M </br> ${firm.company}`;
        }
      },
      xAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        name: 'Avg $ Volume (millions)',
        nameLocation: 'middle',
        nameGap: 30,
    },
    yAxis: {
        name: 'PE TTM',
        nameLocation: 'middle',
        nameGap: 50,
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
  const items = portfolio.map(f => [f.avgVol50d * f.close / ONE_MILLION, f.PEttm, f.mktCap / 1000 , f.symbol, f.sector, f]);
  return selectedSector ? fillSeries(selectedSector, items) : sectors.map(s => fillSeries(s, items));
}


const fillSeries = (sector, items) => {
  return {
    name: sector,
    data: items.filter(item => item[4] === sector),
    type: 'scatter',
    symbolSize: function (x) {
        return Math.sqrt(x[2]) / 5e2;
    },
    // label: {
    //     emphasis: {
    //         show: true,
    //         formatter: function (param) {
    //             return param.data[3];
    //         },
    //         position: 'top'
    //     }
    // },
    itemStyle: {
        normal: {
            shadowBlur: 10,
            shadowColor: 'rgba(25, 100, 150, 0.5)',
            shadowOffsetY: 5,
        }
    }
  };
};

