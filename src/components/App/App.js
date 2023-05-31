import { useEffect, useState } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { articlesSample } from '../../sampleData';
import ArticlePreview from '../ArticlePreview/ArticlePreview';

const App = () => {
  const [articles, setArticles] = useState([]);
  const articlesJSX = articles.map(article => <ArticlePreview key={article.title} article={article} />)

  useEffect(() => {
    // fetch('https://newsapi.org/v2/everything?domains=theonion.com&language=en&from=2023-05-15&apiKey=ff8bdb29da8e4d0cb221453f878971aa')
    //   .then(response => response.json())
    //   .then(data => console.log(data))
      // required parameters : q, qInTitle, sources, or domains
      // earliest date we can query: 2023-05-01

    setArticles(articlesSample.articles);
  })

  return (
      <main>
        <h1>The Daily Punctilio - All The News in Fits of Print</h1>
        <Switch>
          <Route exact path='/'>
            <div className='articles'>{articlesJSX}</div>
          </Route>
          <Route exact path='/article'>
          </Route>
        </Switch>
      </main>
  );
}

export default App;