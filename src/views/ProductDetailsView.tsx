
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import MainNavigation from '../sections/MainNavigation'
import ProductDetails from '../sections/ProductDetails'
import Footer from '../sections/Footer'

import { IProductContextType, useProductContext } from '../contexts/ProductContext';
import FeaturedProducts from '../sections/FeaturedProducts'




const ProductDetailsView: React.FC = () => {

     document.title = "Fixxo | Product"

     
     const {params} = useParams<string>()
     console.log('Content of "params": ' + params);  
     

     const {product, getProduct} = useProductContext() as IProductContextType
     const {relatedProducts, getRelatedProducts} = useProductContext() as IProductContextType
     useEffect (() => {
          getProduct(params)
     }, [])

     useEffect (() => {
          getRelatedProducts(product.category, product.articleNumber, 4)
     }, [product])

  return (
     <>
          <MainNavigation/>
          <ProductDetails item={product}/>
          {/* <Section container='container' classHeader='d-flex justify-content-start py-0' title='Related Products' body={
               <RelatedProductsCardGrid category={product.category} articleNumber={product.articleNumber} maxAmount={4} orientation='vertical'/>} breakSM="1" breakMD="2" breakLG="4" breakXL="4"/> */}
          <FeaturedProducts title='Related Products' align='left' sectionName='featured-products' items={relatedProducts}/>
          <Footer/>
    </>   
  )
}

export default ProductDetailsView