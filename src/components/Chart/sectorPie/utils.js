
import {sectorSubIndustries, computeSubIndustryWeights, subIndustryFirms} from '../../../shared/utils';
import {isNullOrWhitespace} from '../../../shared/utils';
import * as CONST from './constants';

export const graphOptions = (props) => {
  console.log('graphOptions: ', props.selectedSector, props.selectedSubIndustry, props.selectedFirm);
  return isNullOrWhitespace(props.selectedSector) 
    ? indexGraph(props)
    : isNullOrWhitespace(props.selectedSubIndustry) 
      ? sectorGraph(props)
      : subIndustryGraph(props);
}; 

// top level graph, lists the spx sectors
export const indexGraph = (p) => {
  return {
    title : {
      text: 'SPX Market Cap',
    // subtext: 'sub text',
      x:'left'
    },
    tooltip : {
      trigger: 'item',
      formatter: "{b} </br>{d}%"
    },
    // legend: {
    //   orient: 'vertical',
    //   left: 'left',
    //   data: p.sectors
    // },
    series : [
      {
      name: CONST.SERIES_SECTOR,
      type: 'pie',
      radius : ['35%', '60%'],
      center: ['50%', '60%'],
      data: p.allSectors,
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      },
      {
        name: 'none',
        type: 'pie',
        radius : ['0', '25%'],
        center: ['50%', '60%'],
        data: [],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
};

// subIndustries of the selectedSector
export const sectorGraph = (p) => {
  const subs = sectorSubIndustries(p.portfolio, p.selectedSector);
  const data = computeSubIndustryWeights(p.portfolio, p.selectedSector, subs);

  return {
    title : {
      text: 'SPX Market Cap',
      x:'left'
    },
    tooltip : {
      trigger: 'item',
      formatter: "{b} </br>{d}%"
    },
    series : [
      {
      name: CONST.SERIES_SUBINDUSTRY,
      type: 'pie',
      radius : ['35%', '60%'],
      center: ['50%', '60%'],
      data: data,
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      },
      {
        name: CONST.SERIES_INDEX,
        type: 'pie',
        radius : ['0', '25%'],
        center: ['50%', '60%'],
        data: [{value: 100, name: 'SPX'}],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
}


// firms in the subIndustry
export const subIndustryGraph = (p) => {
  const data = subIndustryFirms(p.portfolio, p.selectedSubIndustry);

  return {
    title : {
      text: 'SPX Market Cap',
      x:'left'
    },
    tooltip : {
      trigger: 'item',
      formatter: "{b} </br>{d}%"
    },
    series : [
      {
      name: CONST.SERIES_FIRM,
      type: 'pie',
      radius : ['35%', '60%'],
      center: ['50%', '60%'],
      data: data,
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      },
      {
        name: CONST.SERIES_SECTOR,
        type: 'pie',
        radius : ['0', '25%'],
        center: ['50%', '60%'],
        data: [{value: 100, name: p.selectedSector}],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
}
