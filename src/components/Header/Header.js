import './Header.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({articles, setFilteredArticles, setBadSearch}) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    if(!search) {
      setFilteredArticles([]);
    }

    const filteredArticles = articles.filter(article => {
      if(article.title.toLowerCase().includes(search.toLowerCase())) {
        return article
      }
    })

    if(filteredArticles.length !== 0) {
      setBadSearch(false);
      setFilteredArticles(filteredArticles);
    } else {
      setBadSearch(true);
    }
  }, [search]);


  const day = new Date().toString().toUpperCase().split(' ');

  return (
    <header>
      <div className='full-header'>
        <h1 className='motto'>"ALL THE NEWS IN FITS OF PRINT!"</h1>
        <Link to='/'><img className='header' src={require('../../header.png')}/></Link>
        <form>
          <label htmlFor='search'>Search</label>
          <input type='text' placeholder='Search...' id='search' onChange={(e) => setSearch(e.target.value)} />
        </form>
      </div>
      <div className='subheader'>
        <span>NEWS FOR TODAY</span>
        <span>★ ★ ★</span>
        <span>THE CITY, {day[0] + ', ' + day[1] + ' ' + day[2] + ' ' + day[3]}</span>
        <span>★ ★ ★</span>
        <span>PRICE: ONE CENT</span>
      </div>
    </header>
  )
}

export default Header;