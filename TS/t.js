$(function(){
  //網頁一載入=>顯示Modal框=>2秒後自動退場================================================
  $('#myModal').modal("show");        
  setTimeout(function(){ $('#myModal').modal("hide"); },3000);

  $('[data-toggle="tooltip"]').tooltip({ /*trigger:'click'*/ });   

  
  // 當#myNavbar上的<a>連結按鈕click時, 讓整頁慢慢滑動到指定位置=============================
  $("#navbarNav a").on('click', function(event) {
    // this.hash 是取得目前URL中的錨點位置,例如:#section1
    // 當 this.hash (錨點位置) 不是空的時, 也就是有指定滑動到錨點位置時
    if (this.hash !== "") {
      // 阻止<a>連結被click時執行連結工作 (雷同return false, 但return false通常寫在最後)
      event.preventDefault();
      // 設定 hash 變數, 記錄目前的錨點
      var hash = this.hash;
      // 控制 html,body 執行 animate 動畫, 讓捲出的距離 = 目前錨點位置的 offset().top 座標
      $('html, body').stop().animate({ scrollTop: $(hash).offset().top }, 800, function(){
        // 將錨點名稱加到URL網址列的後方
        window.location.hash = hash;
      });
    } // if end 
  }); // click end


  //檢查#sec3的banner區呈現的是寬或窄的影像================================================
  var resize=0;
  function chkTabBanner(){
    if( $(window).width() >= 770 ){
      $('.tabBanner:eq(0)').html('<img src="images/AudemarsPigue/banner.jpg" alt="">');
      $('.tabBanner:eq(1)').html('<img src="images/Blancpain/banner.jpg" alt="">');
      $('.tabBanner:eq(2)').html('<img src="images/Longines/banner.jpg" alt="">');
      $('.tabBanner:eq(3)').html('<img src="images/Omega/banner.jpg" alt="">');
    }
    if($(window).width() < 770 && resize==1 ){
      $('.tabBanner:eq(0)').html('<img src="images/AudemarsPigue/banner_s.jpg" alt="">');
      $('.tabBanner:eq(1)').html('<img src="images/Blancpain/banner_s.jpg" alt="">');
      $('.tabBanner:eq(2)').html('<img src="images/Longines/banner_s.jpg" alt="">');
      $('.tabBanner:eq(3)').html('<img src="images/Omega/banner_s.jpg" alt="">');
    }
  }
  chkTabBanner();

  //當視窗調整大小時..................
  $(window).resize(function(){
    resize=1;
    chkTabBanner();
  });


  //#sec4 的 LOGO 影像滑入時放大加光暈, 其餘縮小淡化 =========================================
  $('#sec4 .col-6 img').hover(
    function(){
      $('#sec4 .col-6 img').not(this).addClass('scale_s');
      $(this).addClass('scale_b');
    },
    function(){
      $('#sec4 .col-6 img').removeClass('scale_s').removeClass('scale_b');
    }
  );


  //#sec2 #playMov=====================================================================
  $('#playMov').click(function(e){
    $(this).next().attr('height',250);
    $(this).children('img').hide();
  });
  
  
  //檢查#sec2 左側社群分享按鈕的位置=======================================================
  function chkPills(){
    //設定變數記錄 "視窗捲出的距離"
    var scrollValue = $('html').scrollTop();
    //設定變數記錄 "#sect2到body上方的距離"
    var targetScroll = $('#sec2').position().top;
    //假如 "視窗捲出的距離" >= "#sect2到body上方的距離"
    if (scrollValue >= targetScroll) {
      //那麼就讓 .nav-pills 社群圖示區 加上 affix 類別名稱, 套用這個樣式
      $('.nav-pills').addClass('affix');
    }else{
      //否則就移除 affix 類別名稱, 不套用這個樣式
      $('.nav-pills').removeClass('affix');
    }
  }
  chkPills();

  //當視窗捲動時..................
  $(window).on('scroll', function(event) {
    chkPills();
  });

});