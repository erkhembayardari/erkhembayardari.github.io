var myImages = ["img/image1.jpg","img/image2.jpg","img/image3.jpg","img/image4.jpg","img/image5.jpg"]
var imgElement = document.querySelector("img")    
var i = 0
var isPaused = false
function togglepause() {
    if (!isPaused) {
        clearInterval(intervalId)
    }else{  
        intervalId = setInterval(myfunction,1000)
    }   
    isPaused = !isPaused
}
function myfunction() {
    imgElement.src = myImages[i]
    i++
    if( i == myImages.length){
        i = 0
    }
}
var intervalId = setInterval (myfunction,1000)