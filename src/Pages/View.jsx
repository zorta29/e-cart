import React, { useEffect, useState } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToWishList } from '../Slice/wishListSlice'
import { addToCart } from '../Slice/cartSlice'

function View() {

  const{loading}=useSelector((state)=>state.productReducer)
  const[product,setProduct]=useState({})
  const {wishlist}=useSelector((state)=>state.wishListReducer)
  const cart=useSelector((state)=>state.cartReducer)

  const dispatch = useDispatch();
  const{id}=useParams();
  // console.log(id);
  useEffect(()=>{
    const products= JSON.parse(localStorage.getItem("products"))
    setProduct(products?.find(product=>product?.id==id))
  },[])
  
  // console.log(product);
  
  const handleWishList=(product)=>{
    const existingProduct= wishlist.find(item=>item.id==product.id)
    if(existingProduct){
      alert("product already exist")
    } else{
      dispatch(addToWishList(product))
    }
  }

  const handleCart=(product)=>{
    const existingProduct= cart?.find(item=>item.id==product.id)
    if(existingProduct){
      dispatch(addToCart(product))
      alert("items added")
    } else{
      dispatch(addToCart(product))
      alert("item added successfully")
    }
  }
  
  return (
    <div className=' container row' style={{marginTop:"100px"}}>
   
  
  
  {  loading? <div className='mt-5 text-center fw-bolder'><Spinner animation="border" variant="info" /> loading...
</div>: <div className='container row' style={{marginTop:"100px"}}>
   <div className=' col-lg-4'>
      <img style={{width:"100%",height:"400px",objectFit: "contain"}} src={product?.thumbnail} alt="" />
    </div>
    <div className=' col-lg-2'></div>
    <div className=' col-lg-6'>
    <p>{product?.id}</p>
    <h1>{product?.title}</h1>
    <h5 className='fw-bolder'>Price: <span style={{color:"red"}}>{product?.price}</span></h5>
    <p>{product?.description}</p>
    <div className='d-flex justify-content-between mt-4'>
        <Button className='btn btn-outline-dark'  onClick={() => handleWishList(product)}><i className="fa-solid fa-heart text-danger" ></i>Wishlist </Button>
        <Button className='btn btn-outline-dark'  onClick={()=>handleCart(product)}><i className="fa-solid fa-cart-shopping text-warning" ></i> Cart</Button>
    </div>
    </div>
    </div>
}






    </div>
  )
}

export default View
