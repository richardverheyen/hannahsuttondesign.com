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

  //Animation effects for landing page feature projects section
  $(window).scroll(function() {
    var viewHeight = $(window).height();
    var viewFromTop = $(window).scrollTop();
    var elementActivationPoint = viewFromTop + (viewHeight * 2 / 3);

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
    };
    var karenWilliamsCardMobile = $('#sliding-cards .feature-card-mobile').offset().top;
    if (karenWilliamsCardMobile < elementActivationPoint) {
      $('#sliding-cards .feature-card-mobile').addClass('active');
    };

  });

  $('#services #illustration .parallax img').each(function(index) {
    var $id = index;
    var $offset = Number($(this).offset());
    var $yPosOriginal = Number($(this).css('top').replace('px', ''));
    var $zPos = Number($(this).parent().parent().attr('data'));

  });

  $(window).scroll(function() {
    var $cosmeticAvenueTop = $('#cosmetic-avenue').offset().top;
    var $cosmeticAvenueHeight = $('#cosmetic-avenue').height();
    var viewHeight = $(window).height();
    var viewFromTop = $(window).scrollTop();
    var parallaxBackgroundHeight = $cosmeticAvenueHeight * 11 / 5;

    $('#cosmetic-avenue .background').css('top', -(viewFromTop - $cosmeticAvenueTop) / 5 - (parallaxBackgroundHeight / 12) - // sliding down;
      $cosmeticAvenueHeight / 2 +
      ('px')
    );
    // set 0 point using a function of everything but viewHeight
    var zeroPoint = $cosmeticAvenueTop + (viewHeight / 4);

    // Use viewHeight to vary the parallax around the 0 point
    var $scrollPosition = viewFromTop + viewHeight;
    // scale the movement relative to screen size using the correct scaling factor so it falls within 0 and 1
    var $scaling = 10 / (4 * viewHeight);
    $opacity = (zeroPoint - $scrollPosition) * $scaling * -1;
    $('#cosmetic-avenue').css('opacity', $opacity);
    $('#cosmetic-avenue .background').css('opacity', $opacity);
  });

  $(window).scroll(function() {
    var $jeepTop = $('#jeep').offset().top;
    var $jeepHeight = $('#jeep').height();
    var viewHeight = $(window).height();
    var viewFromTop = $(window).scrollTop();
    var parallaxBackgroundHeight = $jeepHeight * 6 / 5;

    $('#jeep .background').css('top', -(viewFromTop - $jeepTop) / 5 - (parallaxBackgroundHeight / 12) - // sliding down;
      $jeepHeight / 2 +
      ('px')
    );
    // set 0 point using a function of everything but viewHeight
    var zeroPoint = $jeepTop + (viewHeight / 4);

    // Use viewHeight to vary the parallax around the 0 point
    var $scrollPosition = viewFromTop + viewHeight;
    // scale the movement relative to screen size using the correct scaling factor so it falls within 0 and 1
    var $scaling = 10 / (4 * viewHeight);
    $opacity = (zeroPoint - $scrollPosition) * $scaling * -1;
    $('#jeep').css('opacity', $opacity);
    $('#jeep .background').css('opacity', $opacity);
  });

});
