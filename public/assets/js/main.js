/*Script for fix header*/
jQuery(window).scroll(function () {
  var scroll = jQuery(window).scrollTop();
  if (scroll >= 50) {
    jQuery("header").addClass("fs-sticky-header");
  } else {
    jQuery("header").removeClass("fs-sticky-header");
  }
});
