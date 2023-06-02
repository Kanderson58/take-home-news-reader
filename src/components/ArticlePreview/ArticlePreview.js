import './ArticlePreview.css'
import { Link } from 'react-router-dom';

const ArticlePreview = ({article, setSelectedArticle}) => {   
  return (
    <div className='article-preview' tabIndex='0'>
      <h2>{article.title}</h2>
      {article.description && <p className='description'>{article.description}</p>}
      <div>
        <div className='center'>
          {article.urlToImage ? <img className='article-img' src={article.urlToImage} alt={article.title} /> : <img className='article-img' src={require('../../dailypunctilio.png')} alt={article.title}/>}
        </div>
        <div className='published'>
          <p>Published: <span className='date'>{article.publishedAt.substring(0, 10)}</span></p>
          <Link to='/article' tabIndex='-1'><button className='read-more' onClick={() => setSelectedArticle(article)}>Read More</button></Link>
        </div>
      </div>
    </div>
  )
}

export default ArticlePreview;