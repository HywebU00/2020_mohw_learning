// 自行加入的JS請寫在這裡
$(function() {
  $('.mpSlider').slick({
    dots: true,
    arrow: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    cssEase: 'ease'
  });
  $('.video_block .video>ul,.chart_block .chart ul').slick({
    slidesToShow: 3,
    arrow: true,
    infinite: true,
    speed: 500,
    responsive: [{
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1
        }
      }
    ]
  });
  $('.book_block .book ul').slick({
    slidesToShow: 4,
    arrow: true,
    infinite: true,
    speed: 500,
    responsive: [{
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1
        }
      }
    ]
  });
  // lazyload  
  //可以指定你想要的元素做lazyload
  // $("img").lazyload({ effect: "fadeIn" });
  //燈箱slick+lightBox組合
  $('.cp_slider').slick({
    dots: true,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    pauseOnFocus: true,
    focusOnSelect: true,
    accessibility: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 545,
      settings: {
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }]
  });
  $('.cp_slider').slickLightbox({
    caption: 'caption',
    useHistoryApi: 'true',
    lazy: true
  });
  // cp_photo
  $('.Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.controls').html(i + '/' + slick.slideCount);
  });
  $('.Slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.Slider-nav',
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true
  });
  $('.Slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.Slider-for',
    dots: true,
    arrows: true,
    focusOnSelect: true,
    infinite: true,
  });
});
// $(function(){
//   $('.topic_title>a').click(function(e){
//     $(this).next('.topic_content').slideDown();
//     e.preventDefault();
//   });
//   $('.topic_content .close a').click(function(e){
//     $('.topic_content').slideUp();
//     e.preventDefault();
//   });
// });
$(function() {
  $(".hero_block .video_popup .close").click(function(e) {
    $('.hero_block .video_popup').hide();
    e.preventDefault();
  });
})