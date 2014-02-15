



 var raw = window.location.search;
        raw= raw.substring(4);
    // alert(raw);
        var partsArray = raw.split("&%27");
        //partsArray.replace(/\W/g,'');
        alert(partsArray);
        //alert(partsArray);

        var newArray= new Array(partsArray.length); //stores the correctly split but with other chars

		var categoryID = "";
		
        for (var i=0; i<partsArray.length;i++){
			var temp = partsArray[i].lastIndexOf("=");
			var tempstr = partsArray[i].substring(temp+1); 
			newArray[i] = tempstr; 
		}
		
		
		if(newArray[3] == "food")
			categoryID = "categoryId=4d4b7105d754a06374d81259&";
		
		console.log(newArray[3]); 
		console.log(newArray[0]);
		console.log(newArray[1]); 
	    //document.getElementById("write").innerHTML=document.getElementById("write").innerHTML+newArray[i]; 

	/*	document.getElementById("write").innerHTML= document.getElementById("write").innerHTML=document.getElementById("write").innerHTML+"0"+newArray[0]; 
		alert("here1");
		document.getElementById("write").innerHTML= document.getElementById("write").innerHTML=document.getElementById("write").innerHTML+"1"+newArray[1];
        alert("here2");*/
		
		$.getJSON('https://api.foursquare.com/v2/venues/search?' + categoryID + 'll=' + newArray[0] + ',' + newArray[1] +
		'&radius=1000&limit=5&***REMOVED***=***REMOVED***&***REMOVED***=***REMOVED***&v=20140215',
		
		function(data) {
        $.each(data.response.venues, function(i,venues){
            content = '<p>' + venues.name + '  ' + venues.location.address + '</p>'; 
            $(content).appendTo("#names");
        });
    });
		
        var resultStrings= newArray.join(",");
    
	//	document.write(resultStrings); 
    
    // document.getElementById("write").innerHTML=resultStrings;