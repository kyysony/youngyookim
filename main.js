chrome.app.runtime.onLaunched.addListener(function() {

  var screenWidth = screen.availWidth;
  var screenHeight = screen.availHeight;
  var width = 1650;
  var height = 1050;

  chrome.app.window.create('index.html', {
    id: "youngyookim",
    outerBounds: {
      width: width,
      height: height,
      left: Math.round((screenWidth-width)/2),
      top: Math.round((screenHeight-height)/2)
    
    }
  });
});