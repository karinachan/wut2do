var raw = window.location.search;
raw = raw.substring(4);
// alert(raw);
var partsArray = raw.split("&%27");
//partsArray.replace(/\W/g,'');
//  alert(partsArray);
//alert(partsArray);

var newArray = new Array(partsArray.length); //stores the correctly split but with other chars

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
        console.log(lon);
        JQuery(lat, lon);
		city = 'li=' + lat + ',' + lon; 
    }

}
else{}


	console.log(city);
	console.log(categoryID);
	


$.getJSON('https://api.foursquare.com/v2/venues/search?' + categoryID + city +
    'limit=5&***REMOVED***=***REMOVED***&***REMOVED***=***REMOVED***&v=20140215',
    function (data) {
        $.each(data.response.venues, function (i, venues) {
            content = '<p>' + venues.name + '  ' + venues.location.address + '</p>';
            $(content).appendTo("#names");
        });
    });




function JQuery(lat, lon) {

/ /
document.getElementById("write").innerHTML = document.getElementById("write").innerHTML + newArray[i];

/*	document.getElementById("write").innerHTML= document.getElementById("write").innerHTML=document.getElementById("write").innerHTML+"0"+newArray[0]; 
		alert("here1");
		document.getElementById("write").innerHTML= document.getElementById("write").innerHTML=document.getElementById("write").innerHTML+"1"+newArray[1];
        alert("here2");*/

$.getJSON('https://api.foursquare.com/v2/venues/search?' + categoryID + city +
    'limit=5&***REMOVED***=***REMOVED***&***REMOVED***=***REMOVED***&v=20140215',
    function (data) {
        $.each(data.response.venues, function (i, venues) {
            content = '<p>' + venues.name + ':   ' + venues.location.address + '</p>';
            $(content).appendTo("#names");
        });
    });


var resultStrings = newArray.join(",");
}

//	document.write(resultStrings); 

// document.getElementById("write").innerHTML=resultStrings;