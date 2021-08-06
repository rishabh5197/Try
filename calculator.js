var screen = document.querySelector("#screen");
var btn = document.querySelectorAll(".btn");

/* ------------------------ Footer Date ----------------------- */
var todaydate = new Date();
if(todaydate.getDate() < 10) {
    if(todaydate.getMonth()+1 < 10) {
        document.getElementById("tdate").innerHTML = "0"+ todaydate.getDate() +"/0"+ (todaydate.getMonth()+1) +"/"+ todaydate.getFullYear()
    } else {
        document.getElementById("tdate").innerHTML = "0"+ todaydate.getDate() +"/"+ (todaydate.getMonth()+1) +"/"+ todaydate.getFullYear()
    }
} else {
    if(todaydate.getMonth()+1 < 10) {
        document.getElementById("tdate").innerHTML = todaydate.getDate() +"/0"+ (todaydate.getMonth()+1) +"/"+ todaydate.getFullYear()
    } else {
        document.getElementById("tdate").innerHTML = todaydate.getDate() +"/"+ (todaydate.getMonth()+1) +"/"+ todaydate.getFullYear()
    }
}
/* ------------------------ Footer Date ----------------------- */


for (item of btn) {
    item.addEventListener("click", (e) => {
        btntext = e.target.innerHTML;

        if (btntext == 'x') {
            btntext = '*';
        }

        if (btntext == '÷') {
            btntext = '/';
        }
        screen.value += btntext;
    });
}

function sin(){
    screen.value = Math.sin(screen.value);
}

function cos(){
    screen.value = Math.cos(screen.value);
}

function tan(){
    screen.value = Math.tan(screen.value);
}

function pow(){
    screen.value = Math.pow(screen.value,2);
}

function expo(){
    screen.value = Math.exp(screen.value);
}

// square root
function sqrt(){
    screen.value = Math.sqrt(screen.value,2);
}

function log(){
    screen.value = Math.log(screen.value);
}

function pi(){
    screen.value = 3.14159265359;
}

function e(){
    screen.value = 2.71828182846;
}

// factorial
function fact(){
    var i, num, f;
    f = 1
    num = screen.value;
    for(i=1; i<=num; i++) {
        f =f*i;
    }
    i = i-1;
    screen.value = f;
}

// backspace key
function backspc() {
    screen.value = screen.value.substr(0,screen.value.length-1);
}

// clear all
function clr() {
    screen.value = "";
}