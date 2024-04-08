$(function(){

  $('#typo .inner').click(function(){
    // 선택자.animate({ 속성: 값, 속성: 값 }, 시간, 이징, 다른할일 ==> 함수);
    // jquery 이징 기본은 linear, swing 두가지 것밖에 없음
    // jquery-ui가 있으면 다양한 효과를 집어넣을 수 있다.

    // 참고. animate는 '수치'가 바뀌는 것만 가능하다.
    // jquery-ui가 있어야지 backgroundColor 등의 수치이외의 값 변경이 가능하다.

    $(this).animate({opacity:0, fontSize: '0px'}, 1500, 'easeOutQuart', function(){
      $(this).animate({opacity: 1, fontSize: '110px'}, 500);
    });
  });

  $('.box').mouseover(function(){
    $(this).stop().animate({ backgroundColor: 'blue' })
  })
  .mouseout(function(){
    $(this).stop().animate({ backgroundColor: 'red' })
  });
});
