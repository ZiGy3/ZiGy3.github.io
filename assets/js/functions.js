$(document).ready(function() {


  $(".carousel-unit:first").addClass("active-carousel");

  $(".carousel-control-next").click(function() {
    var $this = $this,
        position = $(".active-carousel").index(),
        unitNum = $(".carousel-unit").length;


    if(position < unitNum -1){
      $(".active-carousel").removeClass("active-carousel").next().addClass("active-carousel");
    } else {
      $(".carousel-unit").removeClass("active-carousel").first().addClass("active-carousel")
    }
  });

  $(".carousel-control-prev").click(function() {
    var position = $(".active-carousel").index(),
        unitNum = $(".carousel-unit").length;

     if(position === 0) {
      $(".carousel-unit").removeClass("active-carousel").last().addClass("active-carousel");
     } else {
      $(".active-carousel").removeClass("active-carousel").prev().addClass("active-carousel")
     }
  });


  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    }
  });

  var offset = 500;
  var duration = 250;

  $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
      $("#topButton").fadeIn(duration);
    } else {
      $("#topButton").fadeOut(duration);
    }
  });

  $("#topButton").click(function(event) {
    event.preventDefault();
    $("html, body").animate({scrollTop: 0}, duration);
    return false;
  })
});