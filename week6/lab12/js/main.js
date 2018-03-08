$(function(){

//set the map and initial coordinates
var mymap = L.map('mapid').setView([0, 0], 1);

var Esri_WorldGrayCanvas = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ’, maxZoom: 16' });

Esri_WorldGrayCanvas.addTo(mymap);

$('#mapId').append(mymap);



})




