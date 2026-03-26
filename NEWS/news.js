const articles = document.querySelectorAll('.article');

let animationRunning = false;

articles.forEach(article => {
  let menu_open = false;
  const text = article.querySelector('.article_text')

  article.addEventListener('click', function() {
    let windowWith = window.innerWidth;

    //checkt of animatie nog bezig is
    if (animationRunning) {
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
        console.log(animationRunning)

        text.style.paddingBottom = "20px"

        article.style.gridTemplateRows = `200px 1fr`
        article.style.animationDuration = "1s"
        article.style.animationName = "JellyOpen"

        menu_open = true
      } else { //collapse menu
        animationRunning = true
        console.log(`animationRunning=${animationRunning}`)
        console.log(animationRunning)

        text.style.paddingBottom = ""

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

console.log(articles)

