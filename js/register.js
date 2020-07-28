//show password
$("#show-pass").bind('mousedown touchstart', function() {
    var input = $($(this).attr("toggle"));
    input.attr("type", "text");
    console.log("Load show pass");
});

$("#show-pass").bind('mouseup touchend', function() {
    var input = $($(this).attr("toggle"));
    input.attr("type", "password");
});

$("#show-rePass").bind('mousedown touchstart', function() {
    var input = $($(this).attr("toggle"));
    input.attr("type", "text");
    console.log("Load show repass");
});

$("#show-rePass").bind('mouseup touchend', function() {
    var input = $($(this).attr("toggle"));
    input.attr("type", "password");
});

//max date
$(document).ready(function() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth();
    var yyyy = today.getFullYear() - 18;
    //console.log(yyyy-18);
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    today = yyyy + '-' + mm + '-' + dd;
    $("#birthday").attr("max", today);
    console.log("Max date");
});

//validate phone number
function checkPhoneNumber() {
    var flag = false;
    var phone = $("#phone").val().trim();
    phone = phone.replace('+84', '0');
    phone = phone.replace('0084', '0');
    phone = phone.replace(/ /g, '');
    if (phone.length == 10 && phone.match(/^\d{10}/)) {
        flag = true;
    }
    if (phone == '') {
        flag = true;
    }

    return flag;
}

$("#phone").keypress(function() {
    $(this).parents('div.form-group').removeClass('has-error');
});

//check pass & rePass
function checkRePass() {
    var pass = $("#password").val();
    var rePass = $("#rePassword").val();
    console.log(pass, rePass);
    if (pass === rePass /*&& pass != null && rePass != null*/ ) {
        return true;
    }
    return false;
}

//thông báo trường tên đăng nhập
document.addEventListener("DOMContentLoaded", function() {
    var elements = document.getElementById("userName");
    elements.oninvalid = function(e) {
        e.target.setCustomValidity("");
        if (!e.target.validity.valid) {
            e.target.setCustomValidity("Vui lòng điền tên đăng nhập gồm chữ thường, chữ in hoa và số (không sử dụng dấu cách)");
        }
    }
    elements.oninput = function(e) {
        e.target.setCustomValidity("");
    }
    console.log("Load tên đăng nhập");
});

//check điều kiện trước khi submit
$("#sign-up-form").submit(function(e) {
    if (!checkPhoneNumber()) {
        $("#phone").parents('div.form-group').addClass('has-error');
        $("#phone").focus();
        $("#noti-phone").css("display", "block");
        e.preventDefault();
    } else {
        $("#noti-phone").css("display", "none");
    }

    if (!checkRePass()) {
        $("#rePass").parents('div.form-group').addClass('has-error');
        $("#rePass").focus();
        $("#noti-rePass").css("display", "block");
        e.preventDefault();
    } else {
        $("#noti-rePass").css("display", "none");
    }
});
