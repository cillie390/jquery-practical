// カルーセル
$(".slider").slick({
  autoplay: true,
  dots: true,
  infinite: true,
  fade: true,
  autoplaySpeed: 5000,
  speed: 1500,
  arrows: false,
  pauseOnHover: false,
});

// ホバーアニメーション
$("a, .item img").on("mouseover", function () {
  $(this).animate(
    {
      opacity: 0.6,
    },
    100
  );
});
$("a,.item img").on("mouseout", function () {
  $(this).animate(
    {
      opacity: 1.0,
    },
    100
  );
});

// 戻るボタン
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $("#page-top").fadeIn();
  } else {
    $("#page-top").fadeOut();
  }
});

$(function () {
  const $pageTop = $("#page-top");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 1) {
      $pageTop.fadeIn.css;
    } else {
      $pageTop.fadeOut;
    }
  });

  $pageTop.click(function () {
    $("html, body").animate({ scrollTop: 0 });
  });
});

// スクロール
$(window).scroll(function () {
  const windowScroll = $(window).scrollTop();
  const windowHeight = $(window).height();
  $("section").each(function () {
    const position = $(this).offset().top;
    if (windowScroll > position - windowHeight + 100) {
      $(this).addClass("fade-in");
    }
  });
});

// モーダル
$(".works img").click(function () {
  const imgSrc = $(this).attr("src");
  const imgAlt = $(this).attr("alt");
  $(".big-img").attr({
    src: imgSrc,
    alt: imgAlt,
  });
  $(".modal").fadeIn();
});

$(".close-btn").click(function () {
  $(".modal").fadeOut();
});
