   
   var checker1 = document.getElementsByClassName("1")
   var checker2= document.getElementsByClassName("2")
   var checker3 = document.getElementsByClassName("3")
   var checker4 = document.getElementsByClassName("4")
   var checker5 = document.getElementsByClassName("5")
   
    var myInput = document.getElementById('myInput');

    function pushBtn(obj) {
        var pushed = obj.innerHTML;
         
        if (pushed == '=') {
            // Calculate
            myInput.innerHTML = eval(myInput.innerHTML);
             
        } else if (pushed == 'AC') {
            myInput.innerHTML = '0';
             
        } else {
            if (myInput.innerHTML == '0') {
                myInput.innerHTML = pushed;
                 
            } else {
                myInput.innerHTML += pushed;   
            }
        }
    }
