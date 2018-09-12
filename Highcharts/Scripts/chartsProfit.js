$(function () {

        //***** График №4 (График Profit ) *****

    var chartProfitOptions = {
        chart: {
            //   zoomType: 'xy'
        },

        title: {
            text: 'Personal',
            style: {
                color: '#73D1CF',
            }
        },

        xAxis: {
            categories: ['Current', 'Previous', 'AVG'],
            crosshair: true,
            labels: {
                style: {
                    fontSize: "9px",
                }
            },
        },

        yAxis: [{ // Primary yAxis
            min: 0,
            max: 60,
            labels: {
                format: '{value}%',
            },
            title: {
                text: null,
            }
        }, { // Secondary yAxis
            min: 0,
            max: 70000,
            labels: {
                format: '${value}',
            },
            title: {
                text: null,
            },
            opposite: true
        }],

        tooltip: {
            shared: true
        },

        plotOptions: {
            spline: {
                dataLabels: {
                    enabled: true,
                    crop: false,
                    overflow: 'none',
                    useHTML: true,
                    borderWidth: 0,
                    padding: 5,
                    style: {
                        fontSize: '12px',
                        color: '#AFABA8',
                    },
                    format: '{y} %'
                },
                linecap: 'round',
                marker: {
                    radius: 4,
                    fillColor: '#FFFFFF',
                    lineWidth: 3,
                    lineColor: null // inherit from series
                },
            },
        },

        legend: {
            align: 'center',
            verticalAlign: 'bottom',
            symbolRadius: 0,
            itemStyle: {
                fontSize: "11px",
                fontWeight: "normal",
                textOverflow: "ellipsis",
            }
        },

        series: [{
            name: 'Total Amount',
            type: 'column',
            yAxis: 1,
            data: [55000, 50000, 60000],
            color: '#F68EAA',
            tooltip: {
                valueSuffix: ' mm'
            }

        }, {
                name: 'Profit %',
                type: 'spline',
                color: '#7AD1CF',
                width: 15,
                data: [48, 50, 60],
                tooltip: {
                    valueSuffix: '°C'
                },
        }],

        credits: {
            enabled: false
        },

    };


    // PERSONAL
    chartProfitOptions.chart.renderTo = 'chartProfitPersonal';
    chartProfitOptions.title.text = 'Personal';
    new Highcharts.chart(chartProfitOptions);

    // TEAM
    chartProfitOptions.chart.renderTo = 'chartProfitTeam';
    chartProfitOptions.title.text = 'Team';
    new Highcharts.chart(chartProfitOptions);






    //Highcharts.chart('chartProfitPersonal', {

    //    chart: {
    //        //   zoomType: 'xy'
    //    },

    //    title: {
    //        text: 'Personal',
    //        style: {
    //            color: '#73D1CF',
    //        }
    //    },

    //    xAxis: {
    //        categories: ['Current', 'Previous', 'AVG'],
    //        crosshair: true,
    //        labels: {
    //            style: {
    //                fontSize: "9px",
    //            }
    //        },
    //    },

    //    yAxis: [{ // Primary yAxis
    //        min: 0,
    //        max: 60,
    //        labels: {
    //            format: '{value}%',
    //        },
    //        title: {
    //            text: null,
    //        }
    //    }, { // Secondary yAxis
    //        min: 0,
    //        max: 70000,
    //        labels: {
    //            format: '${value}',
    //        },
    //        title: {
    //            text: null,
    //        },
    //        opposite: true
    //    }],

    //    tooltip: {
    //        shared: true
    //    },

    //    plotOptions: {
    //        spline: {
    //            dataLabels: {
    //                enabled: true,
    //                useHTML: true,
    //                borderWidth: 0,
    //                padding: 0,
    //                style: {
    //                    fontSize: '12px',
    //                    color: '#AFABA8',
    //                },
    //                format: '{y} %'
    //            },
    //            linecap: 'round'
    //        },
    //        marker: {
    //            radius: 5,
    //            fillColor: '#FFFFFF',
    //            lineWidth: 5,
    //            lineColor: null // inherit from series
    //        }
    //    },

    //    legend: {
    //        align: 'center',
    //        verticalAlign: 'bottom',
    //        itemStyle: {
    //            fontSize: "11px",
    //            fontWeight: "normal",
    //            textOverflow: "ellipsis",
    //        }
    //    },

    //    series: [{
    //        name: 'Total Amount',
    //        type: 'column',
    //        yAxis: 1,
    //        data: [55000, 50000, 60000],
    //        color: '#F68EAA',
    //        tooltip: {
    //            valueSuffix: ' mm'
    //        }

    //    }, {
    //        name: 'Profit %',
    //        type: 'spline',
    //        color: '#7AD1CF',
    //        width: 15,
    //        data: [48, 50, 60],
    //        tooltip: {
    //            valueSuffix: '°C'
    //        }
    //    }],

    //    credits: {
    //        enabled: false
    //    },
    //});

    //// COPY ****
    //Highcharts.chart('chartProfitTeam', {

    //    chart: {
    //        //   zoomType: 'xy'
    //    },

    //    title: {
    //        text: 'Team',
    //        style: {
    //            color: '#73D1CF',
    //        }
    //    },

    //    xAxis: {
    //        categories: ['Current', 'Previous', 'AVG'],
    //        crosshair: true,
    //        labels: {
    //            style: {
    //                fontSize: "9px",
    //            }
    //        },
    //    },

    //    yAxis: [{ // Primary yAxis
    //        min: 0,
    //        max: 60,
    //        labels: {
    //            format: '{value}%',
    //        },
    //        title: {
    //            text: null,
    //        }
    //    }, { // Secondary yAxis
    //        min: 0,
    //        max: 70000,
    //        labels: {
    //            format: '${value}',
    //        },
    //        title: {
    //            text: null,
    //        },
    //        opposite: true
    //    }],

    //    tooltip: {
    //        shared: true
    //    },

    //    plotOptions: {
    //        spline: {
    //            dataLabels: {
    //                enabled: true,
    //                useHTML: true,
    //                borderWidth: 0,
    //                padding: 0,
    //                style: {
    //                    fontSize: '12px',
    //                    color: '#AFABA8',
    //                },
    //                format: '{y} %'
    //            },
    //            linecap: 'round'
    //        },
    //        marker: {
    //            radius: 5,
    //            fillColor: '#FFFFFF',
    //            lineWidth: 5,
    //            lineColor: null // inherit from series
    //        }
    //    },

    //    legend: {
    //        align: 'center',
    //        verticalAlign: 'bottom',
    //        itemStyle: {
    //            fontSize: "11px",
    //            fontWeight: "normal",
    //            textOverflow: "ellipsis",
    //        }
    //    },

    //    series: [{
    //        name: 'Total Amount',
    //        type: 'column',
    //        yAxis: 1,
    //        data: [55000, 50000, 60000],
    //        color: '#F68EAA',
    //        tooltip: {
    //            valueSuffix: ' mm'
    //        }

    //    }, {
    //        name: 'Profit %',
    //        type: 'spline',
    //        color: '#7AD1CF',
    //        width: 15,
    //        data: [48, 50, 60],
    //        tooltip: {
    //            valueSuffix: '°C'
    //        }
    //    }],

    //    credits: {
    //        enabled: false
    //    },
    //});




});