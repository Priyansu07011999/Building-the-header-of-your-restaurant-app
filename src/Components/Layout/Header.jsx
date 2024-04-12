import React from 'react';
import veg from '../../assets/meals.jpg';
import classes from './Header.module.css'; // Importing CSS module
import HeaderCardButton from './HeaderCardButton';

function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1 className='text-3xl'>ReactMeals</h1>
        <HeaderCardButton/>
      </header>
      <div className={classes['main-img']}>
        <img className='w-full' src={veg} alt="Image"/>
      </div>
    </>
  );
}

export default Header;
