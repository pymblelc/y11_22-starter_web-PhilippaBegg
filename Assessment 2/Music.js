var imgArray = new Array();

// Declare the images and their order

imgArray[0] = new Image(); // starts at 0 not 1
imgArray[0].src = "Photos assessment/Elvis01.jpg"; //fisrt image, the one thats displaying from the html.

imgArray[1] = new Image();
imgArray[1].src = "Photos assessment/That's_the_Way_I_Like_It_The_Best_of_Dead_or_Alive_album_cover.jpg";

imgArray[2] = new Image();
imgArray[2].src = "Photos assessment/The-Kick-Inside-(US-Sleeve)_0.jpg";

imgArray[3] = new Image();
imgArray[3].src = "Photos assessment/ac9f865f929a60c7db274960bf5ca1e1.jpg";

//function to move to the next image

function nextImage(){
    var img = document.getElementById("displayedImage"); //get the displayed image which is defined in the html.
    for(var i = 0; i < imgArray.length;i++){ //i++ means we want to increase the value of i by one.
        if(imgArray[i].src == img.src){
            if(i === imgArray.length){ //check if the length of i is equal the the length of the img.array.
                document.getElementById("displayedImage").src = imgArray[0].src;
                break; //stops the loop 
            }
            document.getElementById("displayedImage").src = imgArray[i+1].src; //if the previous img.array was number i=0, then the next img.array displayed has number i=0+1, so 1.
            break; //stops the loop
        }
    }
}

//function to move to the previous image.

function previousImage(){
    var img = document.getElementById("displayedImage"); //get the displayed image.
    for(var i = imgArray.length-1; i >=0 ;i--){ //i-- means subtract one.
        if(imgArray[i].src == img.src){
            if(i === imgArray.length){ //check if the length of i is equal to the length of the image.array
                document.getElementById("displayedImage").src = imgArray[4].src;
                break; //stops the loop
            }
            document.getElementById("displayedImage").src = imgArray[i-1].src; //if the previous image was number i=4, then the next image is number i=4-1, so number 3.
            break; //stops the loop
        }
    }
}