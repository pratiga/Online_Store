import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import classes from './Item.module.css';
import { Link } from "react-router-dom";

const Item = () => {


  const postQuery = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      const data = await response.data;
      return data;
    }
  })

  if (postQuery.isLoading) return (<h1>Loading....</h1>)
  if (postQuery.isError) return (<h1>Error loading data!!!</h1>)

  return (
    <div class="container pt-2">
      <div class="row">
        {postQuery.data.map((item) => (
          <div className={classes.containers} key={item.id}>
            <Link to={`/itemDetails/${item.id}`}>
              <div className={classes.image_event}>
                <img src={item.image} alt="images" />
              </div>
            </Link>
            <h2 class="p-3" className={classes.Ititle}>{item.title}</h2>
            <div class="row p-2 ">
              <div class="col-8 "><label class="mb-2 text-success">Category:</label><br />
              
                <span className={classes.Icategory}>{item.category}</span></div>
              <div class="col-4"><label class="mb-2 text-danger">Price:</label><span className={classes.Iprice}>{item.price}</span></div>
            </div>

            <p className={classes.info}>click on
            <Link to={`/itemDetails/${item.id}`}>
              <span className={classes.showbtn}>Show Detail</span>
              </Link>
              to show more information</p>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Item


