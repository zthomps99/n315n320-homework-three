document.getElementById("myBtn").addEventListener("click", function() {
    console.log("btnID");
  });


function initListeners() {
    $(".bars").click(function(e) {
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
        //console.log();
    });

    $(".links a").click(function(e) {
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
    });
}

$(document).ready(function () {
    initListeners();
});