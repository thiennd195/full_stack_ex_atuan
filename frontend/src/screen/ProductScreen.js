import React from 'react'
import './ProductScreen.css'

import{useDispatch,useSelector} from 'react-redux'
import {useEffect,useState} from 'react'

import {addToCart} from '../redux/action/cartAction'
import {getProductDeatail} from '../redux/action/productAction'

const ProductScreen = ({match,history}) => {

  const [qty,setQty]= useState(1);
  const dispatch= useDispatch()
  const productDetail = useSelector(state=>state.product)
  const {loading,error,product} = productDetail

  useEffect(()=>{
    if(product && match.params.id !==product._id){
      dispatch(getProductDeatail(match.params.id))
    }
  },[dispatch,product,match])

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push(`/cart`);
  };

  const changeQty=(number)=>{
    setQty(number)
  }

    return (
      <div className="productscreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productscreen__left">
            <div className="left__image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="left__info">
              <p className="left__name">PlayStation 5</p>
              <p>Price: ${product.price}</p>
              <p>Description: {product.description}</p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price:
                <span>${product.price}</span>
              </p>
              <p>
                Status:
                <span>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => changeQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
    )
}

export default ProductScreen
