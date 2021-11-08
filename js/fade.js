
$(function () {
  if ($('.js-scroll-trigger').length) {
      scrollAnimation();
  }

  function scrollAnimation() {
      $(window).scroll(function () {
          $(".js-scroll-trigger").each(function () {
              let position = $(this).offset().top,
                  scroll = $(window).scrollTop(),
                  windowHeight = $(window).height();

              if (scroll > position - windowHeight + 80) {
                  $(this).addClass('is-active');
              }
          });
      });
  }
  $(window).trigger('scroll');
});

$(function () {
    if ($('.js-scroll-trigger-progress').length) {
        scrollAnimation();
    }
  
    function scrollAnimation() {
        $(window).scroll(function () {
            $(".js-scroll-trigger-progress").each(function () {
                let position = $(this).offset().top,
                    scroll = $(window).scrollTop(),
                    windowHeight = $(window).height();
  
                if (scroll > position - windowHeight + 80) {
                    $(this).addClass('is-progress');
                }
            });
        });
    }
    $(window).trigger('scroll');
  });
  
  $(function () {
    if ($('.item-text-head').length) {
        scrollAnimation();
    }
  
    function scrollAnimation() {
        $(window).scroll(function () {
            $(".item-text-head").each(function () {
                let position = $(this).offset().top,
                    scroll = $(window).scrollTop(),
                    windowHeight = $(window).height();
  
                if (scroll > position - windowHeight + 80) {
                    $(this).addClass('text-focus-in');
                }
            });
        });
    }
    $(window).trigger('scroll');
  });
  
  $(function () {
    if ($('.para').length) {
        scrollAnimation();
    }
  
    function scrollAnimation() {
        $(window).scroll(function () {
            $(".para").each(function () {
                let position = $(this).offset().top,
                    scroll = $(window).scrollTop(),
                    windowHeight = $(window).height();
  
                if (scroll > position - windowHeight + 80) {
                    $(this).addClass('scale-up-center');
                }
            });
        });
    }
    $(window).trigger('scroll');
  });
