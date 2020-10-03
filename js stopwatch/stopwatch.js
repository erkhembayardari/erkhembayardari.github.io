 var display = document.querySelector("#display")
var m = 0
var s = 0 
var mm = 0
var displaym
var displays
var displaymm
var isdone = true
var intervalid
var lapbutton = document.querySelectorAll("button")[2]

laptool = 1
var laps = document.querySelector("#laps")
var startstopbutton = document.querySelector("button")
function startstop() {
    if(isdone) {
        intervalid = setInterval(run , 10) 
        startstopbutton.innerHTML = "stop"
        lapbutton.disabled = false
    }
    else{
        clearInterval(intervalid)
        startstopbutton.innerHTML = "start"
        lapbutton.disabled = true

    }
    isdone=!isdone
}   
function run() {
    mm++         
     if(mm==100){
         s++
         mm = 0
     }
     if(s==60){
         m++
         s=0
     }
     if(m==60){
         m = 0
     }
     if(m<10){
         displaym = "0" + m
     }else{
        displaym=m
     } if(s<10){
        displays = "0" + s
    }else{
       displays =s
    } if(mm<10){
        displaymm = "0" + mm
    }else{
       displaymm =mm
    }
    display.innerHTML = displaym +":"+ displays + ":" + displaymm
    }
    function reset() {
    display.innerHTML ="00:00:00"
        m=0
        s=0
        mm=0
        if(!isdone)
        startstop()
        laps.innerHTML = ""
        laptool= 1
        lapnum = 0
        
    }
    function lap() {
       var lapnum=document.createElement("p")
       var laptime=document.createElement("p")
       var s=document.createElement("div")
       lapnum.innerHTML = laptool
       lapnum.style.display="block"
       laptime.style.display="block"
       laptime.innerHTML = displaym +":"+ displays + ":" + displaymm
       var lapss= laptool +" "+displaym +":"+ displays + ":" + displaymm
       s.append(lapss)
        document.getElementById("laps").append(s)
       laptool++
    }