var i = 1;
var contain;
var L = 0;
$(document).ready(function(){
    $("#flag").hide();
    $("h2").click(function() {
        $("#p" + $(this).attr('num')).toggleClass("show");
        if (i == 1) {
            $(this).css("border-color", "white");
            i = 2;
        }
        else {
            $(this).css("border-color", "black");
            i = 1;
        }
    })
    $("h2").hover(function() {
        if (i == 1) {
            $(this).css("border-color", "white")
        }
        else {
            $(this).css("border-color", "black")
        }
    })
    $("h2").mouseleave(function() {
        if (i == 1) {
            $(this).css("border-color", "black")
        }
        else {
            $(this).css("border-color", "white")
        }
    })
    $("li").hover(function() {
        if (L == 0) {
            contain = $(this).html();
            L = 1;
        }
        $(this).html("Click!");
    })
    $("li").click(function() {
        var temp = $(this).next();
        temp.css({"background-color" : "blue"})
        setTimeout(function(){
        temp.css({"background-color" : "#b9c0f0"})
        }, 2000)
    })
    $("li").mouseleave(function() {
        $(this).html(contain);
        L = 0;
    })
    $("#alert").click(function(){
        $(this).hide();
        $("#flag").show();
    })
    $("#flag").click(function(){
        $(this).hide();
        $("#alert").show();

    })
    $("h1").hover(function() {
        $(this).text("Bonkers")
    })
})