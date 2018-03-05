$(function(){
	
	$('#searchform').submit(function(){
        var searchterms = $('#searchform_searchterms').val();
		getResultsFromOMDB(searchterms);
		return false;
	});
});

function getResultsFromOMDB(searchterms){
    
    var url = "http://www.omdbapi.com/?apikey=51f867bf&s=" + searchterms + "&type=movie";
    
    $.getJSON(url, function(jsondata){
        addResultsTitle(jsondata);
    });
}

function addResultsTitle(jsondata){
    var htmlstring = "<table><thead><tr><th>Title</th><th>Type</th><th>Release year</th><th>Poster Thumbnail</th><th>A link to the IMDB page?</th><th>rate (by Rotten Tomatoes)</th></thead><tbody>";
    
    for(var i = 0; i < 10; i++){
        var title = jsondata.Search[i].Title;
        var poster = jsondata.Search[i].Poster;
        var year = jsondata.Search[i].Year;
        var type = jsondata.Search[i].Type;
        var imdbPage = "http://www.omdbapi.com/?apikey=51f867bf&i=" + jsondata.Search[i].imdbID;
        var rate = jsondata.Search[i].Ratings[1].Value;
        
        htmlstring +="<tr><td>" + title + "</td><td>" 
                                + year + "</td><td>" 
                                + type + "</td><td><img src=\"" 
                                + poster + "\"></td><td><a href=\"" 
                                + imdbPage + "\" class=\"btn btn-primary\">IMDB page</a></td><td>"
                                + rate + "</td></tr>";
        
    }
    
    htmlstring += "</tbody></table>";
    
    $('#display-data').html(htmlstring);
    $("table").addClass("table");
}