let time = 0;
function move() {  
  var startingMinutes = parseInt(document.getElementById("time").value);
  time = startingMinutes * 60;
  if (time > 0) document.getElementById("myButton").disabled = true;
  var elem = document.getElementById("myBar");


  var setTime = parseInt(document.getElementById("time").value);
  var timeVar = 620 * setTime;

  if (setTime > 0) {
    var up = setInterval(updateCountdown, 1000);

    i = 1;
    var width = 1;
    var id = setInterval(frame, timeVar);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        clearInterval(up);
        i = 0;
        document.getElementById("myButton").disabled = false;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}

const countdownEl = document.getElementById("clock");

/* function for numeric counter */
function updateCountdown() {
  console.log(time);

  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  countdownEl.innerHTML = `${minutes}:${seconds}`;

  if (minutes == 0 && seconds == 0) {
    return;
  }

  time--;
}