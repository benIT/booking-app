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

//https://bootstrap-datepicker.readthedocs.io/en/latest/
//@todo get that from server
var enableDays = ["2020-10-06", "2020-10-07"];
$('.datepicker').datepicker({
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