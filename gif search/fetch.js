let y =  document.getElementById("display")
const getData = async () => {
    let x = document.getElementById("myInput").value
    y.innerHTML=""
    const response = await fetch("https://api.giphy.com/v1/gifs/search?api_key=FkXvzaa2zz7NKkJGrRJEhvFJcCPZehWd&q="+ x +"&limit=25&offset=0&rating=g&lang=en")
    const fetchObject = await response.json()
    for (var i = 0; i < fetchObject.data.length; i++){
    const myImg = document.createElement("img")
    myImg.style.width="400px"
    myImg.style.height="500px"
    myImg.src = fetchObject.data[i].images.downsized.url

    y.append(myImg)
    }
}
