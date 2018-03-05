$(function(){
	alert("Document ready");

	$('#searchform').submit(function(){
        var item = $('#searchterms').val();
		addItemToList(item);
		return false;
	});
})

function addItemToList(item){
	$('#results').append("<li>" + item + "</li>");
}