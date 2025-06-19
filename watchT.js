$(function(){
    //網頁一載入=>顯示Modal框=>2秒後自動退場================================================
  $('#myModal').modal("show");  
  
  setTimeout(function(){ $('#myModal').modal("hide"); },3000);
  $('[data-toggle="tooltip"]').tooltip();     
  
  
// 當#myNavbar上的<a>連結按鈕click時, 讓整頁慢慢滑動到指定位置=============================
$("#navH a").on('click',function(event){
  if(this.hash !== ""){
    event.preventDefault();
    var hash = this.hash;
    $('html,body').stop().animate({scrollTop: $(hash).offset().top
    },1000,function(){ window.location.hash=hash; });
  }
});  
  


//#sec2 #playMov=====================================  
$('#playMov').click(function(){
  $(this).next().attr('heigh',250);
  $(this).children('img').hide();
});
  
  
//#sec4 的 LOGO 影像滑入時放大加光暈, 其餘縮小淡化 =========================================
$('#sec4 .col-6 img').hover(function(){
  $('#sec4 .col-6 img').not(this).addClass('scale_s');
  $(this).addClass('scale_b');
},function(){
  $('#sec4 .col-6 img').removeClass('scale_s').removeClass('scale_b');
});  
  
  

//檢查#sec2 左側社群分享按鈕的位置=======================================================
function chkPills(){
  var scrollValue = $('html').scrollTop();
  var targetScroll = $('#sec2').position().top;
  if(scrollValue >= targetScroll){
    $('.nav-pills').addClass('affix');
  }else{
    $('.nav-pills').removeClass('affix');
  }
}
chkPills();

//當視窗捲動時.....
$(window).on('scroll',function(event){ chkPills(); });
  
  
  




  
});  


