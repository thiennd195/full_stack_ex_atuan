import React from 'react'
import Product from '../components/product'
import './HomeScreen.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getProducts as listProducts } from '../redux/action/productAction'


const HomeScreen = () => {

  const dispatch = useDispatch();
  const getProducts = useSelector(state => state.products);
  const { products, loading, error } = getProducts

  useEffect(() => {
    dispatch(listProducts())

  }, [dispatch])
  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homescreen__products">

        {loading ? <h2>Loading .....</h2> : error ? <h2>{error}</h2> : products?.map(product =>
          <Product key={product._id}
            imageUrl={product.imageUrl} 
            name={product.name}
            price={product.price}
            description={product.description}
            productId={product._id}
          />
        )}



      </div>
    </div>
  )
}

export default HomeScreen
