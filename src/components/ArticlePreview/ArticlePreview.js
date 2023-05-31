import './ArticlePreview.css'

const ArticlePreview = ({article}) => {
  return (
    <div className='article-preview'>
      <p>{article.author}</p>
    </div>
  )
}

export default ArticlePreview;