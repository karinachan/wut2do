
    var i = 0; //variable used to count the steps
    function myclick(){ // function called on a button click for example
        var int = self.setInterval(
            function(){
                if (i == 100) window.clearInterval(int);
                $( "#progressbar" ).progressbar("value", i);
                i++;
            }
            , 10);
    }

    $('button').button().click(myclick); // a button element which will 
                                         // start the progress bar
    $( "#progressbar" ).progressbar(); //this part sets up the progressbar
     
/*$(function() {
            $( "#progressbar" ).progressbar({
              value: false
            });
            $( "button" ).on( "click", function( event ) {
              var target = $( event.target ),
                progressbar = $( "#progressbar" ),
                progressbarValue = progressbar.find( ".ui-progressbar-value" );
         
              if ( target.is( "#numButton" ) ) {
                progressbar.progressbar( "option", {
                  value: Math.floor( Math.random() * 100 )
                });
              } else if ( target.is( "#colorButton" ) ) {
                progressbarValue.css({
                  "background": '#' + Math.floor( Math.random() * 16777215 ).toString( 16 )
                });
              } else if ( target.is( "#falseButton" ) ) {
                progressbar.progressbar( "option", "value", false );
              }
            });
          });

 */