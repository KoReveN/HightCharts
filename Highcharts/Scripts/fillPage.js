
//var chart1; // globally available
//var testData = [];


// Set param:
var personalTotalCustomers = 60,
    personalActiveCustomers = 35,
    personalInactiveCustomers = 25,
    teamTotalCustomers = 200,
    teamActiveCustomers = 125,
    teamInactiveCustomers = 75;

var percentPersonalActiveCustomers = personalActiveCustomers * 100 / personalTotalCustomers ;
var percentTeamActiveCustomers = teamActiveCustomers * 100 / teamTotalCustomers;





$(function () {



    $('.div-row').each(function (index, row) {
        var val1 = parseFloat($('.align-left .value-text', row).text().replace(/[^0-9\.]/g, ''));
        var val2 = parseFloat($('.align-right .value-text', row).text().replace(/[^0-9\.]/g, ''));

        if ($.isNumeric(val1) && $.isNumeric(val2)) {
            if (val2 > 50 && val2 <= 100) {
                if ($('.align-right .value-text', row).text().includes('%')) {
                    $('.align-right .value-text', row).append($('<img src="/Content/img/up.PNG" height="22" />'));
                }
            }
            if (($('.align-left .value-text', row).text().includes('%') && $('.align-right .value-text', row).text().includes('%'))
                || ($('.align-left .value-text', row).text().includes('$') && $('.align-right .value-text', row).text().includes('$'))) {
                if (val1 > val2) {
                    $('.align-left .value-text', row).append($('<img src="/Content/img/up.PNG" height="22" />'));
                } else if (val1 < val2) {
                    $('.align-left .value-text', row).append($('<img src="/Content/img/down.PNG" height="22" />'));
                }
            }
        }
    })


    //var first = $('.div-row  .align-left .value-text');

    //$('.div-row  .align-left .value-text').each(function (index, element) {
    //    console.log($(element).text());

    //})

    //.div-row  align-left   value-text
    //.div-row align-right value-text

    //$('.div-row  .align-left .value-text, .div-row  .align-right .value-text').each(function (index, element) {
    //    console.log($(element).text());

    //})






 // console.log(val1 + ' -|- ' + val2);
           // val1 = $('.align-left .value-text', row).text().match(/(?:[0-9]+)\.(?:[0-9]{2})/g);


   // val1 = $('.align-left .value-text', row).text().replace(/[^0-9\.]/g, '');


    //$('.div-row').each(function (index, row) {
    //    var val1 = $('.align-left .value-text', row).text().replace(/[^0-9\.]/g, '');
    //    var val2 = $('.align-right .value-text', row).text().replace(/[^0-9\.]/g, '');
    //    console.log(val1 + ' -|- ' + val2);
    //    if ($.isNumeric(val1) && $.isNumeric(val2)) {
    //        if (val2 > 50 && val2 <= 100) {
    //            console.log('Add arrow UP ' + val2);
    //        }
    //        if (val1 > val2) {
    //            console.log('go go -> ' + val1 + ' ' + val2);
    //        }
    //    } else val1 = 'string=)';


    //})




    //$.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?',
    //    function (data) { testData = data;});
    // Create the chart

    //$.each(products, function (product) {
    //    testData.push({ "name": product.ProductName, "data": product.UnitPrice});
    //})

    //    testData = products.UnitPrice;

    //    chart1 = Highcharts.chart('container', {
    //        chart: {
    //            type: 'bar'
    //        },
    //        series: [{
    //            name: 'Products',
    //            data: testData // predefined JavaScript array
    //        }]
    //    });







});

