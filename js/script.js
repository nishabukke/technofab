// counters

var counted = 0;
$(window).scroll(function() {

  var count = $('#counter');
  if(count.length){
  var oTop = count.offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.counter').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum) + `+`);
          },
          complete: function() {
            $this.text(this.countNum + `+`);
          }

        });
    });
    counted = 1;
  }
}

});


// sticky header

$(window).on("scroll touchmove", function() {

  if ($(document).scrollTop() > $("#sticky-wrapper").position().top) {
    $('.sticky-area').css('width', '100%');
    $('.sticky-area').css('max-width', '1600px');
    $('.sticky-area').css('margin', '0 auto');
    $('.sticky-area').css('position', 'fixed');
    $('.sticky-area').css('top', '0px');
    $('.sticky-area').css('background', '#1b4883');
    $('.sticky-area').css('z-index', '1111');
    // $('.sticky-area').css('box-shadow', '0 3px 16px -2px #ebe8e8');
    $('#sticky-wrapper').addClass('is-sticky');

  }
  else{
  $('.sticky-area').removeAttr('style');

  }
  
});




// mobile menu

$( document ).ready(function() {

    $( ".cross" ).hide();
    $( ".menu" ).hide();
    $( ".canva_expander" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
    $( ".canva_expander" ).hide();
    $( ".cross" ).show();
    });
    });
    
    $( ".cross" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
    $( ".cross" ).hide();
    $( ".canva_expander" ).show();
    });
    });
    
    });
  
   // Close out sub menu
   $('.sub__close').click(function(e) {
    e.preventDefault();
    $( ".sub__close" ).hide();
    // $(this).parent().parent().removeClass('is-active');
  });
  
  // Trigger sub menu
  $('.menu ul .nav__submenu').click(function(e) {
    e.preventDefault();
    
    $(this).siblings().addClass('is-active');
  });