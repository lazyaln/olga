$(function () {

    // 出現效果
    $('.advantage li').addClass('init-hide');
    // 各區塊隱藏
    $('.lightboxBlock').hide();

    // 漢堡 menu 動態
    (function () {
        "use strict ";
        var toggles = document.querySelectorAll(".burgerBtn");

        for (var i = toggles.length - 1; i >= 0; i--) {
            var toggle = toggles[i];
            toggleHandler(toggle);
        };

        function toggleHandler(toggle) {
            toggle.addEventListener("click", function (e) {
                e.preventDefault();
                (this.classList.contains("is-active") === true) ? this.classList.remove("is-active"): this.classList.add("is-active");
            });
        }
    })();




    $('body,html').resize(function (e) {
        if ($('body,html').width()) {
            window_W = $('body,html').width();
        } else {
            window_W = window.innerWidth;
        }
        if (window_W > 1024) {
            $(".burgerBtn").removeClass("is-active");
            $(".menuPC").removeClass("expand");
        }
    });


    $(".burgerBtn").click(function (event) {
        $('.menuPC').toggleClass('expand');
    });

    // nav 按鈕連結
    $('#nav a').eq(0).click(function () {
        $('.burgerBtn').click();
        $('body,html').animate({
            scrollTop: $(".portfolio").offset().top - 60
        });
    });



    

    var top;

    function stopScroll() {
        top = $(window).scrollTop();
        $(window).bind('scroll', Scrollto);
    }

    function startScroll() {
        $(window).unbind('scroll', Scrollto);
    }

    function Scrollto() {
        $(window).scrollTop(top)
    }

    // lightbox 關閉鈕
    $('.closeBtn').click(function () {
        $(this).parents('.lightboxBlock').fadeOut();
        $('html,body').css('overflow', 'initial');
        $('body,html').unbind();
        startScroll();
    });









 
})