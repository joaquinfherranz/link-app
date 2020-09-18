import getTimeAgo from './timeago.js'

const renderArticle = ({ metadata: { url, image, title, description, author, date, publisher } }) => {
  const mseconds = date ? (new Date(date)).getTime() : null
  
  const imageDOM = image ? `<a href="${url}"><img src="${image}"></a>` : ''
  const descriptionDOM = description ? `<div class="description"><p>${description}</p></div>`: ''
  const authorDOM = author ? `<span class="metadata author">✍️ ${author}</span>`: ''
  const dateDOM = date ? `<span class="metadata timeago">🕐 ${getTimeAgo(mseconds)}</span>`: ''
  const publisherDOM = publisher ? `<div class="footer"><span class="metadata publisher">${publisher}</span></div>`: ''
  const markup = `
    ${imageDOM}
    <div>
      <div>
        <header>
          <a href="${url}">
            <h2>${title}</h2>
          </a>
        </header>
      </div>
      ${descriptionDOM}
      <div class="footer">
        ${authorDOM}${dateDOM}             
      </div>  
      ${publisherDOM}
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
