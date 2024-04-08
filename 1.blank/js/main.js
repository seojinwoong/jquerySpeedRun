$(function(){

  $('#typo, h1').mouseover(function(){
    $(this).css('background-color', 'green');
  })
  .mouseout(function(){
    $(this).css('background-color', '#3498db');
  });
});