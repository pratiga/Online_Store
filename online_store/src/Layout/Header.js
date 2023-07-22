import React, { Fragment, useState } from 'react'
// import mealsImage from '../assets/meals.jpg';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';
import { SearchBar } from '../search/SearchBar';
import { SearchResultsList } from '../search/SearchResultList';


const Header = (props) => {
  const [results, setResults] = useState([]);
  return (
    <Fragment>
      <header className={classes.header}>
        <div class='row'>

          <span class="col-4 p-4">
            <Link to="/" className={classes.menu}>Home</Link>
          </span>
          <span class="col-8 p-4">
            <Link to="/Item" className={classes.menu}>Product List</Link>
          </span>
        </div>
        <div class="p-4">
          <SearchBar setResults={setResults} />
          {results && results.length > 0 && <SearchResultsList results={results} />}
        </div>
      </header>

    </Fragment>
  )
}

export default Header
