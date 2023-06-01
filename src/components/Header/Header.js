import { useState } from 'react';
import './Header.css';

const Header = ({setSearch}) => {
  const [currentSearch, setCurrentSearch] = useState('');

  return (
    <header>
      <h1 className='motto'>"ALL THE NEWS IN FITS OF PRINT!"</h1>
      <img className='header' src={require('../../header.png')}/>
      <form>
        <label htmlFor='search'>Search</label>
        <input type='text' placeholder='Search...' id='search' onChange={(e) => setSearch(e.target.value)} required/>
      </form>
    </header>
  )
}

export default Header;