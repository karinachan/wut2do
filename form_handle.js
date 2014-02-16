var raw = window.location.search;
raw = raw.substring(4);
// alert(raw);
var partsArray = raw.split("&%27");
//partsArray.replace(/\W/g,'');
//  alert(partsArray);
//alert(partsArray);

var newArray = new Array(partsArray.length); //stores the correctly split but with other chars


var categoryID = "categoryID=";

for (var i = 0; i < partsArray.length; i++) {
    document.write(partsArray[i]+" "); 
    var temp = partsArray[i].lastIndexOf("=");
    var tempstr = partsArray[i].substring(temp + 1);
   // document.write(tempstr + " "); 
    newArray[i] = tempstr;
}

var max = 5;

if (newArray[2] == "food"){
    console.log("food in"); 
    if (categoryID !== "categoryID=") {
        max += 2;
        categoryID += ",";
    }
    categoryID += "4d4b7105d754a06374d81259";
	}
if(newArray[2] == "Movie" |newArray[3] == "Movie" ){
    console.log("movie in"); 
    if (categoryID != "categoryID=") {
        max += 2;
        categoryID += ",";
    }
			categoryID += "4bf58dd8d48988d17f941735";
			}
if(newArray[2] == "museum" | newArray[3] == "museum" | newArray[4] == "museum"){
    if (categoryID != "categoryID=") {
        max += 2;
        categoryID += ",";
    }
		categoryID += "4bf58dd8d48988d181941735"; 
		}
if(newArray[2] =="Music" | newArray[3] =="Music" | newArray[4] =="Music"| newArray[5] =="Music"){
    if (categoryID != "categoryID=") {
        max += 2;
        categoryID += ",";
    }
				categoryID += "4bf58dd8d48988d1e5931735"; 
				}
if(newArray[2] == "shopping"|newArray[3] == "shopping"|newArray[4] == "shopping"|newArray[5] == "shopping"|newArray[6] == "shopping") {
    console.log(categoryID);
    if (categoryID != "categoryID=") {
        console.log("heyyy");
        max += 2;
        categoryID += ",";
    }
	categoryID += "4d4b7105d754a06378d81259";
}

console.log(categoryID);
					 
	
if (newArray[0] == "Current+Location") {

var categoryID = "";
var city = ""; 

for (var i = 0; i < partsArray.length; i++) {
    var temp = partsArray[i].lastIndexOf("=");
    var tempstr = partsArray[i].substring(temp + 1);
    newArray[i] = tempstr;
}

if (newArray[3] == "food"){
    categoryID = "categoryId=4d4b7105d754a06374d81259&";
	}
if(newArray[3] == "museum"){
		categoryID= "categoryId=4bf58dd8d48988d181941735&"; 
		}
if(newArray[3] == "Movie"){
			categoryID= "categoryId=4bf58dd8d48988d17f941735&";
			}
if(newArray[3] =="Music"){
				categoryID= "categoryId=4bf58dd8d48988d1e5931735&"; 
				}
if(newArray[3] == "shopping"){
	categoryID= "categoryId=4d4b7105d754a06378d81259&";
}
					
	
	
	
	console.log(categoryID); 
	
	
if(newArray[1] != ""){
	city = "near=" + newArray[1] + "&";
}
else if (newArray[0] == "Current+Location") {

    {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else { 

        }
    }

    function showPosition(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        console.log(lat);

        console.log("hey");
        console.log(lon);
        console.log(categoryID);
        console.log(max);
        JQuery(lat, lon,max);
    }

}
else if (newArray[0] != "Current+Location") {
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


	


/*$.getJSON('https://api.foursquare.com/v2/