function parseResults(){
var raw = window.location.search;

var partsArray = raw.split("=");
var results= "";
for (var i = 0; len=3; i++){
    results= results+ partsArray[i];
}

document.getElementById("write").innerHTML=results;
}

