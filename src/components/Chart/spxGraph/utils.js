
import {ONE_MILLION, fmtMktCap, isNullOrWhitespace, sectorSubIndustries} from '../../../shared/utils';

export const option = (p) => {
  const  data = buildSeries(p.sectors, p.portfolio, p.selectedSector, p.selectedSubIndustry);
  return {
    tooltip : {
      trigger: 'item',
      formatter: function(params) {
        if(params && params.data && params.data[5]){
          const firm = params.data[5];
          return `${firm.symbol}    MktCap: ${fmtMktCap(firm.mktCap)}B </br> ${firm.company}`;
        } else {
         // console.log('fp',params);
          return '';
        }      
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
};

const buildSeries = (sectors, portfolio, selectedSector, selectedSubIndustry) => {
 
  if(isNullOrWhitespace(selectedSector) && isNullOrWhitespace(selectedSubIndustry)) {
    const items = portfolio.map(f => [f.avgVol50d * f.close / ONE_MILLION, f.PEttm, f.mktCap / 1000 , f.symbol, f.sector, f]);
    return sectors.map(s => fillSeries(s, items.filter(i => i[4] === s)));
  }

  if(isNullOrWhitespace(selectedSubIndustry)) {
    const items1 = portfolio.filter(p => p.sector === selectedSector);
    const items2 = items1.map(f => [f.avgVol50d * f.close / ONE_MILLION, f.PEttm, f.mktCap / 1000 , f.symbol, f.subIndustry, f]);
    const subs = sectorSubIndustries(portfolio, selectedSector);
    return subs.map(sub => fillSeries(sub, items2.filter(f => f[5].subIndustry === sub)));
  }

  // just one sub industry
  const items3 = portfolio.filter(p => p.subIndustry === selectedSubIndustry)
    .map(f => [f.avgVol50d * f.close / ONE_MILLION, f.PEttm, f.mktCap / 1000 , f.symbol, f.symbol, f]);

  return items3.map(i => fillSeries(i.symbol, [i]));
}


const fillSeries = (seriesName, data) => {

  return {
    name: seriesName,
    data: data,
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

