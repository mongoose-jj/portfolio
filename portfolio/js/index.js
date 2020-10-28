//  sec1스와이퍼
var swiper = new Swiper('.sec1 .inner .swiper-container', {
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
// var swiper1 = new Swiper('.scroll_v', {
//     direction: 'vertical',
//     slidesPerView: 1,
//     mousewheel: {
//         sensitivity: 1,
//     },
    
//     speed: 500,
//     pagination: {
//       el: '.pageVertical',
//       clickable: true,
//       dynamicBullets: true,
//     },
//     keyboard: {
//       enabled: true,
//       onlyInViewport: false,
//     },
//     eventsTarget: 'scroll_v',
//     on: {
//         slideChangeTransitionStart: function () {
//             $('.title').hide();
//             //$('.title').removeClass('aos-init').removeClass('aos-animate');
//         },
//         slideChangeTransitionEnd: function () {
//             setTimeout(function() {
//                 $('.title').slideDown(1000);
//             },1000);
//             // AOS.init(); 
//         }
//     }
// }); 

$(document).ready(function(){
  $(".topbtn").click(function(){
      var offset = $('#toppoint').offset();
      $("html, body").animate({
          scrollTop : offset.top
      }, 500);
  });
  $(".midbtn").click(function(){
    var offset = $('#midpoint').offset();
    $("html, body").animate({
        scrollTop : offset.top
    }, 500);
  });
  $(".downbtn").click(function(){
    var offset = $('#downpoint').offset();
    $("html, body").animate({
        scrollTop : offset.top
    }, 500);
  });
});
