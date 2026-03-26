//hamburger gedoe

const nav = document.querySelector("nav");
const burber = document.querySelector(".menu");
const lijn1 = document.querySelector(".lijn1")
const lijn2 = document.querySelector(".lijn2")
const lijn3 = document.querySelector(".lijn3")
const ul = nav.querySelector("ul")
const a = ul.querySelector('li a')

let menu_open = false;
function menu() {
    if (menu_open == false) {
        nav.style.gridTemplateRows = "1fr"

        ul.style.paddingTop = "20px"
        ul.style.paddingBottom = "10px"
        ul.style.opacity = "100%"
        ul.style.translate = "0px 0px"

        lijn1.style.animation = "collapse1 1s forwards"
        lijn2.style.animation = "collapse2 1s forwards"
        lijn3.style.animation = "collapse3 1s forwards"

        menu_open = true
    } else {
        nav.style.gridTemplateRows = ""

        ul.style.paddingTop = "0px"
        ul.style.paddingBottom = "0px"
        ul.style.opacity = ""
        ul.style.translate = ""

        lijn1.style.animation = "expand1 1s forwards"
        lijn2.style.animation = "expand2 1s forwards"
        lijn3.style.animation = "expand3 1s forwards"

        menu_open = false
    }
};

console.log(burber)
burber.addEventListener('click',  menu)