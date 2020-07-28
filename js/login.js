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