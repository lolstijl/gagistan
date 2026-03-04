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
        article.style.gridTemplateRows = `150px 1fr`
        article.style.animationName = "bounceOpen"
        menu_open = true
      } else { //collapse menu
        let textHeight = text.offsetHeight;
        
        if (textHeight >= 700) { //checkt of hoogte meer dan 600px
          text.style.paddingBottom = ""
          article.style.gridTemplateRows = ""
          article.style.animationName = "bounceCloseHeavy"
          menu_open = false
        }
        else { //hoogte is kleiner dan 600
          text.style.paddingBottom = ""
          article.style.gridTemplateRows = ""
          article.style.animationName = "bounceClose"
          menu_open = false
        }
        
      }
    }
    else {
      //desktop
      if (menu_open == false) { //expand menu
        text.style.paddingBottom = "20px"
        article.style.gridTemplateRows = `200px 1fr`
        article.style.animationName = "bounceOpen"
        menu_open = true
      } else { //collapse menu
        text.style.paddingBottom = ""
        article.style.gridTemplateRows = ""
        article.style.animationName = "bounceClose"
        menu_open = false
      }
    }

    
  });
});

console.log(articles)
burber.addEventListener('click',  menu)