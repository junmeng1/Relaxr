$(document).ready(function(){ //why not putting event in there?
  $('.readmore').click(function(event){
  	event.preventDefault();
    $('#show-this-on-click').slideDown();
    $('.readmore').hide();
    $('.readless').show();
    
    }) 
});

$(document).ready(function(){
  $('.readless').click(function(event){
  	event.preventDefault();
  	$('#show-this-on-click').slideUp();
    $('.readmore').show();
    $('.readless').hide();
    
  })
});

$(document).ready(function(){
  $('.learnmore').click(function(event){
  	event.preventDefault();
  	$('#learnmoretext').slideDown();
    $('.learnmore').hide();
    
  })
});