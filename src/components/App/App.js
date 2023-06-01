import { useEffect, useState } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
// import { articlesSample } from '../../sampleData';
import ArticlePreview from '../ArticlePreview/ArticlePreview';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import Header from '../Header/Header';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState({});
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [badSearch, setBadSearch] = useState(false);
  
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?domains=theonion.com&language=en&from=2023-05-15&apiKey=ff8bdb29da8e4d0cb221453f878971aa')
      .then(response => response.json())
      .then(data => {
        setBadSearch(false);
        setArticles(data.articles)
       })

    // setArticles(articlesSample.articles);
    // setBadSearch(false);
  }, []);

  const articlesJSX = articles.map(article => <ArticlePreview key={article.title} article={article} setSelectedArticle={setSelectedArticle}/>)
  const filteredArticlesJSX = filteredArticles.map(article => <ArticlePreview key={article.title} article={article} setSelectedArticle={setSelectedArticle}/>)

  return (
      <main>
        <Header articles={articles} setFilteredArticles={setFilteredArticles} setBadSearch={setBadSearch} />
        <Switch>
          <Route exact path='/'>
            {filteredArticles === [] && !badSearch && <div className='articles'>{articlesJSX}</div>}
            {filteredArticles !== [] && !badSearch && <div className='articles'>{filteredArticlesJSX}</div>}
            {badSearch && <p>No results for that search term.</p>}
          </Route>
          <Route exact path='/article'>
            <ArticleDetails selectedArticle={selectedArticle} />
          </Route>
        </Switch>
      </main>
  );
}

export default App;