// document.getElementById("btnAnalyse").addEventListener( // <button id="submit">Submit</button>
//     "click",
//     function () {
//         let fileInput = document.getElementById("myPhoto"); // <input type="file" id="upload">
//         let blob = new Blob([fileInput.files[0]]);
//         ImageAPI.analyseFacesBlob(
//             blob,
//             function (data) {
//                 console.log(data);
//             }
//         );
//     }
// );

// var faces = []; //undefined
// let myImage = document.getElementById("myPhoto");
// let myButton = document.getElementById("btnAnalyse");
// let results = document.getElementById("myText");
// let btnClear = document.getElementById("btnClear");
// let btnDetermine = document.getElementById("btnDetermine");
// let imageURL = myImage.src;
// var age;
// let findAgesCalled = false;
// function findAges(){
//   // to ensure that this function is only called once
//   if (findAgesCalled == false) {
//     findAgesCalled = true;
//     ImageAPI.analyseFaces(imageURL, function (data) {
//       // Loop through this for every face identified in the image
//       for (let i = 0; i < data.length; i++) {
//         age = data[i].faceAttributes.age;
//         // Adds this face to the array and stores its age
//         faces.push({
//           age
//         });
//       }
//     });
//   }
// }
// // As soon as this page is loaded, find the ages for all the faces
// $(document).ready(function () {
//   findAges();
// });
// myButton.addEventListener("click", function () {
//     // Loop through every face stored in the faces[] array
//     for (let i = 0; i < faces.length; i++) {
//       age = faces[i].age;
//       // Print the appropriate message for each face
//       let text = "";
//       if (faces[i].age > 40) {
//         text = "<p>" + "Face " + (i + 1) + " is over 40.</p>";
//       } else {
//         text = "<p>" + "Face " + (i + 1) + " is not over 40.</p>";
//       }
//       results.innerHTML += text;
//     }
// });
// btnDetermine.addEventListener("click", function () {
//   results.innerHTML = " ";
//   for (let i = 0; i < faces.length; i++) {
//     if (faces[i].age > 40) {
//       text = "<p>" + "Face " + (i + 1) + " is allowed in." + "</p>";
//     } else {
//       text = '<p>' + "Face " + (i + 1) + " is not allowed in." + '<p>';
//     }
//     results.innerHTML += text;
//   }
// });
// btnClear.addEventListener("click", function () {
//   let cleared = "<p>" + " " + "</p>";
//   results.innerHTML = cleared;
// });

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
        let faces[i].age = data[i].faceAttributes.age;
        if (faces[i].age > 50) {
          window.location = "Home.htm";
        } else {
          window.alert("You are not old enough ton access this app!");
        }
      }
    });
  });
});

ButtonClearPhoto.addEventListener("click", function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
