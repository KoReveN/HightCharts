
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


    // Add arrows
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


    // Вариант 1:
    //$('.value-header').attr('title', 'TootlipText to show').attr('data-toggle', 'tooltip').attr('data-placement', 'top');
    //$('.value-header').tooltip();

    // Вариант 2: + CSS for tooltiptext class
   // $('.value-header').append('<span class="tooltiptext">Tooltip text</span>'); //<div class="tooltip">Hover over me</div>

   

    // Вариант 3: .....
    //var showPopup = function (e) {
    //    console.log(this)
    //}
    //var hidePopup = function (e) {
    //    console.log(this)
    //}
    // $('.value-header').hover(showPopup, hidePopup);

    



});

