
// Load json file data
var dataLoad = function(){
  var indexData = $.getJSON("topspots.JSON");
  // function callback apon getJSON jquery complete received
  indexData.complete(addData);
}

var addData = function(list){
	//Retrive JSON array list
	var objList = list.responseJSON;
	var tbody = $("<tbody><tbody>")

	//Iterare across each JSON oject
	$.each(objList, function(i){
		//Create seperate row data for each object
		var obj = objList[i];
		var trow = $("<tr></tr>");

		//Create object for each prototype
		var protoObj = {};
		protoObj.name = obj.name;
		protoObj.description = obj.description;

		//Append Lat/Long to clickable link
		var link = $('<a class="btn btn-danger" target="blank"> Open in Google Maps</a>');
		var googleMaps = "https://www.google.com/maps?q=";
		googleMaps += obj.location[0] + "," + obj.location[1];
		// add link to anchor tag
		link.attr("href", googleMaps);
		// attach link to prototype
		protoObj.location = link;

		//Add data to rows.
		$.each(protoObj, function(content){
			var tdata = $("<td></td>");
			tdata.append(protoObj[content]);
			tdata.appendTo(trow);
		});
		//Append entire itteration into table rows
		tbody.append(trow);
	//Callback closure
	});
	//Build body
	$("thead").after(tbody);
}
// function call apon DOM load
$(dataLoad);


// // Map Markers
// function initialize(){
// 	var mapOptions = {
// 		center: new google.maps.LatLng(37.09, -95.71),
// 		zoom: 8,
// 		mapTypeId: google.maps.mapTypeId.ROADMAP
// 	};
// 	var map = new google.maps.Maps( $("#map-canvas"), mapOptions);
// }
// google.maps.event.addDomListener(window, 'load', initialize);



