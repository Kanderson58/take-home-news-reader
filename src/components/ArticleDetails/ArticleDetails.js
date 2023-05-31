import './ArticleDetails.css'
import { Link } from 'react-router-dom';

const ArticleDetails = ({selectedArticle}) => {
  return (
    <div className='article-details'>
      {selectedArticle.urlToImage ? <img className='full-img' src={selectedArticle.urlToImage} alt={selectedArticle.title} /> : <img className='full-img' src={require('../../dailypunctilio.png')} alt={selectedArticle.title} />}
      <div className='article'>
        <p className='title'>{selectedArticle.title}</p>
        <p className='date'>{selectedArticle.publishedAt.substring(0, 10)} <a className='source' href={`${selectedArticle.url}`}>Source</a></p>
        <article>
          {selectedArticle.content}
        </article>
      </div>
    </div>
  )
}

export default ArticleDetails;