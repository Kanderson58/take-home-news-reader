import './ArticlePreview.css'
import { Link } from 'react-router-dom';

const ArticlePreview = ({article, setSelectedArticle}) => { 
  return (
    <div className='article-preview'>
      <h2>{article.title}</h2>
      {article.description && <p>{article.description}</p>}
      <div className='center'>
        {article.urlToImage ? <img className='article-img' src={article.urlToImage} /> : <img className='article-img' src={require('../../dailypunctilio.png')} />}
      </div>
      <div className='published'>
        <p>Published: <span className='date'>{article.publishedAt.substring(0, 10)}</span></p>
        <Link to='/article'><button className='read-more' onClick={() => setSelectedArticle(article)}>Read More</button></Link>
      </div>
    </div>
  )
}

export default ArticlePreview;