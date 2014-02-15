var raw = window.location.search;

var partsArray = raw.split("=");
var results= "";
for (var i = 0; len=partsArray.length; i++){
    results= results +i;
}

document.getElementById("write").innerHTML=results;


