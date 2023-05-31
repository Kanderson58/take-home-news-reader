import { useState } from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import { articlesSample } from '../../sampleData';

const App = () => {
  const [articles, setArticles] = useState([]);

  const handleChange = () => {
    // fetch('https://newsapi.org/v2/everything?domains=bbc.co.uk&language=en&from=2023-05-15&apiKey=ff8bdb29da8e4d0cb221453f878971aa')
    //   .then(response => response.json())
    //   .then(data => console.log(data))
      // required parameters : q, qInTitle, sources, or domains
      // earliest date we can query: 2023-05-01

    setArticles(articlesSample);
  }

  return (
      <main>
        {console.log(articles)}
        <Switch>
          <Route exact path='/'>
            <Link to='/article'><button>To Details</button></Link>
          </Route>
          <Route exact path='/article'>
            <Link to='/'><button onClick={handleChange}>To Home</button></Link>
          </Route>
        </Switch>
      </main>
  );
}

export default App;