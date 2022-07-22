const webcamElement = document.getElementById("webcam");
const canvasElement = document.getElementById("canvas");
var ctx = canvasElement.getContext("2d"); 
const webcam = new Webcam(webcamElement, "user", canvasElement);
//to get the buttons information from the html
const ButtonTakePhoto = document.getElementById("btnTakePhoto");
const ButtonClearPhoto = document.getElementById("btnClearPhoto");

//to make the camera work
webcam
  .start()
  .then((result) => {
    console.log("webcam started");
  })
  .catch(err => {
    console.log(err);
  });

var picture = webcam.snap();

//turn off the camera
webcam.stop();

//take photo: to get onto the app, hold up a photo of a person over 50 in front of the camera.

ButtonTakePhoto.addEventListener("click", function () {
  webcam.snap();
  canvasElement.toBlob(function (blob) { //to turn into an image that can be analysed
    ImageAPI.analyseFacesBlob(blob, function (data) {
      console.log(data);
      // Loop through this for every face identified in the image
      for (let i = 0; i < data.length; i++) {
        if (data[i].faceAttributes.age > 50) {
          window.location = "Home.htm"; //change screen to Home.htm
        } else {
          window.alert("You are not old enough to access this app!"); //gives an alert
        }
      }
    });
  });
});

ButtonClearPhoto.addEventListener("click", function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height); //clears the photo that was taken. canvas is defined earlier.
});
