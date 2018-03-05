$(function(){
	alert("Document ready");

	$('#searchform').submit(function(){
		addItemToList("exemple item");
		return false;
	});
})

function addItemToList(item){
	$('result').append("<li>" + item + "</li>");
}