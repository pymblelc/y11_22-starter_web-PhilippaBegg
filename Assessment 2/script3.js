var faces = []; //undefined

let myImage = document.getElementById("myPhoto");
let myButton = document.getElementById("btnAnalyse");
let results = document.getElementById("myText");
let btnClear = document.getElementById("btnClear");
let btnDetermine = document.getElementById("btnDetermine");

let imageURL = myImage.src;

// var hair;
// var glasses;

// myButton.addEventListener("click", function () {
//   ImageAPI.analyseFaces(imageURL, function (data) {
//     console.log(data);
//     // for(initial condition: terminating condition: increment)
//     // i ++ >>> i = i + 1
//     for (let i = 0; i < data.length; i++) {
//       hair = data[i].faceAttributes.facialHair.moustache;
//       let hairText = "";
//       if (hair == 1) {
//         hairText = "moustache.";
//       } else {
//         hairText = "no moustache.";
//       }
//       glasses = data[i].faceAttributes.glasses; //[0]-only recieves data for one person.
//       let glassesText = "";
//       if (glasses == "NoGlasses") {
//         glassesText = "no glasses";
//       } else {
//         glassesText = "glasses";
//       }
//       let text = "<p>" + "Face " + (i + 1) + " has " + glassesText + " and has " + hairText + "</p>";

//       faces.push({
//         hair: hair,
//         hairText: hairText,
//         glasses: glasses,
//         glassesText: glassesText,
//         finalComment: text,
//       });

//       results.innerHTML += text;
//     }
//   });
// });

// btnDetermine.addEventListener("click", function () {
//   results.innerHTML = " ";
//   console.log(faces);
//   for (let i = 0; i < faces.length; i++) {
//     if (faces[i].hair == 1 && faces[i].glasses != "NoGlasses") {
//       faces[i].finalComment = "<p>" + "Face " + (i + 1) + " is allowed in." + "</p>";
//     } else {
//       faces[i].finalComment = '<p>' + "Face " + (i + 1) + " is not allowed in." + '<p>';
//     }
//     results.innerHTML += faces[i].finalComment;
//   }
// });

var age;


myButton.addEventListener("click", function () {
  ImageAPI.analyseFaces(imageURL, function (data) {
    console.log(data);
    // for(initial condition: terminating condition: increment)
    // i ++ >>> i = i + 1
    for (let i = 0; i < data.length; i++) {
      age = data[i].faceAttributes.age;
      let ageText = "";
      if (age > 49) {
        ageText = "over 50.";
      } else {
        ageText = "not over 50.";
      }
      let text = "<p>" + "Face " + (i + 1) + " is " + ageText + "</p>";

      faces.push({
        age: age,
        ageText: ageText,
        finalComment: text,
      });

      results.innerHTML += text;
    }
  });
});

btnDetermine.addEventListener("click", function () {
  results.innerHTML = " ";
  console.log(faces);
  for (let i = 0; i < faces.length; i++) {
    if (faces[i].age > 49) {
      faces[i].finalComment = "<p>" + "Face " + (i + 1) + " is allowed in." + "</p>";
    } else {
      faces[i].finalComment = '<p>' + "Face " + (i + 1) + " is not allowed in." + '<p>';
    }
    results.innerHTML += faces[i].finalComment;
  }
});

btnClear.addEventListener("click", function () {
  let cleared = "<p>" + " " + "</p>";
  results.innerHTML = cleared;
});