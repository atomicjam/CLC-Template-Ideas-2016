$(function() {
  //JQUERY DOM READY CHECK
  // down arrow scroller
  $("#downarrow").click(function() {
    $('html, body').animate({
      scrollTop: $('#tagline').offset().top -90
    }, 1000);
  });

  // toggle menu
  $("#menu").click(function() {
    // toggle class is-active to fire css3 animation and translation
    $("#menu, #navigation").toggleClass("is-active");
    // hide menu background off screen
    $(".menu__background").toggleClass("offscreen");
    // hide logo if viewport scrolled
    $(".logo--scrolled").toggleClass("ninja");
    // stop body scroll when menu open
    $("body").toggleClass("noscroll");
  });

  $("#notice--toggle").click(function() {
    $("#notice").toggleClass("notice--active");
  });

  // toggle second level menu
  $(".navbutton--secondlevel").click(function() {
    if($(this).hasClass("navbutton--selected")) {
      // remove classes to hide menu
      $(".secondlevel--active").removeClass("secondlevel--active");
      $(".navbutton--inactive").removeClass("navbutton--inactive");
      $(".navbutton--selected").removeClass("navbutton--selected");
    } else {
      // reset menu state
      $(".secondlevel--active").removeClass("secondlevel--active");
      $(".navbutton--inactive").removeClass("navbutton--inactive");
      $(".navbutton--selected").removeClass("navbutton--selected");
      // add classes to trigger css animations
      $(this).addClass("navbutton--selected");
      $(this).next("ul").addClass("secondlevel--active");
      $(".navbutton--secondlevel").addClass("navbutton--inactive");
    }
  });

  // pin logo and slide in menu backdrop when scrolled past point
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= Math.max(document.documentElement.clientHeight - 130 , window.innerHeight - 130  || 650)) {
      $(".logo").addClass("logo--scrolled");
      $(".menu__background").addClass("menu__background--scrolled");
        // if menu is active hide the scrolled logo but not the large top logo
        if ($("#menu").hasClass("is-active")) {
          $(".logo--scrolled").addClass("ninja");
        }

    } else {
      $(".logo--scrolled").removeClass("ninja");
      $(".logo").removeClass("logo--scrolled");
      $(".menu__background").removeClass("menu__background--scrolled");
    }
  });
  // end dom ready check
});
