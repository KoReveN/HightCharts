$(function () {

    ///
    /// Item 4 **** QUALIFICATIONS *@
    ///

    var chartRetentionOptions = {

        chart: {
            //   renderTo: '',
            type: 'column',
            height: '100%',
      //    marginBottom: 75,
        },

        title: {
            text: null
        },

        xAxis: {
            categories: ['Inactive', 'Active'],
        },

        yAxis: {
            min: 0,
            title: {
                text: null
            },
            labels: {
                formatter: function () {
                    return this.value + ' %';
                },
                style: {
                    fontWeight: 'bold',
                    fontSize: '14px',
                }
            },
            tickInterval: 10,
            stackLabels: {
                enabled: false,
                style: {
                    fontWeight: 'bold',
                }
            }
        },

        legend: {
            align: 'left',
           // height: 40,
            x: 0,
            verticalAlign: 'bottom',
           // y: 25,
            itemDistance: 5,
           // floating: true,
            borderWidth: 0,
            shadow: false,
            alignColumns: true,
            symbolRadius: 0,
            itemStyle: {
                fontWeight: 'normal',
                fontSize: '9px',

            },
        },

        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },

        plotOptions: {
            column: {
                stacking: 'normal',
                borderWidth: 0,
            },
        },

        series: [{
            name: '0-30 Days',
            data: [0, 15],
            color: '#F399C0',
        },
        {
            name: '30-60 Days',
            data: [0, 7],
            color: '#B7B5DB',
            marker: {
                symbol: 'square',
                lineColor: null,
                lineWidth: 0
            }
        },
        {
            name: '60-90 Days',
            data: [0, 8],
            color: '#99BFE3',
        },
        {
            name: '90-120 Days',
            data: [0, 5],
            color: '#E1B8D8',
        },
        {
            name: '120+ Days',
            data: [25, 0],
            color: '#7AD1D0',
        }],

        credits: {
            enabled: false
        },
    };

    // PERSONAL
    chartRetentionOptions.chart.renderTo = 'chartRetention';
    new Highcharts.Chart(chartRetentionOptions);

    // TEAM
    chartRetentionOptions.chart.renderTo = 'chartRetention2';
    new Highcharts.Chart(chartRetentionOptions);








});






    //Highcharts.chart('chartRetention', {

    //    chart: {
    //        type: 'column',
    //        marginBottom: 75,
    //    },

    //    title: {
    //        text: null
    //    },

    //    xAxis: {
    //        categories: ['Inactive', 'Active'],
    //    },

    //    yAxis: {
    //        min: 0,
    //        title: {
    //            text: null
    //        },
    //        labels: {
    //            formatter: function () {
    //                return this.value + ' %';
    //            },
    //            style: {
    //                fontWeight: 'bold',
    //                fontSize: '14px',
    //            }
    //        },
    //        tickInterval: 10,
    //        stackLabels: {
    //            enabled: false,
    //            style: {
    //                fontWeight: 'bold',
    //            }
    //        }
    //    },

    //    legend: {
    //        align: 'left',
    //        x: 0,
    //        verticalAlign: 'bottom',
    //        y: 25,
    //        floating: true,
    //        borderWidth: 0,
    //        shadow: false,
    //        itemStyle: {
    //            fontWeight: 'normal',
    //            fontSize: '10px',
    //        },
    //    },

    //    tooltip: {
    //        headerFormat: '<b>{point.x}</b><br/>',
    //        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    //    },

    //    plotOptions: {
    //        column: {
    //            stacking: 'normal',
    //            borderWidth: 0,
    //        }
    //    },

    //    series: [{
    //        name: '0-30 Days',
    //        data: [0, 15],
    //        color: '#F399C0',
    //    },
    //    {
    //        name: '30-60 Days',
    //        data: [0, 7],
    //        color: '#B7B5DB',
    //    },
    //    {
    //        name: '60-90 Days',
    //        data: [0, 8],
    //        color: '#99BFE3',
    //    },
    //    {
    //        name: '90-120 Days',
    //        data: [0, 5],
    //        color: '#E1B8D8',
    //    },
    //    {
    //        name: '120+ Days',
    //        data: [25, 0],
    //        color: '#7AD1D0',
    //        }],

    //    credits: {
    //        enabled: false
    //    },
    //});

    ////***** КРУГОВАЯ ДИАГРАММА *****
    //Highcharts.chart('pirChartRetention', {

    //    chart: {
    //        type: 'solidgauge',
    //        height: '80%',
    //        marginTop: 30,
    //    },

    //    credits: {
    //        enabled: false
    //    },

    //    title: {
    //        text: 'Personal',
    //        // y: 20,
    //        style: {
    //            fontSize: '24px',
    //            color: "#73D1CF",
    //        }
    //    },

    //    tooltip: {
    //        enabled: false
    //    },

    //    pane: {
    //        startAngle: 180,
    //        endAngle: -180,
    //        y: -100,
    //        background: [{ // Track for Move
    //            outerRadius: '100%',
    //            innerRadius: '80%',
    //            backgroundColor: "#D4D4D4",
    //            borderWidth: 0
    //        }]
    //    },

    //    yAxis: {
    //        min: 0,
    //        max: 100,
    //        lineWidth: 0,
    //        tickPositions: []
    //    },

    //    plotOptions: {
    //        solidgauge: {
    //            dataLabels: {
    //                enabled: false
    //            },
    //            linecap: 'round'
    //        }
    //    },

    //    series: [{
    //        name: 'Personal',
    //        data: [{
    //            color: "#73D1CF",
    //            radius: '100%',
    //            innerRadius: '80%',
    //            y: 58
    //        }],
    //        dataLabels: {
    //            enabled: true,
    //            useHTML: true,
    //            borderWidth: 0,
    //            padding: -20,
    //            style: {
    //                fontSize: '24px',
    //            },
    //            format: '<br><br><span style="font-size:2em; color: {point.color}; font-weight: bold">{y}%</span>'
    //        }
    //    }]
    //});


    //// COPY !!!
    //Highcharts.chart('chartRetention2', {
    //    chart: {
    //        type: 'column',
    //        marginBottom: 75,
    //    },

    //    credits: {
    //        enabled: false
    //    },

    //    title: {
    //        text: null
    //    },

    //    xAxis: {
    //        categories: ['Inactive', 'Active'],
    //    },

    //    yAxis: {
    //        min: 0,
    //        title: {
    //            text: null
    //        },
    //        labels: {
    //            formatter: function () {
    //                return this.value + ' %';
    //            },
    //            style: {
    //                fontWeight: 'bold',
    //                fontSize: '14px',
    //            }
    //        },
    //        tickInterval: 10,
    //        stackLabels: {
    //            enabled: false,
    //            style: {
    //                fontWeight: 'bold',
    //            }
    //        }
    //    },

    //    legend: {
    //        align: 'left',
    //        x: 0,
    //        verticalAlign: 'bottom',
    //        y: 25,
    //        floating: true,
    //        borderWidth: 0,
    //        shadow: false,
    //        itemStyle: {
    //            fontWeight: 'normal',
    //            fontSize: '10px',
    //        },
    //    },

    //    tooltip: {
    //        headerFormat: '<b>{point.x}</b><br/>',
    //        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    //    },

    //    plotOptions: {
    //        column: {
    //            stacking: 'normal',
    //            borderWidth: 0,
    //        }
    //    },

    //    series: [{
    //        name: '0-30 Days',
    //        data: [0, 15],
    //        color: '#F399C0',
    //    },
    //    {
    //        name: '30-60 Days',
    //        data: [0, 7],
    //        color: '#B7B5DB',
    //    },
    //    {
    //        name: '60-90 Days',
    //        data: [0, 8],
    //        color: '#99BFE3',
    //    },
    //    {
    //        name: '90-120 Days',
    //        data: [0, 5],
    //        color: '#E1B8D8',
    //    },
    //    {
    //        name: '120+ Days',
    //        data: [25, 0],
    //        color: '#7AD1D0',
    //    }]
    //});
    //***** КРУГОВАЯ ДИАГРАММА *****
//    Highcharts.chart('pirChartRetention2', {

//        chart: {
//            type: 'solidgauge',
//            height: '80%',
//            marginTop: 30,
//        },

//        credits: {
//            enabled: false
//        },

//        title: {
//            text: 'Team',

//            style: {
//                fontSize: '24px',
//                color: "#73D1CF",
//            }
//        },

//        tooltip: {
//            enabled: false
//        },

//        pane: {
//            startAngle: 180,
//            endAngle: -180,
//            y: -100,
//            background: [{ // Track for Move
//                outerRadius: '100%',
//                innerRadius: '80%',
//                backgroundColor: "#D4D4D4",
//                borderWidth: 0
//            }]
//        },

//        yAxis: {
//            min: 0,
//            max: 100,
//            lineWidth: 0,
//            tickPositions: []
//        },

//        plotOptions: {
//            solidgauge: {
//                dataLabels: {
//                    enabled: false
//                },
//                linecap: 'round'
//            }
//        },

//        series: [{
//            name: 'Personal',
//            data: [{
//                color: "#73D1CF",
//                radius: '100%',
//                innerRadius: '80%',
//                y: 63
//            }],
//            dataLabels: {
//                enabled: true,
//                useHTML: true,
//                borderWidth: 0,
//                padding: -20,
//                style: {
//                    fontSize: '24px',
//                },
//                format: '<br><br><span style="font-size:2em; color: {point.color}; font-weight: bold">{y}%</span>'
//            }
//        }]
//    });


