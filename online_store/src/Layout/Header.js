import React,{ Fragment } from 'react'
import mealsImage from '../assets/meals.jpg';
import classes from './Header.module.css';
// import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
    <header className={classes.header}>
    {/* <HeaderCartButton onClick = {props.onShowCard } /> */}
    </header>
    {/* <div className={classes['main-image']}>
      <img src={mealsImage} alt='food order' />
    </div> */}
  </Fragment>
  )
}

export default Header
