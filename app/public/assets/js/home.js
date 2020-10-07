function formatDate(d) {
    var day = String(d.getDate())
    //add leading zero if day is is single digit
    if (day.length == 1)
        day = '0' + day
    var month = String((d.getMonth() + 1))
    //add leading zero if month is is single digit
    if (month.length == 1)
        month = '0' + month
    return d.getFullYear() + "-" + month + "-" + day
}

var enableDays = [];
$serviceDates = document.getElementsByClassName('service-date');
for (var d in $serviceDates) {
    enableDays.push($serviceDates[d].innerText);
}
console.log(enableDays);

$inputDatePicker = $(".datepicker");
$inputDatePicker.datepicker({
    maxViewMode: 2,
    weekStart: 1,
    startDate: "+0d",
    beforeShowDay: function (date) {
        console.log(formatDate(date));
        if (enableDays.indexOf(formatDate(date)) < 0)
            return {
                enabled: false
            }
        else
            return {
                enabled: true
            }
    },
    todayHighlight: true,
    format: "dd-mm-yyyy",
    clearBtn: true,
    autoclose: true

})
.on('changeDate', function (e) {
    window.location = 'http://localhost:8080/service/date/' + formatDate(e.date);
});
$inputDatePicker.data('datepicker').hide = function () {};
$inputDatePicker.datepicker('show');



document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        dateClick: function (info) {
            console.log('clicked on ' + info.dateStr);
        },
        events: [
            {
                id: 'a',
                title: 'my event',
                start: '2020-10-07',
                url: 'http://localhost:8080/service/'
            },
            {
                id: 'b',
                title: 'my event b',
                start: '2020-10-07'
            }
        ]
    });
    calendar.render();
});