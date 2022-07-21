const webcamElement = document.getElementById("webcam");
const canvasElement = document.getElementById("canvas");
var ctx = canvasElement.getContext("2d");
const webcam = new Webcam(webcamElement, "user", canvasElement);
const ButtonTakePhoto = document.getElementById("btnTakePhoto");
const ButtonClearPhoto = document.getElementById("btnClearPhoto");

webcam
  .start()
  .then((result) => {
    console.log("webcam started");
  })
  .catch(err => {
    console.log(err);
  });

var picture = webcam.snap();

webcam.stop();

//take photo: to get onto the app, hold up a photo of a older person in front of the camera.

ButtonTakePhoto.addEventListener("click", function () {
  webcam.snap();
  canvasElement.toBlob(function (blob) {
    ImageAPI.analyseFacesBlob(blob, function (data) {
      console.log(data);
      // Loop through this for every face identified in the image
      for (let i = 0; i < data.length; i++) {
        if (data[i].faceAttributes.age > 50) {
          window.location = "Home.htm";
        } else {
          window.alert("You are not old enough to access this app!");
        }
      }
    });
  });
});

ButtonClearPhoto.addEventListener("click", function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
