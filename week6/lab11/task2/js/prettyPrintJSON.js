$(function(){
	
	$('#jsonform').submit(function(){
        var searchterms = $('#jsonform_searchterms').val();
		getResultsJSON(searchterms);
		return false;
	});
});

function getResultsJSON(searchterms){
    
    var url = "http://www.omdbapi.com/?apikey=51f867bf&s=" + searchterms;
    
    $.getJSON(url, function(jsondata){
        prettyPrintJSON(jsondata);
    });
}

function prettyPrintJSON(jsondata){
    var pretty = JSON.stringify(jsondata, null, 4);
    $('#display-data').append("<pre>"+pretty+"</pre>");
}