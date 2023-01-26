// JavaScript Document


$(function() {
 
  $(document).ready(function() {
 
    // $("#myBtn-system").click(function() {
    //   $("#myModal-system").css({
    //     "display": "block"
    //   });
    // });
 
    // $(".close").click(function() {
    //   $("#myModal-system").css({
    //     "display": "none"
    //   });
    // });

    $(".close").click(function() {
      $(".myModal-system").css({
        "display": "none"
      });
    });

    // 입금
    $(".deposit_open").click(function() {
      $(".deposit").css({
        "display": "block"
      });
    });
    // 출금
    $(".exchange_open").click(function() {
      $(".exchange").css({
        "display": "block"
      });
    });
    // 머니이동
    $(".money_open").click(function() {
      $(".money").css({
        "display": "block"
      });
    });
    // 이벤트 신청
    $(".event_open").click(function() {
      $(".event").css({
        "display": "block"
      });
    });

    // 쿠폰
    $(".coupon_open").click(function() {
      $(".coupon").css({
        "display": "block"
      });
    });

    // 공지사항 보기
    $(".notice_view").click(function() {
      $(".notice").css({
        "display": "block"
      });
    });

     // 마이페이지 
     $(".mypage_view").click(function() {
      $(".mypage").css({
        "display": "block"
      });
    });
    

    // 파트너제휴
    $(".partnership_show").click(function() {
      $(".partnership").css({
        "display": "block"
      });
    });

     // 안전지킴이 
     $(".vaccine_show").click(function() {
      $(".vaccine").css({
        "display": "block"
      });
    });

    // 원격지원 
    $(".remote_show").click(function() {
      $(".remote").css({
        "display": "block"
      });
    });

    // 게임룰
    $(".gamerule_show").click(function() {
      $(".gamerule").css({
        "display": "block"
      });
    });


	$(".modal-disagree").click(function() {
      $("#myModal-system").css({
        "display": "none"
      });
    });
 
  });
 
})

$(function() {
 
  $(document).ready(function() {
 
    $("#myBtn-point").click(function() {
      $("#myModal-point").css({
        "display": "block"
      });
    });
 
    $(".close").click(function() {
      $("#myModal-point").css({
        "display": "none"
      });
    });
	
	$(".modal-disagree").click(function() {
      $("#myModal-point").css({
        "display": "none"
      });
    });
 
  });
 
})