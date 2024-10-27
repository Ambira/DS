import React,{useState, useEffect} from 'react';
import Card from './usercomponents/Card';
import axios from 'axios';

const Productpage = () => {

  const[product,setProduct]=useState([])

  useEffect(()=>{

    axios.get('https://fakestoreapi.com/products')
    .then(res =>setProduct(res.data))
    .catch(err => console.log(err))

  })

  console.log(product)
  return (
    <>
    <div className='product-section'>
      <h1 className="text-center text-3x1 my-5 font-bold">All products</h1>

      <div className="flex flex-wrap justify-evenly my-5 mx-20">
      {product.map(item => <Card data={item}/>
      

    )}
      </div>
      
    </div>
    </>
  );
};

export default Productpage;
