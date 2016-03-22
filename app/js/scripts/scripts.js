// jQuery start
(function($){

	"use strict";

	/* trigger when page is ready */
	$(document).ready(function (){

		// set no-mediaqueries class
		if(!Modernizr.mq('only all')) {
    	jQuery('html').addClass('no-mediaqueries');
		}

    jQuery(function($){ $.localScroll({filter:'.sm-scroll'}); });


    // scrollspy
    function initScrollSpy(){
        $('.page-section').each(function(i) {
        var position = $(this).position();

        $(this).scrollspy({
          min: position.top - 10,
          max: position.top - 10 + $(this).height(),
          onEnter: function(element, position) {
            $('.scroll-link').each(function(i){
              $(this).removeClass('current');
            });
            $('.'+element.id).addClass('current');
          }
        });
      });
    }

    initScrollSpy();

    $(window).resize(function () {
      $('.scroll-link').each(function(i){
        $(this).removeClass('current');
      });

     waitForFinalEvent( function() {
      initScrollSpy();     
     }, timeToWaitForLast, "setup that scrollspy again but not until we are done resizing that window"); 
    });

    $('.scroll-link').on('click', function(){
      $this = $(this);
      $('.scroll-link').each(function(i){
        $(this).removeClass('current');
      });
      $this.addClass('current');
    });

    function headerToggle() {
      $('#header').removeClass();
      $("#header ul li").not(this).removeClass('active');
    };

    //will need to re-write
    $('.customer-area-link').click(function(e) {
      $('.customer-area').toggleClass('open');
      headerToggle();
      $('#header').toggleClass('customer-bg');
      $(this).toggleClass('active');
      $(".active-area").not(".customer-area").removeClass('open');
    });

    $('.account-area-link').click(function(e) {
      $('.account-area').toggleClass('open');
      headerToggle();
      $('#header').toggleClass('account-bg');
      $(this).toggleClass('active');
      $(".active-area").not(".account-area").removeClass('open');
    });

    $('.action-area-link').click(function(e) {
      $('.action-area').toggleClass('open');
      headerToggle();
      $('#header').toggleClass('action-bg');
      $(this).toggleClass('active');
      $(".active-area").not(".action-area").removeClass('open');
    });

    $('.want-area-link').click(function(e) {
      $('.want-area').toggleClass('open');
      headerToggle();
      $('#header').toggleClass('want-bg');
      $(this).toggleClass('active');
      $(".active-area").not(".want-area").removeClass('open');
    });

    $('.help-area-link').click(function(e) {
      $('.help-area').toggleClass('open');
      headerToggle();
      $('#header').toggleClass('help-bg');
      $(this).toggleClass('active');
      $(".active-area").not(".help-area").removeClass('open');
    });

    //specific toggles
    $('.expand-bar').click(function() {
      $(".blue-bar-expanded").toggle();
      $(this).toggleClass('reversed');
    });

    $('.open-notes').click(function() {
      $(".notes-popup").fadeToggle();
    });

    $('.close-notes').click(function() {
      $(".notes-popup").fadeToggle();
    });

    $('.open-calc').click(function() {
      $(".calc-popup").fadeToggle();
    });

    $('.close-calc').click(function() {
      $(".calc-popup").fadeToggle();
    });


    //popups
    $('.popup').magnificPopup({
      type: 'inline',
      fixedContentPos: false,
      fixedBgPos: true,
      overflowY: 'auto',
      closeBtnInside: true,
      preloader: false,
      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in'
    });

	});


})(window.jQuery);