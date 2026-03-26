// IMPORTS
import homeHTML from './home/home.html?raw';
import newsHTML from './news/news.html?raw';
import filesHTML from './files/files.html?raw'

import { doNothing } from './assets/empty';
import { startNews } from './news/news';
import { startFiles } from './files/files';

export let currentPage : string = "none";

//DO NOT TOUCH
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const body = document.querySelector("body");
const HTMLChunk = document.getElementById("HTMLChunk");
const headerScript = document.getElementById('headerScript') as HTMLScriptElement;
headerScript.src = "/src/header/header.js";

let transitionDuration : number = 1;

//MAIN

loadPage("home")


//page loader function

export async function loadPage(curPage : string) {
    const currentCSS = document.getElementById('pageCSS') as HTMLLinkElement;
    const currentScript = document.getElementById('pageScript') as HTMLScriptElement;

    let cssUrl : string = "src/home/home.css"
    let scriptUrl : string = "/src/assets/empty.js";
    let htmlUrl : string = homeHTML;
    let startFunction = () => {
        return doNothing();
    };

    switch (curPage) {
        case "home":
                cssUrl = "src/home/home.css"
                scriptUrl = "/src/assets/empty.js";
                htmlUrl = homeHTML;
                startFunction = () => {
                    return doNothing();
                };
            break;
        
        case "news":
                cssUrl = "src/news/news.css";
                scriptUrl = "/src/news/news.js";
                htmlUrl = newsHTML;
                startFunction = () => {
                    return startNews();
                };
            break;
        case "files":
            cssUrl = "src/files/files.css";
            scriptUrl = "/src/files/files.js";
            htmlUrl = filesHTML;
            startFunction = () => {
                return startFiles();
            };
            break;
        default:
            break;
    }
    console.log(`currentPage = ${currentPage}`)
    console.log(`curPage = ${curPage}`)
    //transitions
    if (currentPage != curPage) {
        currentPage = curPage;

        HTMLChunk!.style.translate = "0% -100%";
        HTMLChunk!.style.transition = "";

        await delay(100);

        currentCSS.href = cssUrl;
        currentScript.src = scriptUrl;
        HTMLChunk!.innerHTML = htmlUrl;
        startFunction();

        HTMLChunk!.style.translate = "0% 100%"
        HTMLChunk!.style.transition = "0s all ease"

        await delay(100);
        HTMLChunk!.style.transition = ""
        HTMLChunk!.style.translate = "0% 0%"
    }
}