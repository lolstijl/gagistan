const nav2 = document.querySelector("nav")
const ul2 = nav2.querySelector("ul")

const linkHome = '<li><a href="../index.html">Home</a></li>'
const linkNews = '<li><a href="../NEWS/news.html">Gagistan NEWS</a></li>'
const linkFiles = '<li><a href="../gagafiles/index.html">De gaga files</a></li>'
const linkQuotes = '<li><a href="../under_construction/index.html">Quotes</a></li>'

// IMPORT DE LINKS
const linkFiles = '<li><a href="../locked_page/index.html">De gaga files</a></li>'
const linkQuotes = '<li><a href="../under_construction/index.html">Quotes</a></li>'

ul2.insertAdjacentHTML('afterbegin', linkQuotes)
ul2.insertAdjacentHTML('afterbegin', linkFiles)
ul2.insertAdjacentHTML('afterbegin', linkNews)
ul2.insertAdjacentHTML('afterbegin', linkHome)
