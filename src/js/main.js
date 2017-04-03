//Google Analytics start
/* jshint ignore:start */

(function(i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function() {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date();
  a = s.createElement(o), m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
/* jshint ignore:end */
if (!!ga) {
  ga('create', 'UA-85086943-1', 'auto');
  ga('set', {
    dimension1: environment
  });
  ga('send', 'pageview');
}
//Google Analytics end

var showingMenu = false;
var showingLogo = true;

$(document).ready(function() {

  logoAnimation();

  //open side menu on header click
  $('#menu-link,.contact-button').on('click', function() {
    if (showingMenu) {
      $('body').removeClass('menu-active');
      $('#menu-link a').html('<a href="#">menu</a>');
      showingMenu = false;
      logoToggle();
      event.preventDefault();
    } else {
      $('body').addClass('menu-active');
      $('#menu-link a').html('<a href="#">close</a>');
      showingMenu = true;
      logoToggle();
      event.preventDefault();
    };
    return showingMenu;
  });

  // // short term, open side menu on 'contact' click
  // $('.contact-button').on('click', toggleMenu());

  //Animate the Logo titles outwards from the Logo Egg
  function logoToggle() {
    if (showingLogo) {
      $('#logo').removeClass('active');
      showingLogo = false;

    } else {
      logoAnimation();
      $('#logo').addClass('active');
      showingLogo = true;

    }
    return showingLogo;
  };

  //Animate the Logo titles outwards from the Logo Egg
  function logoAnimation() {
    $('#logo a').addClass('animate');
    setTimeout(function() {
      $('#logo a').removeClass('animate');
    }, 1500);
  };

  if ($('body').is('#landing')) {
    var viewHeight = $(window).height();

    var finsecImagesOffset = $('#finsec .images img').offset().top;
    var finsecImagesCompleted = false;
    var lookingGoodOffset = $('#lookingGood').offset().top;
    var lookingGoodCompleted = false;
    var cardMobileOffset = $('#cardMobile').offset().top;
    var cardMobileCompleted = false;
    var cardDesktopOffset = $('#cardDesktop').offset().top;
    var cardDesktopCompleted = false;
    var jeepImageOffset = $('#jeepImage').offset().top;
    var jeepImageCompleted = false;
    var caImageOffset = $('#caImage').offset().top;
    var caImageCompleted = false;

    $(window).scroll(function() {
      var $scrollPosition = $(window).scrollTop() + viewHeight;
      var scrollActivationPoint = $(window).scrollTop() + (viewHeight * 3 / 5);

      // Parallax effect for cosmetic-avenue sections
      if ($scrollPosition > $('#cosmetic-avenue').offset().top) {
        if ($(window).scrollTop() < $('#cosmetic-avenue').offset().top + $('#cosmetic-avenue').height()) {
          var cosmeticAvenueParallax = -($('#cosmetic-avenue').height() / 5) * ($scrollPosition - $('#cosmetic-avenue').offset().top) / ($('#cosmetic-avenue').height() + viewHeight);
          $('#cosmetic-avenue .parallaxBackground').css('transform', 'translateY(' + cosmeticAvenueParallax + 'px)');
        };
      };

      // Parallax effect for jeep sections
      if ($scrollPosition > $('#jeep').offset().top) {
        if ($(window).scrollTop() < $('#jeep').offset().top + $('#jeep').height()) {
          var jeepParallax = -($('#jeep').height() / 5) * ($scrollPosition - $('#jeep').offset().top) / ($('#jeep').height() + viewHeight);
          $('#jeep .parallaxBackground').css('transform', 'translateY(' + jeepParallax + 'px)');
        };
      };

      //Animate in elements which activate on page scroll
      if (!lookingGoodCompleted) {
        if (scrollActivationPoint > lookingGoodOffset) {
          $('#lookingGood').addClass('active');
          var lookingGoodCompleted = true;
        };
      };
      if (!cardMobileCompleted) {
        if (scrollActivationPoint > cardMobileOffset) {
          $('#cardMobile').addClass('active');
          var cardMobileCompleted = true;
        };
      };
      if (!cardDesktopCompleted) {
        if (scrollActivationPoint > cardDesktopOffset) {
          $('#cardDesktop').addClass('active');
          var cardDesktopCompleted = true;
        }
      }
      if (!jeepImageCompleted) {
        if (scrollActivationPoint > jeepImageOffset) {
          $('#jeepImage').addClass('active');
          var jeepImageCompleted = true;
        };
      };
      if (!caImageCompleted) {
        if (scrollActivationPoint > caImageOffset) {
          $('#caImage').addClass('active');
          var caImageCompleted = true;
        };
      };
      if (!finsecImagesCompleted) {
        if (scrollActivationPoint > finsecImagesOffset) {
          $('#finsec .images img:nth-last-child(3)').addClass('active');
          setTimeout(function() {
            $('#finsec .images img:nth-last-child(2)').addClass('active');
          }, 500);
          setTimeout(function() {
            $('#finsec .images img:nth-last-child(1)').addClass('active');
          }, 1000);
        };
      };
    });
  };

  if ($('body').is('#services')) {
    $(window).scroll(function() {
      var viewHeight = $(window).height();
      var viewFromTop = $(window).scrollTop();
      var $scrollPosition = viewFromTop + viewHeight;
      var $sectionOffset = $('#illustration').offset().top;

      $('.parallax').each(function() {
        var layer = $(this).attr('layer-data');
        var $parallaxDepth = ($sectionOffset - 130 - viewFromTop) * layer / 10;
        $(this).css('top', $parallaxDepth);
      });
    });
  };

  //Change footer links for individual projects
  if ($('body').is('#project-karen-williams')) {
    $('.feature-card').addClass('active'); //animate the rising card
    $('#project-footer .right').attr('href', '/feature-project/jeep');
  };
  if ($('body').is('#project-jeep')) {
    $('#project-footer .right').attr('href', '/feature-project/cosmetic-avenue');
  };
  if ($('body').is('#project-cosmetic-avenue')) {
    $('#project-footer .right').attr('href', '/feature-project/finsec');
  };
  if ($('body').is('#project-finsec')) {
    $('#project-footer .right').attr('href', '/feature-project/karen-williams');
  };

});
