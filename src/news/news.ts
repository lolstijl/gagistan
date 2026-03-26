interface article {
    title: string,
    author: string,
    date: string,
    imageurl: string,
    body: tekstElement[]
}

interface tekstElement {
    type: string,
    text: string
}

// MAIN

export async function startNews() {
    const HTMLChunk = document.getElementById("HTMLChunk")

    const articles : article[] = await getArticles();

    const searchBar = document.getElementById("SearchBar") as HTMLInputElement

    loadArticles(articles)
    collapseCheck()

    searchBar.addEventListener("input", () => {
        let query = searchBar.value;

        let filteredArticles = articles.filter((article) => {
            const titleLower = article.title.toLowerCase();
            const authorLower = article.author.toLowerCase();

            const dateString = article.date;

            const queryLower = query.toLowerCase();
            return(titleLower.includes(queryLower) || authorLower.includes(queryLower) || dateString.includes(queryLower));
        });

        if (filteredArticles.length > 0) {
            clearArticles()
            loadArticles(filteredArticles)
            collapseCheck()
        } else {
            clearArticles()

            const articleList = document.createElement("ul");
            const noArticles = document.createElement("p");
            HTMLChunk!.appendChild(articleList);

            noArticles.classList.add("noResults")
            articleList.appendChild(noArticles)
            articleList.style.padding = "0"

            noArticles.innerText = "Geen resultaten"
        }

        // console.log("The user is typing right now:", searchBar.value);
    });
};

// FUNCTIONS

function clearArticles() {
    let HTMLChunk = document.getElementById("HTMLChunk")
    let articleList = HTMLChunk?.querySelector("ul")
    articleList!.remove()
    console.log("articles cleared");
}

async function getArticles(): Promise<article[]> {
    const url = await fetch(
        "public/articles.json"
    );
    const articles : article[] = await url.json();
    return articles;
}

export function loadArticles(articles : article[]) {
    const HTMLChunk = document.getElementById("HTMLChunk")
    const articleList = document.createElement("ul");
    articleList.classList.add("articleList");
    HTMLChunk!.appendChild(articleList);

    articles.forEach(article => {

        //creates DIV ARTICLE
        const articleDIV = document.createElement("div");
        articleList!.appendChild(articleDIV);
        articleDIV.classList.add('article')

        //creates IMG
        const img = document.createElement("img");
        articleDIV.appendChild(img)
        
        const imgUrl = "./src/assets/articleThumbnails/" + article.imageurl;
        img.src = imgUrl;

        //creates DIV ARTICLE_INFO
        const article_info = document.createElement("div")
        article_info.classList.add('article_info')
        articleDIV.appendChild(article_info)

        //creates H2 TITLE
        const title = document.createElement("h2")
        title.innerText = article.title
        article_info.appendChild(title)

        //creates H3 AUTHOR
        const author = document.createElement("h3")
        if (article.author == "") {}
        else {
            author.innerText = article.author

            switch (article.author) {
                case "UPDATE":
                    author.classList.add('UPDATE')
                    break;
                case "EVENT":
                    author.classList.add('EVENT')
                    articleDIV.classList.add('EVENT_ARTICLE')
                    break;
                case "GAGISTAN REPUBLIC":
                    author.classList.add('REPUBLIC')
                    break;
                case "PINNED":
                    author.classList.add('PINNED')
                    break;
                default:
                    break;
            }
        }
        article_info.appendChild(author)

        //creates H3 DATE
        const date = document.createElement("h3")
        article_info.appendChild(date)

        if (article.date.includes("TIMER")) {
            timer(date, article.date)
        }
        else {
            date.innerText = article.date
        }

        //creates DIV ARTICLE TEXT
        const article_text = document.createElement("div");
        article_text.classList.add("article_text");
        articleDIV.appendChild(article_text);

        //imports TEXT
        const textBody = article.body;

        textBody.forEach(textBlock => {
            if (textBlock.type == "paragraph") {
                const textElement = document.createElement("p")
                textElement.innerText = textBlock.text
                article_text.appendChild(textElement)
            }
            else if (textBlock.type == "subtitle") {
                const textElement = document.createElement("h4")
                textElement.innerText = textBlock.text
                article_text.appendChild(textElement)
            }
            else {
                const textElement = document.createElement("p")
                textElement.innerText = "error"
                article_text.appendChild(textElement)
            }
        });
        console.log("Article loaded")
    });
    console.log("all articles loaded")
}

function collapseCheck() {
    let animationRunning = false;

    let articles = document.querySelectorAll(".article")

    articles.forEach(article2 => {
    const article = article2 as HTMLDivElement;
    let menu_open = false;
    const text = article.querySelector('.article_text') as HTMLDivElement

    article.addEventListener('click', function() {
        let windowWith = window.innerWidth;

        //checkt of animatie nog bezig is
        if (animationRunning && windowWith < 1024) {
            console.log("animation interrupted")

            const currentStyle = window.getComputedStyle(article);

            const currentScale = currentStyle.scale;
            const currentTranslate = currentStyle.translate;
            const currentTransform = currentStyle.transform;
            const currentFilter = currentStyle.filter;

            article.style.filter = currentFilter;
            article.style.scale = currentScale;
            article.style.translate = currentTranslate;
            article.style.transform = currentTransform;
        }

        if (windowWith < 1024) {
            //gsm formaat
            if (menu_open == false) { //expand menu
                animationRunning = true
                console.log(`animationRunning=${animationRunning}`)
                console.log(animationRunning)
                
                text.style.paddingBottom = "20px"
                article.style.transition = ""
                article.style.gridTemplateRows = `150px 1fr`
                article.style.animationDuration = "1s"
                article.style.animationName = "JellyOpen"
                
                menu_open = true
            } else { //collapse menu
                let textHeight = text.offsetHeight;
                
                if (textHeight >= 600) { //groot artikel
                    console.log("groot artikel collpased")

                    animationRunning = true
                    console.log(animationRunning)
                    
                    text.style.paddingBottom = ""
                    article.style.transition = ""
                    article.style.gridTemplateRows = ""
                    article.style.animationDuration = ""
                    article.style.animationName = "JellyCloseHeavy"
                    menu_open = false
                }
                else if (textHeight >= 300) {
                    console.log("medium artikel collpased")

                    animationRunning = true
                    console.log(animationRunning)
                    
                    text.style.paddingBottom = ""
                    article.style.transition = ""
                    article.style.gridTemplateRows = ""
                    article.style.animationDuration = ""
                    article.style.animationName = "JellyCloseMedium"
                    menu_open = false
                }
                else { //klein artikel
                    console.log("klein artikel collpased")

                    animationRunning = true
                    console.log(animationRunning)
                    
                    text.style.paddingBottom = ""
                    article.style.transition = ""
                    article.style.gridTemplateRows = ""
                    article.style.animationDuration = ""
                    article.style.animationName = "JellyCloseLight"
                    menu_open = false
                }
            }
        }
        else {
            //desktop
            if (menu_open == false) { //expand menu
                animationRunning = true

                text.style.paddingBottom = "20px"

                article.style.gridTemplateRows = `200px 1fr`
                article.style.animationDuration = "1s"
                article.style.animationName = "JellyOpen"

                menu_open = true
            } else { //collapse menu
                animationRunning = true

                text.style.paddingBottom = ""
                article.style.transition = ""
                article.style.gridTemplateRows = ""
                article.style.animationDuration = "1s"
                article.style.animationName = "JellyClose"

                menu_open = false
            }
        }

        article.addEventListener('animationend', () => {
            animationRunning = false;
            article.style.scale = "";
            article.style.translate = "";
            article.style.transform = "";
            article.style.transition = "";
            article.style.transitionDelay = ""
            article.style.animationDuration = "";
            article.style.filter = "";
        });

    });
    });
}

function timer(h3 : HTMLHeadingElement, dateString : string) {
    // SETS TARGET TIME
    let targetTime = new Date("Jan 1, 1970 00:00:00").getTime();
    let targetTimeText = "01/01/1970, 00:00"
    switch (dateString) {
        case "TIMER1":
            targetTimeText = "28/03/2026, 23:00"
            targetTime = new Date("Mar 28, 2026 23:00:00").getTime();
            break;
        case "TIMER2":
            targetTimeText = "10/04/2026, 15:00"
            targetTime = new Date("Apr 10, 2026 15:00:00").getTime();
            break;
        default:
            break;
    }

    h3.classList.add("timer");
    h3.innerHTML = `<span class="days">00</span>:<span class="hours">00</span>:<span class="minutes">00</span>:<span class="seconds">00</span>`;

    const daysHTML : HTMLHeadingElement = h3.querySelector(".days")!;
    const hoursHTML : HTMLHeadingElement = h3.querySelector(".hours")!;
    const minutesHTML : HTMLHeadingElement = h3.querySelector(".minutes")!;
    const secondsHTML : HTMLHeadingElement = h3.querySelector(".seconds")!;

    const updateTime = () => {
        const currentTime = new Date().getTime();
        const distance = targetTime - currentTime;

        const days = Math.floor(distance / (1000*60*60*24));
        const hours = Math.floor(distance % (1000*60*60*24) / (1000*60*60));
        const minutes = Math.floor(distance % (1000*60*60) / (1000*60));
        const seconds = Math.floor(distance % (1000*60) / (1000));

        daysHTML.innerText = days.toString().padStart(2, '0');
        hoursHTML.innerText = hours.toString().padStart(2, '0');
        minutesHTML.innerText = minutes.toString().padStart(2, '0');
        secondsHTML.innerText = seconds.toString().padStart(2, '0');

        if (distance < 0) {
            clearInterval(interval);
            h3.innerText = targetTimeText;
        }
    }

const interval = setInterval(updateTime, 1000);

updateTime();
}