/* eslint-disable react/style-prop-object */
import React from 'react'
import Item from '../Product/Item'
import pic from '../assets/abc3.jpg'
import classes from './Home.module.css'
const Home = () => {
  return (
    <div>
      <img className={classes.bgimage} src={pic} alt='images'/>
      <h1 class="p-2 d-flex justify-content-center">List of products</h1>
      <Item />
    </div>
  )
}

export default Home
