$(function(){
	alert("Document ready");

	$('#searchform').submit(function(){
        var searchterms = $('#searchterms').val();
		getResultsFromOMDB(searchterms);
		return false;
	});
});

function getResultsFromOMDB(searchterms){
    
    var url = "http://www.omdbapi.com/?apikey=51f867bf&s=" + searchterms;
    
    $.getJSON(url, function(jsondata){
        addResultsTitle(jsondata);
    });
}

function addResultsTitle(jsondata){
    var htmlstring = "";
    
    for(var i = 0; i < 10; i++){
        var title = jsondata.Search[i].Title;
        htmlstring += "<li>" + title + "</li>";
    }
    
    $('#results').html(htmlstring);
}