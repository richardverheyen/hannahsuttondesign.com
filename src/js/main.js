var showingMenu = false;
var showingLogo = true;

$(document).ready(function() {

  logoAnimation();

  //open side menu on header click
  $('#menu-link').on('click', function() {
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

  // short term, open side menu on 'contact' click
  $('.contact-button').on('click', function() {
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

  $('#services #illustration .parallax img').each(function(index) {
    var $id = index;
    var $offset = Number($(this).offset());
    var $yPosOriginal = Number($(this).css('top').replace('px', ''));
    var $zPos = Number($(this).parent().parent().attr('data'));

  });

  if ($('body').is('#landing')) {
    $(window).scroll(function() {
      var viewHeight = $(window).height();
      var viewFromTop = $(window).scrollTop();
      var $scrollPosition = viewFromTop + viewHeight;

      var $cosmeticAvenueTop = $('#cosmetic-avenue').offset().top;
      var $cosmeticAvenueHeight = $('#cosmetic-avenue').height();
      var $jeepTop = $('#jeep').offset().top;
      var $jeepHeight = $('#jeep').height();
      var elementActivationPoint = viewFromTop + (viewHeight * 3 / 5);

      // scale the movement relative to screen size using the correct scaling factor so it falls within 0 and 1
      var $scaling = 10 / (4 * viewHeight);
      if ($cosmeticAvenueTop - viewHeight <= viewFromTop) {
        if (viewFromTop <= $cosmeticAvenueTop + $cosmeticAvenueHeight) {
          console.log('youre in the ca section');
          $('#cosmetic-avenue .background').css('top', -(viewFromTop - $cosmeticAvenueTop) / 5 - ($cosmeticAvenueHeight / 5) - // sliding down;
            $cosmeticAvenueHeight / 2 +
            ('px')
          );

          // set 0 point using a function of everything but viewHeight
          var $CAzeroPoint = $cosmeticAvenueTop + (viewHeight / 4);
          // Use viewHeight to vary the parallax around the 0 point
          $opacity = ($CAzeroPoint - $scrollPosition) * $scaling * -1;
          $('#cosmetic-avenue').css('opacity', $opacity);
          $('#cosmetic-avenue .background').css('opacity', $opacity);
        }
      }

      //Jeep parallax section
      if ($jeepTop - viewHeight <= viewFromTop) {
        if (viewFromTop <= $jeepTop + $jeepHeight) {
          console.log('youre in the jeep section');
          $('#jeep .background').css('top', -(viewFromTop - $jeepTop) / 5 - ($jeepHeight / 12) - // sliding down;
            $jeepHeight / 2 +
            ('px')
          );
          // set 0 point using a function of everything but viewHeight
          var $JzeroPoint = $jeepTop + (viewHeight / 4);
          $opacity = ($JzeroPoint - $scrollPosition) * $scaling * -1;
          $('#jeep').css('opacity', $opacity);
          $('#jeep .background').css('opacity', $opacity);
        }
      }

      //Feature card animations
      var introGoodLooking = $('#intro h2 > span').offset().top;
      if (introGoodLooking < elementActivationPoint) {
        $('#intro h2 > span').addClass('active');
      };
      var cosmeticAvenueImage = $('#ca-image').offset().top;
      if (cosmeticAvenueImage < elementActivationPoint) {
        $('#ca-image').addClass('active');
      };
      var jeepImage = $('#jeep-image').offset().top;
      if (jeepImage < elementActivationPoint) {
        $('#jeep-image').addClass('active');
      };
      var finsecImages = $('#finsec .images img').offset().top;
      if (finsecImages < elementActivationPoint) {
        $('#finsec .images img:nth-last-child(3)').addClass('active');
        $('#finsec .images img:nth-last-child(2)').addClass('active');
        $('#finsec .images img:nth-last-child(1)').addClass('active');
      };
      var karenWilliamsCard = $('#sliding-cards .feature-card').offset().top;
      if (karenWilliamsCard < elementActivationPoint) {
        $('#sliding-cards .feature-card').addClass('active');
      } else {
        $('#sliding-cards .feature-card').removeClass('active');
      };
      var karenWilliamsCardMobile = $('#sliding-cards .feature-card-mobile').offset().top;
      if (karenWilliamsCardMobile < elementActivationPoint) {
        $('#sliding-cards .feature-card-mobile').addClass('active');
      };
    });

  };

});
