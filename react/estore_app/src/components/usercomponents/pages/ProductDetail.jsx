import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const[product,SetProduct]=useState({})
    const params = useParams()
    const id = params.productId 

    useEffect(() =>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res=>SetProduct(res.data))
        .catch(err=>console.log(err))
    },[id])


    const addtocart =()=>{
        const productItem={
            product: product.id,
            title: product.title,
            price: price.price,
            description: product.description,
            category: product.category,
            image: product.image,
            quantity:1

        }

        // const cartItem = JSON.parse(localStorage.getItem('cartData')) || []

        const existingItem = cartItem.find(item=>item.id == product.id)
        
        if (existingItem) {
            toast.error(`${product.title} is already in the cart`); 
        }
        else{
            cartItem.push(productItem)
            localStorage.setItem(`${product.title} is added to the cart`)
        }

        // localStorage.setItem('cartData', JSON.stringify(productItem))
        // toast.success("You have Sucessfully added products to Cart")        
    }
  return (
    <>
    <ToastContainer theme='colored' position='top center'/>
    
    <div className='product-section'>
      <h1 className="text-center text-3x1 my-5 font-bold">Product Detail</h1>

      <div className="flex flex-wrap justify-between my-5 mx-20">

        <div className='card.img'>
            <div className="card-content">
                <img src="" alt="" />
                
            </div>
        </div>
     
      </div>
      
    </div>
    </>
  )
}

export default ProductDetail