import { loadPage } from '../pageLoader';
import headerHTML from './header.html?raw';
// import headerCSSUrl from './header.css';

const head = document.querySelector("head")
const headerStylesheet = document.createElement("link");
head?.appendChild(headerStylesheet)

const headerChunk = document.getElementById("headerChunk");
headerChunk!.innerHTML = headerHTML;
console.log("header loaded")

// VARIABLES

const nav = headerChunk!.querySelector('nav')!;
const burber : HTMLDivElement= document.querySelector(".menu")!;
const lijn1 : HTMLDivElement= document.querySelector(".lijn1")!;
const lijn2 : HTMLDivElement= document.querySelector(".lijn2")!;
const lijn3 : HTMLDivElement = document.querySelector(".lijn3")!;
const ul : HTMLUListElement = document.querySelector("header nav ul")!;

const aHome : HTMLElement = document.getElementById("home")!;
const aNews : HTMLElement = document.getElementById("news")!;
const aFiles : HTMLElement = document.getElementById("files")!;

console.log(aHome)

let menu_open = false;

// EVENT LISTENERS

burber.addEventListener('click',  menu)

aHome.addEventListener("click", () => {
    loadPage("home")
    menu();
});
aNews.addEventListener("click", () => {
    loadPage("news")
    menu();
});
aFiles.addEventListener("click", () => {
    loadPage("files")
    menu();
});

// FUNCTIONS

function menu() {
    if (menu_open == false) {
        nav!.style.gridTemplateRows = "1fr"

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