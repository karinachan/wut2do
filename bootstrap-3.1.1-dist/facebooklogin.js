
      window.fbAsyncInit = function() {
      FB.init({
        appId      : '645769065485335',
        status     : true, // check login status
        cookie     : true, // enable cookies to allow the server to access the session
        xfbml      : true  // parse XFBML
      });

          FB.login(function(){}, {scope: 'publish_actions'});
        FB.Event.subscribe('auth.authResponseChange', function(response) {
            
            // Here we specify what we do with the response anytime this event occurs. 
           // FBSession.activeSession = fbSession;
            if (response.status === 'connected') {
              // The response object is returned with a status field that lets the app know the 
              // login status of the person. In this case, we're handling the situation where they 
              // have logged in to the app.
              testAPI();
            } else if (response.status === 'not_authorized') {
              // In this case, the person is logged into Facebook, but not into the app, so we call
              // FB.login() to prompt them to do so. 
              // In real-life usage, you wouldn't want to immediately prompt someone to login 
              // like this, for two reasons:
              // (1) JavaScript created popup windows are blocked by most browsers unless they 
              // result from direct interaction from people using the app (such as a mouse click)
              // (2) it is a bad experience to be continually prompted to login upon page load.
              FB.login(function(){
                  FB.api('/me/feed', 'post', {message: 'Hello, world!'});
}, {scope: 'publish_actions'});
            } else {
              // In this case, the person is not logged into Facebook, so we call the login() 
              // function to prompt them to do so. Note that at this stage there is no indication
              // of whether they are logged into the app. If they aren't then they'll see the Login
              // dialog right after they log in to Facebook. 
              // The same caveats as above apply to the FB.login() call here.
              FB.login(function(){
                  FB.api('/me/feed', 'post', {message: 'Hello, world!'});
}, {scope: 'publish_actions'});
            }
              console.log(FB.getAuthResponse());
            
          });
      };
        
      // Here we run a very simple test of the Graph API after login is successful. 
      // This testAPI() function is only called in those cases. 
      function testAPI() {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function(response) {
           // alert(JSON.stringify(response, null, 4));
          //console.log('Good to see you, ' + response.name + '.');
        });
      }

        testAPI(); 
FB.api('/me', function(response) {
  
});

FB.api('/me/feed', { limit: 3 }, function(response) {
  for (var i=0, l=response.length; i<l; i++) {
    var post = response[i];
    if (post.message) {
      
    } else if (post.attachment && post.attachment.name) {
      
    }
  }
});