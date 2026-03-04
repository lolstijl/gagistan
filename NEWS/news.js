const articles = document.querySelectorAll('.article');

articles.forEach(article => {
  let menu_open = false;
  const text = article.querySelector('.article_text')

  article.addEventListener('click', function() {
    let windowWith = window.innerWidth;
    if (windowWith < 1024) {
      //gsm formaat
      if (menu_open == false) { //expand menu
        text.style.paddingBottom = "20px"
        article.style.transition = "1s ease grid-template-rows"
        article.style.gridTemplateRows = `150px 1fr`
        article.style.animationName = "bounceOpen"
        menu_open = true
      } else { //collapse menu
        let textHeight = text.offsetHeight;
        
        if (textHeight >= 800) { //groot artikel
          console.log("groot artikel collpased")
          text.style.paddingBottom = ""
          article.style.transition = ""
          article.style.gridTemplateRows = ""
          article.style.animationName = "bounceCloseHeavy"
          menu_open = false
        }
        else if (textHeight >= 400) {
          console.log("medium artikel collpased")
          text.style.paddingBottom = ""
          article.style.transition = ""
          article.style.gridTemplateRows = ""
          article.style.animationName = "bounceCloseMedium"
          menu_open = false
        }
        else { //klein artikel
          console.log("klein artikel collpased")
          text.style.paddingBottom = ""
          article.style.transition = ""
          article.style.gridTemplateRows = ""
          article.style.animationName = "bounceCloseLight"
          menu_open = false
        }
        
      }
    }
    else {
      //desktop
      if (menu_open == false) { //expand menu
        text.style.paddingBottom = "20px"
        article.style.gridTemplateRows = `200px 1fr`
        article.style.animationDuration = "1.8s"
        article.style.animationName = "bounceOpen"
        menu_open = true
      } else { //collapse menu
        text.style.paddingBottom = ""
        article.style.gridTemplateRows = ""
        article.style.animationDuration = ""
        article.style.animationName = "bounceClose"
        menu_open = false
      }
    }

    
  });
});

console.log(articles)
burber.addEventListener('click',  menu)