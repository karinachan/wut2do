var raw = window.location.search;
raw = raw.substring(4);
// alert(raw);
var partsArray = raw.split("&%27");
//partsArray.replace(/\W/g,'');
//  alert(partsArray);
//alert(partsArray);

var newArray = new Array(partsArray.length); //stores the correctly split but with other chars


var categoryID = "";

for (var i = 0; i < partsArray.length; i++) {
    var temp = partsArray[i].lastIndexOf("=");
    var tempstr = partsArray[i].substring(temp + 1);
   // document.write(tempstr + " "); 
    newArray[i] = tempstr;
}

var max = 5;

if (newArray[1] == "food"){
    console.log("food in"); 
    if (categoryID !== "") {
        max += 2;
        categoryID += ",";
    }
    categoryID += "4d4b7105d754a06374d81259";
	}
if(newArray[1] == "Movie" |newArray[2] == "Movie" ){
    console.log("movie in"); 
    if (categoryID != "") {
        max += 2;
        categoryID += ",";
    }
			categoryID += "4bf58dd8d48988d17f941735";
			}
if(newArray[1] == "museum" | newArray[2] == "museum" | newArray[3] == "museum"){
    if (categoryID != "") {
        max += 2;
        categoryID += ",";
    }
		categoryID += "4bf58dd8d48988d181941735"; 
		}
if(newArray[1] =="Music" | newArray[2] =="Music" | newArray[3] =="Music"| newArray[4] =="Music"){
    if (categoryID != "") {
        max += 2;
        categoryID += ",";
    }
				categoryID += "4bf58dd8d48988d1e5931735"; 
				}
if(newArray[1] == "shopping"|newArray[2] == "shopping"|newArray[3] == "shopping"|newArray[4] == "shopping"|newArray[5] == "shopping") {
    console.log(categoryID);
    if (categoryID != "") {
        console.log("heyyy");
        max += 2;
        categoryID += ",";
    }
	categoryID += "4d4b7105d754a06378d81259";
}

console.log(categoryID);
					
 if (newArray[0] == "Current+Location") {
     
        console.log("heyyyyyyyy");
        if (navigator.geolocation) {
            console.log("here");
            navigator.geolocation.getCurrentPosition(showPosition);
        } else { console.log("SHitters");
        }
     
    function showPosition(position) {
        console.log("crud");
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        console.log(lat);
        console.log("hey");
        console.log(lon);
        console.log(categoryID);
        console.log(max);
        JQuery(lat, lon,max);
    }

} else if (newArray[0] != "Current+Location") {
var jsonURL = 'https://maps.googleapis.com/maps/api/geocode/json?' + 'address=' + newArray[0] + '&sensor=true&***REMOVED***=AIzaSyDTRT69LPH6Vb4PsYpZR7fDEvWVl1IWiyA';
    
$.getJSON(jsonURL, function( data ) {
    var lat = (data.results[0].geometry.location.lat);
    var lon = (data.results[0].geometry.location.lng);
    console.log(lat);
    console.log("Sup");
    console.log(categoryID);
    console.log(lon);
    console.log(max);
  JQuery(lat, lon, max);
});
    
}

function JQuery(lat, lon, max) {

/ /     

     $.getJSON('https://api.foursquare.com/v2/venues/search?categoryId=' + categoryID + '&ll=' + lat + ',' + lon + '&limit=' + max +'&***REMOVED***=***REMOVED***&***REMOVED***=***REMOVED***&v=20140215',
        function (data) {
            content= "<form action=\"destination.html\" method=\"get\">";
            $.each(data.response.venues, function (i, venues) {
                if (venues.name == undefined) {
                 venues.name = "";   
                } else {
                    venues.name = venues.name + '- ';
                }
                if (venues.location.address == undefined) {
                    venues.location.address = "";
                } else {
                    venues.location.address = venues.location.address + ", ";
                }
                console.log(venues.location.address);
                if (venues.location.city == undefined) {
                    venues.location.city = "";
                } else {
                    venues.location.city = venues.location.city + ", ";
                }
                if (venues.location.state == undefined) {
                 venues.location.state = "";
                }
                
              content = '<p><input type=\"checkbox\" name=\"ven\"\ value=\"food\">'+venues.name + venues.location.address + venues.location.city + venues.location.state + '<br></p>';
                
            $(content).appendTo("#names");
            content += "<input type=\"submit\" />"
        

        });
    });
    

            

var resultStrings = newArray.join(",");
}

