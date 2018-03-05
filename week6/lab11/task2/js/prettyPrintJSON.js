$(function(){
	alert("Document ready");

	$('#jsonform').submit(function(){
        var searchterms = $('#searchterms').val();
		getResultsFromOMDB(searchterms);
		return false;
	});
});

function getResultsFromOMDB(searchterms){
    
    var url = "http://www.omdbapi.com/?apikey=51f867bf&s=" + searchterms;
    
    $.getJSON(url, function(jsondata){
        prettyPrintJSON(jsondata);
    });
}

function prettyPrintJSON(jsondata){
    var pretty = JSON.stringify(jsondata, null, 4);
    $('#resultsbox').append("<pre>"+pretty+"</pre>");
}