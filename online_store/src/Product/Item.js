import {useState}from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import classes from './Item.module.css';
import { Link } from "react-router-dom";

const Item = () => {


  const [filteredList, setFilteredList] = new useState(postQuery.data);
 
  const filterBySearch = (event) => {
    // Access input value
    const query = event.target.value;
    // Create copy of item list
    var updatedList = [...itemList];
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => 
      return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    // Trigger render with updated values
    setFilteredList(updatedList);
  };
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
    <div class="container pt-5 mt-5">
      <div className="search-header">
      <div className="search-text">Search:</div>
      <input id="search-box" onChange={filterBySearch} />
    </div>
    <div id="item-list">
      <ol>
        {filteredList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>

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

              <span className={classes.showbtn}>Show Detail</span>
              to show more information</p>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Item


