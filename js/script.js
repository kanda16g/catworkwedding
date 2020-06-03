$(function() {

// ハンバーガーメニュー
var hum = $('.hum');
var humnav = $('.humnav');

hum.click(function() {
  $(this).toggleClass('active');
  humnav.toggleClass('active');
});



/* ナビゲーション追従 */
$(window).scroll(function() {

  const keyBottom = $(".key").height();
  
  if($(this).scrollTop() > keyBottom) {
    $('.glonav').addClass('fixed');
  } else {
    $('.glonav').removeClass('fixed');
  }
});


// ヘッダークローン生成(幅1200px以下のとき)
var w = $(window).width();

var clone = $('header').clone(true).addClass('clone').appendTo('body');

$(window).scroll(function() {
  if($(window).scrollTop() > 1200 && w <= 1200) {
    clone.addClass('is-show');
  } else {
    clone.removeClass('is-show');
  }
});


// トップに戻るボタン
var returnTop = $(".returnTop");

returnTop.click(function() {
    $("body, html").animate({scrollTop: 0}, 1000);
});


// スライドショー
$('.bg-slider').bgSwitcher({
  images: ['img/eyecatch.png', 'img/home_img13.png', 'img/home_slide.png'], // 切り替える背景画像を指定
  interval: 8000, // 背景画像を切り替える間隔を指定 3000=3秒
  loop: true, // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
  shuffle: false, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
  effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
  duration: 1000, // エフェクトの時間を指定します。
  easing: "linear" // エフェクトのイージングをlinear,swingから指定

});



});

//Webフォント
(function(d) {
  var config = {
    kitId: 'ugz8wux',
    scriptTimeout: 3000,
    async: true
  },
  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);
