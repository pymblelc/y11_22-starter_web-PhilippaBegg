var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = "Photos assessment/Elvis01.jpg";

imgArray[1] = new Image();
imgArray[1].src = "Photos assessment/That's_the_Way_I_Like_It_The_Best_of_Dead_or_Alive_album_cover.jpg";

imgArray[2] = new Image();
imgArray[2].src = "Photos assessment/The-Kick-Inside-(US-Sleeve)_0.jpg";

imgArray[3] = new Image();
imgArray[3].src = "Photos assessment/ac9f865f929a60c7db274960bf5ca1e1.jpg";

function nextImage(){
    var img = document.getElementById("displayedImage");
    for(var i = 0; i < imgArray.length;i++){
        if(imgArray[i].src == img.src){
            if(i === imgArray.length){
                document.getElementById("displayedImage").src = imgArray[0].src;
                break;
            }
            document.getElementById("displayedImage").src = imgArray[i+1].src;
            break;
        }
    }
}
function previousImage(){
    var img = document.getElementById("displayedImage");
    for(var i = imgArray.length-1; i >=0 ;i--){
        if(imgArray[i].src == img.src){
            if(i === imgArray.length){
                document.getElementById("displayedImage").src = imgArray[4].src;
                break;
            }
            document.getElementById("displayedImage").src = imgArray[i-1].src;
            break;
        }
    }
}