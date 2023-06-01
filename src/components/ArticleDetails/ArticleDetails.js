import './ArticleDetails.css'

const ArticleDetails = ({selectedArticle}) => {
  return (
    <div className='article-details'>
      {selectedArticle.urlToImage ? <img className='full-img' src={selectedArticle.urlToImage} alt={selectedArticle.title} /> : <img className='full-img' src={require('../../dailypunctilio.png')} alt={selectedArticle.title} />}
      <div className='article'>
        <p className='title'>{selectedArticle.title}</p>
        <p className='date'>{selectedArticle.publishedAt.substring(0, 10)}</p>
        <article>
          {selectedArticle.content ? selectedArticle.content.split('[')[0] : null} <a className='source' href={`${selectedArticle.url}`}>Read The Full Article {selectedArticle.source.name ? `On ${selectedArticle.source.name}` : ''}</a>
        </article>
      </div>
    </div>
  )
}

export default ArticleDetails;