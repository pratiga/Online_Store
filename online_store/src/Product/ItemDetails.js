import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// import classes from './Item.module.css';

const ItemDetails = () => {


    let content = null;
    const { id } = useParams();
    const url = `https://fakestoreapi.com/products/${id}`;
    const [item, setitem] = useState(null);
  
    useEffect(() => {
      axios.get(url).then((response) => {
        console.log(response.data);
        setitem(response.data);
      });
    }, [url]);
  
    if (item) {
      content = (
        <div className="item">
          <div className="item-image">
            <img src={item.image} alt="images" />
          </div>
          
          <div className="row-1">
            <h1>{item.title}</h1>
            
          </div>
          <div className="row-2">
          <span>{item.category}</span>
          <p>{item.price}</p>
          </div>
          <p>{item.description}</p>
        </div>
      );
    }
  
    return <div>{content}</div>;



//     const { id } = useParams()
//     const postQuery = useQuery({
//         queryKey: ['posts'],
//         queryFn: async () => {
//           const response = await axios.get('https://fakestoreapi.com/products/${id}');
//           const data = await response.data;
//           return data;
//         }
//       })
//       if( postQuery.isLoading ) return ( <h1>Loading....</h1>)
//       if( postQuery.isError ) return (<h1>Error loading data!!!</h1>)
//   return (
//     <div class="row">
//     { postQuery.data.map( (item) => ( 
//         //  id:1,
//         //  title:'...',
//         //  price:'...',
//         //  category:'...',
//         //  description:'...',
//         //  image:
//     <>
      
//         <div className={classes.containers} key={item.id}>
//         {/* <Link to={`/${item.id}`}>   */}
//             <div className={classes.image_event}>
//               <img src={item.image} alt="images" />
//             </div>
//             {/* </Link> */}
//             <h2 class="p-3" className={classes.Ititle}>{item.title}</h2>
//             <div class="row p-2 ">
//             <div class="col-8 "><label class="mb-2 text-success">Category:</label><br/>
//               <span className={classes.Icategory}>{item.category}</span></div>
//             <div class="col-4"><label class="mb-2 text-danger">Price:</label><span className={classes.Iprice}>{item.price}</span></div>
//             </div>
           
//             <p className={classes.info}>click on
           
//             <span className={classes.showbtn}>Show Detail</span> 
//             to show more information</p>
          
//           </div>
//           {/* </div> */}
//         </>
    
    
    
//     )) }
//   </div>
//   )
}

export default ItemDetails
