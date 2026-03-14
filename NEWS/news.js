const articles = document.querySelectorAll('.article');

let animationRunning = false;

articles.forEach(article => {
  let menu_open = false;
  const text = article.querySelector('.article_text')

  article.addEventListener('click', function() {
    
    article.remove();

  });
});

console.log(articles)

