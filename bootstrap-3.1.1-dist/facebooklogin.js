window.fbAsyncInit = function() {
      FB.init({
        appId      : '645769065485335',
        status     : true, // check login status
        cookie     : true, // enable cookies to allow the server to access the session
        xfbml      : true  // parse XFBML
      });
    FB.login(function(){}, {scope: 'publish_actions'});
    FB.Event.subscribe('auth.authResponseChange', function(response) {
    if (response.status === 'connected') {
        testAPI();
    } else if (response.status === 'not_authorized') {
        FB.login(function(){
        FB.api('/me/feed', 'post', {message: 'Hello, world!'});
        }, {scope: 'publish_actions'});
    } else {
        FB.login(function(){
        FB.api('/me/feed', 'post', {message: 'Hello, world!'});
        }, {scope: 'publish_actions'});
    }
        console.log(FB.getAuthResponse());
    });
};
function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
    });
}

/*
FB.api('/me/feed', { limit: 3 }, function(response) {
  for (var i=0, l=response.length; i<l; i++) {
    var post = response[i];
    if (post.message) {
      
    } else if (post.attachment && post.attachment.name) {
      
    }
  }
});
*/