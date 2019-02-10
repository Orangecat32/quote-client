
var upColor = '#ec0000';
var upBorderColor = '#8A0000';
var downColor = '#00da3c';
var downBorderColor = '#008F28';


// [dateString, open，close，lowest，highest]


function splitData(rawData) {
    var categoryData = [];
    var values = []
    for (var i = 0; i < rawData.length; i++) {
        categoryData.push(rawData[i].splice(0, 1)[0]);
        values.push(rawData[i])
    }
    return {
        categoryData: categoryData,
        values: values
    };
}

function calculateMA(data0, dayCount) {
    var result = [];
    for (var i = 0, len = (data0.values || []).length; i < len; i++) {
        if (i < dayCount) {
            result.push('-');
            continue;
        }
        var sum = 0;
        for (var j = 0; j < dayCount; j++) {
            sum += data0.values[i - j][1];
        }
        result.push(sum / dayCount);
    }
    return result;
}



export const option = (p) => {

  const data = p.iexHist.chart.map(d => ([d.date, d.open, d.close, d.low, d.high]));
  const data0 = splitData(data);

  return  {
    title: {
        text: p.iexHist.symbol,
        left: 0
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    // legend: {
    //     data: ['Candlestick', 'MA5', 'MA10', 'MA20', 'MA30']
    // },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '15%'
    },
    xAxis: {
        type: 'category',
        data: data0.categoryData,
        scale: true,
        boundaryGap : false,
        axisLine: {onZero: false},
        splitLine: {show: false},
        splitNumber: 20,
        min: 'dataMin',
        max: 'dataMax'
    },
    yAxis: {
        scale: true,
        splitArea: {
            show: true
        }
    },
    dataZoom: [
        {
            type: 'inside',
            start: 0,
            end: 100
        },
        {
            show: true,
            type: 'slider',
            y: '90%',
            start: 0,
            end: 100
        }
    ],
    series: [
        {
            name: 'Candlestick',
            type: 'candlestick',
            data: data0.values,
            itemStyle: {
                normal: {
                    color: upColor,
                    color0: downColor,
                    borderColor: upBorderColor,
                    borderColor0: downBorderColor
                }
            },
            markPoint: {
                label: {
                    normal: {
                        formatter: function (param) {
                            return param != null ? Math.round(param.value) : '';
                        }
                    }
                },
                data: [
                    {
                        name: 'Averages',
                        coord: ['2013/5/31', 2300],
                        value: 2300,
                        itemStyle: {
                            normal: {color: 'rgb(41,60,85)'}
                        }
                    },
                    {
                        name: 'highest value',
                        type: 'max',
                        valueDim: 'highest'
                    },
                    {
                        name: 'lowest value',
                        type: 'min',
                        valueDim: 'lowest'
                    },
                    {
                        name: 'average value on close',
                        type: 'average',
                        valueDim: 'close'
                    }
                ],
                tooltip: {
                    formatter: function (param) {
                        return param.name + '<br>' + (param.data.coord || '');
                    }
                }
            },
            markLine: {
                symbol: ['none', 'none'],
                data: [
                    [
                        {
                            name: 'from lowest to highest',
                            type: 'min',
                            valueDim: 'lowest',
                            symbol: 'circle',
                            symbolSize: 10,
                            label: {
                                normal: {show: false},
                                emphasis: {show: false}
                            }
                        },
                        {
                            type: 'max',
                            valueDim: 'highest',
                            symbol: 'circle',
                            symbolSize: 10,
                            label: {
                                normal: {show: false},
                                emphasis: {show: false}
                            }
                        }
                    ],
                    {
                        name: 'min line on close',
                        type: 'min',
                        valueDim: 'close'
                    },
                    {
                        name: 'max line on close',
                        type: 'max',
                        valueDim: 'close'
                    }
                ]
            }
        },
        {
            name: 'MA5',
            type: 'line',
            data: calculateMA(5),
            smooth: true,
            lineStyle: {
                normal: {opacity: 0.5}
            }
        },
        {
            name: 'MA10',
            type: 'line',
            data: calculateMA(10),
            smooth: true,
            lineStyle: {
                normal: {opacity: 0.5}
            }
        },
        {
            name: 'MA20',
            type: 'line',
            data: calculateMA(20),
            smooth: true,
            lineStyle: {
                normal: {opacity: 0.5}
            }
        },
        {
            name: 'MA30',
            type: 'line',
            data: calculateMA(30),
            smooth: true,
            lineStyle: {
                normal: {opacity: 0.5}
            }
        },

    ]
  }
};



/*

//  daily data

change: 0.95
changeOverTime: 0.10237828578957785
changePercent: 0.571
close: 167.33
date: "2019-02-08"
high: 167.37
label: "Feb 8"
low: 164.21
open: 164.47
unadjustedVolume: 12561422
volume: 12561422
vwap: 165.8799



*/