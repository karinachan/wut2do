/* var radio1= document.getElementById("foo");
alert(radio1);
var radio2= document.getElementById("foo2");
alert(radio2);
var text= document.getElementById("text");
alert(text);
var formresult= radio1+radio2+text;
alert(formresult);

document.getElementById("write").innerHTML = formresult;
the results of the above come out to null because...as we learned in networks...http requests are stateless and thus the form results from the
previous page are not preserved. 

*/

/*var result= window.location.search;

document.getElementById("write").innerHTML = window.location.search;

$('#result').html("<br />$('form').serialize():<br />"+ $('form').serialize()+"<br /><br />$('form').serializeArray():<br />" + JSON.stringify($('form').serializeArray()));

document.getElementById("write").innterHTML=$('form').serialize(); */

var result = window.location.search;

//var partsArray = result.split('=');
//for (int i = 0; i <= partsArray.length; i++) 

document.getElementById("write").innerHTML=result;