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

if (newArray[1] == "food"){
    console.log("food in"); 
    if (categoryID !== "categoryID=") {
        max += 2;
        categoryID += ",";
    }
    categoryID += "4d4b7105d754a06374d81259";
	}
if(newArray[1] == "Movie" |newArray[2] == "Movie" ){
    console.log("movie in"); 
    if (categoryID != "categoryID=") {
        max += 2;
        categoryID += ",";
    }
			categoryID += "4bf58dd8d48988d17f941735";
			}
if(newArray[1] == "museum" | newArray[2] == "museum" | newArray[3] == "museum"){
    if (categoryID != "categoryID=") {
        max += 2;
        categoryID += ",";
    }
		categoryID += "4bf58dd8d48988d181941735"; 
		}
if(newArray[1] =="Music" | newArray[2] =="Music" | newArray[3] =="Music"| newArray[4] =="Music"){
    if (categoryID != "categoryID=") {
        max += 2;
        categoryID += ",";
    }
				categoryID += "4bf58dd8d48988d1e5931735"; 
				}
if(newArray[1] == "shopping"|newArray[2] == "shopping"|newArray[3] == "shopping"|newArray[4] == "shopping"|newArray[5] == "shopping") {
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

/*$.getJSON('https://api.foursquare.com/v2/venues/search?' + categoryID + 'll=' + lat + ',' + lon  +

        console.log(lon);
        JQuery(lat, lon);
		city = 'li=' + lat + ',' + lon; 
    }

}
else{}


	console.log(city);
	console.log(categoryID);
	


$.getJSON('https://api.foursquare.com/v2/venues/search?' + categoryID + city +
>>>>>>> 047116e047db68ecf3ef464e7f9f609616185a4f
    'limit=5&***REMOVED***=***REMOVED***&***REMOVED***=***REMOVED***&v=20140215',
    function (data) {
        $.each(data.response.venues, function (i, venues) {
            content = '<p>' + venues.name + '  ' + venues.location.address + '</p>';
            $(content).appendTo("#names");
        });

    });*/


function JQuery(lat, lon, max) {

/ /
document.getElementById("write").innerHTML = document.getElementById("write").innerHTML + newArray[i];

/*	document.getElementById("write").innerHTML= document.getElementById("write").innerHTML=document.getElementById("write").innerHTML+"0"+newArray[0]; 
		alert("here1");
		document.getElementById("write").innerHTML= document.getElementById("write").innerHTML=document.getElementById("write").innerHTML+"1"+newArray[1];
        alert("here2");*/

     $.getJSON('https://api.foursquare.com/v2/venues/search?' + categoryID + '&ll=' + lat + ',' + lon + '&radius=1000&limit=' + max +'&***REMOVED***=***REMOVED***&***REMOVED***=***REMOVED***&v=20140215',

        function (data) {
        //    content= "<form action=\"destination.html\" method=\"get\">";
            $.each(data.response.venues, function (i, venues) {
                content =  '<p>' + venues.name + '-  ' + venues.location.address + ', ' + venues .location.city + ', ' + venues.location.state +'</p>';
                $(content).appendTo("#names");
            });
        });
var resultStrings = newArray.join(",");
}

/*//var resultStrings = newArray.join(",");
$.getJSON('https://api.foursquare.com/v2/venues/search?' + categoryID + city +
    'limit=5&***REMOVED***=***REMOVED***&***REMOVED***=***REMOVED***&v=20140215',
    function (data) {
        $.each(data.response.venues, function (i, venues) {
            content = '<p>' + venues.name + ':   ' + venues.location.address + '</p>';
            $(content).appendTo("#names");
        });
    });*/


//var resultStrings = newArray.join(",");


//	document.write(resultStrings); 

// document.getElementById("write").innerHTML=resultStrings;