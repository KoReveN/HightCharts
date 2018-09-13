$(function () {

    var piePersonal = Math.round(percentPersonalActiveCustomers),
        pieTeam = Math.round(percentTeamActiveCustomers);
    ///
    /// Item 4 **** QUALIFICATIONS *@
    /// ***** КРУГОВАЯ ДИАГРАММА *****

    var pirChartRetentionOptions = {
        chart: {
            type: 'solidgauge',
            height: '170%',
           //marginTop: 50,
        },

        credits: {
            enabled: false
        },

        title: {
            text: 'Personal',
            y: 50,
            style: {
                fontSize: '22px',
                color: "#73D1CF",
            }
        },

        tooltip: {
            enabled: false
        },

        pane: {
            startAngle: 180,
            endAngle: -180,
            y: -100,
            background: [{ // Track for Move
                outerRadius: '120%',
                innerRadius: '95%',
                backgroundColor: "#D4D4D4",
                borderWidth: 0
            }]
        },

        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: []
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    enabled: false
                },
                linecap: 'round'
            }
        },

        series: [{
            name: 'Personal',
            data: [{
                color: "#73D1CF",
                radius: '120%',
                innerRadius: '95%',
                y: 58
            }],
            dataLabels: {
                enabled: true,
                useHTML: true,
                borderWidth: 0,
                padding: -20,
                style: {
                    fontSize: '24px',
                },
                format: '<br><br><span style="font-size:2em; color: {point.color}; font-weight: bold">{y}%</span>'
            }
        }],
    };

    // PERSONAL
    pirChartRetentionOptions.chart.renderTo = 'pirChartRetention';
    pirChartRetentionOptions.title.text = 'Personal';
    pirChartRetentionOptions.series[0].name = 'Personal';
    pirChartRetentionOptions.series[0].data[0].y = piePersonal;

    new Highcharts.Chart(pirChartRetentionOptions);

    // TEAM
    pirChartRetentionOptions.chart.renderTo = 'pirChartRetention2';
    pirChartRetentionOptions.title.text = 'Team';
    pirChartRetentionOptions.series[0].name = 'Team';
    pirChartRetentionOptions.series[0].data[0].y = pieTeam ;
    new Highcharts.Chart(pirChartRetentionOptions);

});

