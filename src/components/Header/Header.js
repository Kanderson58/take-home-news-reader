import './Header.css';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({articles, setFilteredArticles, setBadSearch}) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    if(!search) {
      setFilteredArticles([]);
    }

    // eslint-disable-next-line
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
  }, [search, articles, setBadSearch, setFilteredArticles]);


  const day = new Date().toString().toUpperCase().split(' ');

  return (
    <header>
      <div className='full-header'>
        <h1 className='motto'>"ALL THE NEWS IN FITS OF PRINT!"</h1>
        <Link to='/'><img className='header' alt='The Daily Punctilio' src={require('../../header.png')}/></Link>
        {useLocation().pathname !== '/article' && <form>
          <label htmlFor='search'>Search</label>
          <input type='text' placeholder='Search...' id='search' onChange={(e) => setSearch(e.target.value)} />
        </form>}
        {useLocation().pathname !=='/' && <img alt='count olaf' src={require('../../countolaf.png')} className='motto olaf' />}
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