let myImage = document.getElementById("myPhoto");
let myButton = document.getElementById("btnAnalyse");
let results = document.getElementById("myText");
let btnClear = document.getElementById("btnClear");
let btnDetermine = document.getElementById("btnDetermine");

let imageURL = myImage.src;

//results.innerHTML = imageURL;

myButton.addEventListener("click", function () {
  
  ImageAPI.analyseFaces(imageURL, function (data) {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
    let hair = data[i].faceAttributes.facialHair.moustache;
    let hairText = '';
    if(hair == 1){
      hairText = 'moustache.'
    } else {
       hairText = 'no moustache.'
      };
    let glasses = data[i].faceAttributes.glasses; //[0]-only recieves data for one person.
    let glassesText = '';
    if(glasses == "NoGlasses"){
      glassesText = 'no glasses'
    } else {
      glassesText = 'glasses'
    };
    let text = '<p>' + 'Face' + (i+1) + " has " + glassesText + ' and has ' + hairText + '</p>';
    results.innerHTML += text;
    }
  });
});


// btnDetermine.addEventListener("click", function() {
//   Boolean(glasses == true);
//   if (Boolean == true) {
//     let results.innerHTML = "allowed in";
//   }
// });


  btnClear.addEventListener("click", function() {
  let cleared = '<p>' + " " + '</p>';
  results.innerHTML = cleared;
});