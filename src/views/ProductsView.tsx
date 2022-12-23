
import React, { useEffect } from 'react'

import MainNavigation from '../sections/MainNavigation'
import Breadcrumb from '../components/Breadcrumb'
import Section from '../components/Section'
import Footer from '../sections/Footer'

import { IProductContextType, useProductContext } from '../contexts/ProductContext'
import ProductCard from '../components/ProductCard'


const ProductsView: React.FC = () => {

  document.title = "Fixxo | All products"

  const {products, getAllProducts} = useProductContext() as IProductContextType

  useEffect (() => {
       getAllProducts()
       }, [])

  return (
    <>
      <MainNavigation/>
        <Breadcrumb currentPage='Products'/>
        <div className='container'>
          <div className='row row-cols-1 row-cols-md-3 row-cols-lg-4 g-0'>
            {
            products.map(product => (<ProductCard key={product.articleNumber} orientation="vertical" item={product}/>))
            }
          </div>
        </div>
     <Footer/>
    </>
  )
}

export default ProductsView