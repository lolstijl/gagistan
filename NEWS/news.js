const articles = document.querySelectorAll('.article');

articles.forEach(article => {
    let menu_open = false;
  article.addEventListener('click', function() {
    if (menu_open == false) {
        article.style.maxHeight = "2000px"
        menu_open = true
    } else {
        article.style.maxHeight = ""
        menu_open = false
    }
  });
});

console.log(articles)
burber.addEventListener('click',  menu)