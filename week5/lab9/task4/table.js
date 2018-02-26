$(function(){

	$('thead').find('tr').addClass("head");

	$('thead').find('th').click(function(){ 
      	$(this).tablesorter(); 
    });

	$('tbody').find('tr:odd').addClass("odd");
	$('tbody').find('tr:even').addClass("even");

	$('tbody').find('tr').click(function(){
		$(this).toggleClass("selected", !$(this).hasClass("selected"));
	});

	

});