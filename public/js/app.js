
const renderArticle = ({ metadata: { url, image, title, description, author, date, publisher } }) => {
  //const timeago = '18 hours ago'
  const markup = `
    <a href="${url}">
      <img src="${image}">
    </a>
    <div>
      <div>
        <header>
          <a href="${url}">
            <h2>${title}</h2>
          </a>
        </header>
      </div>
      <div class="description">
        <p>${description}</p>
      </div>
      <div class="footer">
        <span class="metadata author">✍️ ${author}</span>
        <span class="metadata timeago">🕐 ${date}</span>              
      </div>  
      <div class="footer">
        <span class="metadata publisher">${publisher}</span>    
      </div>   
    </div>
    `
  const sectionDOM = document.querySelector('main > section')
  const articleDOM = document.createElement('article')
  articleDOM.innerHTML = markup
  sectionDOM.appendChild(articleDOM)
}

const renderNews = async () => {
  const response = await fetch('/api/v1/news')
  const news = await response.json()
  news.forEach(renderArticle)
}

window.onload = renderNews
