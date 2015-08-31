
$(document).ready(function() {

  var nav = $('nav');
  var box = $('#box');
  var logo = $('#logo');
  var navOption = $('.nav-option');

  TweenMax.to(logo, 2, {backgroundColor: 'red'});
  TweenMax.staggerTo(navOption, 2, {color: 'red'}, .25);

  $('#nav-options .spin').click(function(){
    box.css('display', 'block');
    TweenMax.to(box, 3, {y: 500, x:500, rotation: 360});
    TweenMax.to(box, 2, {y: 150, x: 25, rotation: -360, delay: 3});
  });

  $('#nav-options .drag').click(function(){
    box.css('display', 'block');
    box.html('<h1>DRAG</h1>');
    $('#grid').css('display', 'block');
    Draggable.create("#box", {type:"x,y", edgeResistance:0.65, bounds:"#grid", throwProps:true});
  });

});

