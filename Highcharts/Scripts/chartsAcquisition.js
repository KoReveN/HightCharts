$(function () {

    //***** График №3 (График НОВЫХ клиентов) *****

    var chartNewOptions = {

        chart: {
            type: 'column',
        },

        credits: {
            enabled: false
        },

        title: {
            text: 'New Customers - Personal',
            style: {
                fontWeight: 'bold',
                fontSize: '14px',
                color: '#A5E2E1',
                textOverflow: "ellipsis",
            }
        },

        legend: {
            symbolRadius: 0,
        },

        xAxis: {
            categories: ['Mar', 'Feb', 'Avg'],
        },

        yAxis: {
            title: null,
        },

        series: [{
            name: "Personal",
            data: [320, 240, 0],
            color: '#B7B5DA',
        }],

    };


    
    // PERSONAL
    chartNewOptions.chart.renderTo = 'chartNewPersonal';
    chartNewOptions.title.text = 'New Customers - Personal';
    chartNewOptions.series[0].name = "Personal";
    new Highcharts.chart(chartNewOptions);

    // TEAM
    chartNewOptions.chart.renderTo = 'chartNewTeam';
    chartNewOptions.title.text = 'New Customers - Team';
    chartNewOptions.series[0].name = "Team";
    new Highcharts.chart(chartNewOptions);






    //Highcharts.chart('chartNewPersonal', {
    //    chart: {
    //        type: 'column',
    //    },

    //    credits: {
    //        enabled: false
    //    },

    //    title: {
    //        text: 'New Customers - Personal',
    //        style: {
    //            fontWeight: 'bold',
    //            fontSize: '14px',
    //            color: '#A5E2E1',
    //            textOverflow: "ellipsis",
    //        }
    //    },
    //    xAxis: {
    //        categories: ['Mar', 'Feb', 'Avg'],
    //    },
    //    yAxis: {
    //        title: null,
    //    },
    //    series: [{
    //        name: "Personal",
    //        data: [320, 240, 0],
    //        color: '#B7B5DA',
    //    }]
    //});

    //// COPY !!!
    //Highcharts.chart('chartNewTeam', {
    //    chart: {
    //        type: 'column',
    //    },

    //    credits: {
    //        enabled: false
    //    },

    //    title: {
    //        text: 'New Customers - Team',
    //        style: {
    //            fontWeight: 'bold',
    //            fontSize: '14px',
    //            color: '#A5E2E1',
    //            textOverflow: "ellipsis",
    //        }
    //    },
    //    xAxis: {
    //        categories: ['Mar', 'Feb', 'Avg'],
    //    },
    //    yAxis: {
    //        title: null,
    //        labels: {
    //            formatter: function () {
    //                return this.value + 'k';
    //            },
    //            //style: {
    //            //    fontWeight: 'bold',
    //            //    fontSize: '14px',
    //            //}
    //        },
    //    },
    //    series: [{
    //        name: "Team",
    //        data: [45, 98, 0],
    //        color: '#76D2CF',
    //    }]
    //});


});
