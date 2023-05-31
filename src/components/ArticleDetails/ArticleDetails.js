import './ArticleDetails.css'
import { Link } from 'react-router-dom';

const ArticleDetails = ({selectedArticle}) => {
  return (
    <div className='article-details'>
      <Link to='/'><button>To Home</button></Link>
      <p>{selectedArticle.title}</p>
      <p>{selectedArticle.publishedAt.substring(0, 10)}</p>
      {selectedArticle.urlToImage ? <img src={selectedArticle.urlToImage} /> : <img src={require('../../dailypunctilio.png')} />}
      <article>
        {selectedArticle.content}
      </article>
      <a href={`${selectedArticle.url}`}>Source</a>
      {console.log(selectedArticle)}
    </div>
  )
}

export default ArticleDetails;