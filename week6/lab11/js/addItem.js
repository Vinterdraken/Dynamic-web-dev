$(function(){
	alert("Document ready");

	$('#searchform').submit(function(){
		addItemToList("exemple item");
		return false;
	});
})

function addItemToList(item){
	$('#results').append("<li>" + item + "</li>");
}