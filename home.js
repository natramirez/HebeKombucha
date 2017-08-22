$(document).ready(function() {
  
  // sticky nav bar
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      // console.log($(window).scrollTop())
    if ($(window).scrollTop() > 191) {
      $('.top-nav').addClass('top-nav-fixed');
      $('.dropbtn').css('background-color', 'rgba(250,250,250,1)');
    }
    if ($(window).scrollTop() < 192) {
      $('.top-nav').removeClass('top-nav-fixed');
      $('.dropbtn').css("background-color", "rgba(250,250,250,0.5)");
    }
  
  });

  // nav bar dropdown content
  $('.dropdown').hover(function() {
    $(this).find('.dropdown-content').removeClass('hide');
    $(this).find('.dropdown-content').addClass('show');
  }, function() {
    $(this).find('.dropdown-content').addClass('hide');
    $(this).find('.dropdown-content').removeClass('show');
  });

  $('.rel-dropdown-subcontent-container').hover(function() {
    $(this).find('.dropdown-subcontent').removeClass('hide');
    $(this).find('.dropdown-subcontent').addClass('show');
    var width = $(this).width();
    $(this).find('.dropdown-subcontent').css({ top:0, left: width});
  }, function() {
    $(this).find('.dropdown-subcontent').addClass('hide');
    $(this).find('.dropdown-subcontent').removeClass('show');
  });


  var splitContWidth = $('.split-container').width();
  $('.page-break').css({ width: splitContWidth});


});