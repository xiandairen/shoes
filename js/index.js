$(document).ready(function(){
	$(window).load(function() {
		var $screenH = $(window).height();//浏览器目前的可视区域的高度
   		$(".nav-trigger").css('top', $screenH/2-13);
   		console.log($screenH)
	});

	$(window).resize(function(event) {
		var $screenH = $(window).height();//浏览器目前的可视区域的高度
   		$(".nav-trigger").css('top', $screenH/2-13);
	});
   




})