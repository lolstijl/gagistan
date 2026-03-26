// IMPORTS
import homeHTML from './home/home.html?raw';
import newsHTML from './news/news.html?raw';
import filesHTML from './files/files.html?raw'

import { doNothing } from './assets/empty';
import { startNews } from './news/news';
import { startFiles } from './files/files';

import emptyScriptUrl from './assets/empty.ts?url';
import newsScriptUrl from './news/news.ts?url';
import filesScriptUrl from './files/files.ts?url';

import homeCSSUrl from './home/home.css?url';
import newsCSSUrl from './news/news.css?url'
import filesCSSUrl from './files/files.css?url'

export let currentPage : string = "none";

//DO NOT TOUCH
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const HTMLChunk = document.getElementById("HTMLChunk");

//MAIN

loadPage("home")

//page loader function

export async function loadPage(curPage : string) {
    const currentCSS = document.getElementById('pageCSS') as HTMLLinkElement;
    console.log(`currentCSS = ${currentCSS}`)
    const currentScript = document.getElementById('pageScript') as HTMLScriptElement;

    let cssUrl : string = "src/home/home.css"
    let scriptUrl : string = emptyScriptUrl;
    let htmlUrl : string = homeHTML;
    let startFunction = () => {
        return doNothing();
    };

    switch (curPage) {
        case "home":
                cssUrl = homeCSSUrl;
                scriptUrl = emptyScriptUrl;
                htmlUrl = homeHTML;
                startFunction = () => {
                    return doNothing();
                };
            break;
        
        case "news":
            cssUrl = newsCSSUrl;
            scriptUrl = newsScriptUrl;
            htmlUrl = newsHTML;
            startFunction = () => {
                return startNews();
            };
            break;
        case "files":
            cssUrl = filesCSSUrl;
            scriptUrl = filesScriptUrl;
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