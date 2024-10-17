import React, { useEffect } from 'react'
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProductData } from '../Slice/productSlice'
import { addToWishList } from '../Slice/wishListSlice'
import { addToCart } from '../Slice/cartSlice'
import Header from '../Components/Header'

function Home() {

  const dispatch =useDispatch()
  const {loading,products,error}=useSelector((state)=>state.productReducer)
  const wishlist = useSelector((state) => state.wishListReducer.wishlist);

  const cart=useSelector((state)=>state.cartReducer)

  //console.log(products);
  // console.log(loading);
  // console.log(error);
  


  useEffect(()=>{
    dispatch(fetchProductData())
  },[])

  

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
    <>
    <Header insideHome={true}/>
    <div style={{marginTop:"70px"}} className='d-flex justify-content-center'>
      { 
      loading? <div className='mt-5 text-center fw-bolder'>
            <Spinner animation="border" variant="info" /> loading...
      </div>:
      <Row className='mt-5 container'>
       {
         products?.length>0?products.map((product,index)=>(
          <Col className='mt-3 ' sm={12} md={6} lg={4} xl={3} key={index} >
        <Card style={{ width: '18rem' }} >
 <Link to={`/view/${product?.id}`}><Card.Img variant="top" style={{width:"100%"}} src={product?.thumbnail} />
 </Link>
       <Card.Body className='bg-success'>
         <Card.Title style={{color:"black"}} className='text-center fw-bolder'>{product?.title.slice(0,20)}</Card.Title>
         <Card.Text>
         {product?.description.slice(0,20)}
         </Card.Text>
         <div className="d-flex justify-content-between">
             <Button className='btn btn-light' onClick={()=>handleWishList(product)} ><i className='fa-solid fa-heart text-danger'></i></Button>
             <Button className='btn btn-light' onClick={()=>handleCart(product)} ><i className='fa-solid fa-cart-shopping text-warning'></i></Button>
         </div>
         
       </Card.Body>
     </Card>
        </Col>
         )): <div className='text-danger text-center mt-5'>
         <p className='text-danger'> Nothing to display</p> </div>
      
        }
    
    
    </Row>
    }
    </div>
    </>
  )
}

export default Home