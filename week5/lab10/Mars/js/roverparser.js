/**
 * @Author: John Isaacs <john>
 * @Date:   23-Feb-182018
 * @Filename: getresources.js
 * @Last modified by:   john
 * @Last modified time: 23-Feb-182018
 */
 $(document).ready(function () {

  $('#retrieve-data').click(function () {
  var displayResources = $('#display-data');

  displayResources.text('Loading Rover Data');

  $.ajax({
  type: "GET",
  url: "json/roverdata.json",
  success: function(result)
  {
    console.log(result.photos);
    var photos = result.photos //this data contains an array called photos

    var output="<table><thead><tr><th>Rover</th><th>Launch Date</th><th>Camera</th><th>Earth Date</th><th>Image</th></thead><tbody>";
    for (var i in photos)
    {
      output += "<tr><td>" + photos[i].rover.name + "</td><td>"
                + photos[i].rover.launch_date + "</td><td>"
                + photos[i].camera.full_name + "</td><td>" 
                + photos[i].earth_date + "</td><td><img src=\""
                + photos[i].img_src + "\"></td></tr>";
    }
    output+="</tbody></table>";

    displayResources.html(output);
    $("table").addClass("table");
  }
  });

  });
 });
