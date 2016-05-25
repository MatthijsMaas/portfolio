//= require scroll-reveal
//= require jquery
//= require bootstrap-sprockets
//= require particles.js
//= require_tree .
//
// $(document).ready

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1100);
        return false;
      }
    }
  });
});

$(function(){

  $(".tab").on("click", function(e){
    // Change active tab
    $(".tab").removeClass("active");
    $(this).addClass("active");

    // Hide all tab-content (use class="hidden")
    $(".tab-content").addClass("hidden");

    // Show target tab-content (use class="hidden")
    tabSelector = $(this).data("target");
    $(tabSelector).removeClass("hidden");

  });

  window.sr = ScrollReveal({ duration: 1000 });
  sr.reveal('.banner', 100);
  sr.reveal('.welcome', 100);
  sr.reveal('.bar', 100);
  sr.reveal('.card', 100);
  sr.reveal('.navbar', 100);
  sr.reveal('.tab', 100);

  particlesJS.load('particles-js', 'javascripts/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  });

});
