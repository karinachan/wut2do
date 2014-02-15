
 var raw = window.location.search;
        raw= raw.substring(4);
    // alert(raw);
        var partsArray = raw.split("&%27");
        //partsArray.replace(/\W/g,'');
        alert(partsArray);
        //alert(partsArray);

        var newArray= new Array(partsArray.length); //stores the correctly split but with other chars

		
        for (var i=0; i<partsArray[i].length;i++){
			var temp = partsArray[i].lastIndexOf("=");
			var tempstr = partsArray[i].substring(temp+1); 
			newArray[i] = tempstr; 
			//alert(i);
	//		document.write("<p>"); 
            //alert("with chars"+newArray[i]);
      //  }
		}
		alert("poop");
	    //document.getElementById("write").innerHTML=document.getElementById("write").innerHTML+newArray[i]; 

		document.getElementById("write").innerHTML= document.getElementById("write").innerHTML=document.getElementById("write").innerHTML+"0"+newArray[0]; 
		alert("here1");
		document.getElementById("write").innerHTML= document.getElementById("write").innerHTML=document.getElementById("write").innerHTML+"1"+newArray[1];
        alert("here2");
		$.getJSON('https://api.foursquare.com/v2/venues/search?ll=' + 
		alert(newArray[0]+","+newArray[1]);
		newArray[0] + ','+newArray[1] + '&radius=1000&limit=50&***REMOVED***=***REMOVED***&***REMOVED***=***REMOVED***&v=20140215',
		
		function(data) {
        $.each(data.response.venues, function(i,venues){
            content = '<p>' + venues.name + '  ' + venues.location.address + '</p>'; 
            $(content).appendTo("#names");
        });
    });
		//var lat = partsArray(
		
        var resultStrings= newArray.join(",");
    
	//	document.write(resultStrings); 
    
     document.getElementById("write").innerHTML=resultStrings;