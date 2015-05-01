$(document).ready(function(){
$(window).load(function(){
$("#hel").slideDown(750);
$("#bck").fadeIn(750, function(){
	$("#fdcom").slideDown(700);
	$("#bkcom").slideDown(700);
	$("#rtcom").slideDown(700);
	$("#ltcom").slideDown(700);
	$("#reacom").slideDown(700);
	$("#pucom").slideDown(700);
	$("#pdcom").slideDown(700);
	$("#pccom").slideDown(700);
	$("#hccom").slideDown(700);
	$("#sccom").slideDown(700);	

});
});
 });
$(document).ready(function(){
$("#fdcom").mouseenter(function(){
$("#fdmat").fadeIn(750);
$("#fdcom").mouseleave(function(){
$("#fdmat").fadeOut(500);
});
});
$("#bkcom").mouseenter(function(){
$("#bkmat").fadeIn(750);
$("#bkcom").mouseleave(function(){
$("#bkmat").fadeOut(500);
});
});
$("#rtcom").mouseenter(function(){
$("#rtmat").fadeIn(750);
$("#rtcom").mouseleave(function(){
$("#rtmat").fadeOut(500);
});
});
$("#reacom").mouseenter(function(){
$("#reamat").fadeIn(750);
$("#reacom").mouseleave(function(){
$("#reamat").fadeOut(500);
});
});
$("#pucom").mouseenter(function(){
$("#pumat").fadeIn(750);
$("#pucom").mouseleave(function(){
$("#pumat").fadeOut(500);
});
});
$("#pdcom").mouseenter(function(){
$("#pdmat").fadeIn(750);
$("#pdcom").mouseleave(function(){
$("#pdmat").fadeOut(500);
});
});
$("#pccom").mouseenter(function(){
$("#pcmat").fadeIn(750);
$("#pccom").mouseleave(function(){
$("#pcmat").fadeOut(500);
});
});
$("#hccom").mouseenter(function(){
$("#hcmat").fadeIn(750);
$("#hccom").mouseleave(function(){
$("#hcmat").fadeOut(500);
});
});
$("#sccom").mouseenter(function(){
$("#scmat").fadeIn(750);
$("#sccom").mouseleave(function(){
$("#scmat").fadeOut(500);
});
});
$("#ltcom").mouseenter(function(){
$("#ltmat").fadeIn(750);
$("#ltcom").mouseleave(function(){
$("#ltmat").fadeOut(500);
});
});
});
function can(obj)
{
	obj.style.color = '#FFFFFF';
 	obj.style.backgroundColor =  '#3B5998';
 
}
function col(obj)
 {
 	obj.style.backgroundColor = '#FFFFFF';
 	obj.style.color = '#3B5998';
 	//obj.style.height = '30px';
 }