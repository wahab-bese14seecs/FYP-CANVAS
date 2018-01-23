

  /*sd
     Face detector configuration - If not specified, defaults to F
     affdex.FaceDetectorMode.LARGE_FACES
     affdex.FaceDetectorMode.LARGE_FACES=Faces occupying large portions of the frame
     affdex.FaceDetectorMode.SMALL_FACES=Faces occupying small portions of the frame
  */
  var faceMode = affdex.FaceDetectorMode.LARGE_FACES;

  //Construct a FrameDetector and specify the image width / height and face detector mode.
  var detector = new affdex.FrameDetector(faceMode);

  detector.addEventListener("onInitializeSuccess", function() {
    console.log("Load hogya hai");
  });
  detector.addEventListener("onInitializeFailure", function() {});

  /* 
    onImageResults success is called when a frame is processed successfully and receives 3 parameters:
    - Faces: Dictionary of faces in the frame keyed by the face id.
             For each face id, the values of detected emotions, expressions, appearane metrics 
             and coordinates of the feature points
    - image: An imageData object containing the pixel values for the processed frame.
    - timestamp: The timestamp of the captured image in seconds.
  */




  detector.addEventListener("onResetSuccess", function() {});
  detector.addEventListener("onResetFailure", function() {});



  detector.addEventListener("onStopSuccess", function() {});
  detector.addEventListener("onStopFailure", function() {});


  detector.detectAllExpressions();
  detector.detectAllEmotions();
  detector.detectAllEmojis();
  detector.detectAllAppearance();






detector.addEventListener("onImageResultsSuccess", function (faces, image, timestamp) {
  console.log("haha");
      if (faces.length > 0) {
console.log(faces[0]["emotions"]["joy"]);
}
  });
  /* 
    onImageResults success receives 3 parameters:
    - image: An imageData object containing the pixel values for the processed frame.
    - timestamp: An imageData object contain the pixel values for the processed frame.
    - err_detail: A string contains the encountered exception.
  */
  detector.start();




  //Get a canvas element from DOM
  var aCanvas = document.getElementById("canvas");
  var context = aCanvas.getContext('2d');
// grab canvas and 2D drawing context
var video = document.getElementById("video");
// grab the video element
drawVideo(context, video, canvas.width, canvas.height);
// calls drawVideo() function, passing all the objects
function drawVideo(context, video, width, height) {         
  context.drawImage(video, 0, 0, width, height); // draws current video frame to canvas   
  //Process the frame

  //Cache the timestamp of the first frame processed
  var startTimestamp = (new Date()).getTime() / 1000;

  //Get imageData object.
  var imageData = context.getImageData(0, 0, 640, 480);
  console.log(imageData);
  //detector.process();
  //Get current time in seconds
  var now = (new Date()).getTime() / 1000;

  //Get delta time between the first frame and the current frame.
  var deltaTime = now - startTimestamp;
var delay = 100; // milliseconds delay for slowing framerate




setTimeout(drawVideo, delay, context, video, width, height); // recursively calls drawVideo() again after delay

}





    detector.addEventListener("onImageResultsFailure", function (image, timestamp, err_detail) {
    console.log("Image fail");
  });
