 var raw = window.location.search;
        raw= raw.substring(4);
    // alert(raw);
        var partsArray = raw.split("&%27");
        //partsArray.replace(/\W/g,'');
        alert(partsArray);
        //alert(partsArray);

        var newArray= new Array(partsArray.length); //stores the correctly split but with other chars
        for (var i=0; i<partsArray.length;i++){
            newArray[i]=partsArray[i].split("=");
            
            //alert("with chars"+newArray[i]);
        }
        
        var resultStrings= newArray.join(",");
        
    
    document.getElementById("write").innerHTML=resultStrings;