let p = document.getElementsByTagName('p')
let h1 = document.getElementById('title')
let btn1 = document.getElementById('btn-1');
let btn2 = document.getElementById('btn-2');
btn1.value = "Có";
btn2.value = "Không";
btn1.addEventListener("click", button1);
btn2.addEventListener("click", button2);
function button1() {
    if (btn1.value == "Không") {
        btn1.value = "Có"
        btn2.value = "Không"
    }
    else {
        for (let x of p) {
            x.className = 'animate__animated animate__fadeInUp'
        }
        h1.className = 'animate__animated animate__slideInDown'
        h1.innerHTML = '❤️Meeeee tooooo❤️'
        btn1.className = 'no-opacity'
        btn2.className = 'no-opacity'
    }
}
function button2() {
    if (btn2.value == "Không") {
        btn1.value = "Không"
        btn2.value = "Có"
    }
    else {
        for (let x of p) {
            x.className = 'animate__animated animate__fadeInUp'
        }
        h1.className = 'animate__animated animate__slideInDown'
        h1.innerHTML = '❤️Meeeee tooooo❤️'
        btn1.className = 'no-opacity'
        btn2.className = 'no-opacity'
    }
}

