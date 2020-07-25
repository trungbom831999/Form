//show password
$(".toggle-password").bind('mousedown touchstart', function () {
    var input = $($(this).attr("toggle"));
    input.attr("type", "text");
});

$(".toggle-password").bind('mouseup touchend', function () {
    var input = $($(this).attr("toggle"));
    input.attr("type", "password");
});

// $(".toggle-password").click(function () {

//     $(this).toggleClass("fa-eye fa-eye-slash");
//     var input = $($(this).attr("toggle"));
//     if (input.attr("type") == "password") {
//         input.attr("type", "text");
//     } else {
//         input.attr("type", "password");
//     }
// });

//max date
$(document).ready(function () {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth();
    var yyyy = today.getFullYear()-18;
    //console.log(yyyy-18);
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    today = yyyy + '-' + mm + '-' + dd;
    $("#birthday").attr("max", today);
})