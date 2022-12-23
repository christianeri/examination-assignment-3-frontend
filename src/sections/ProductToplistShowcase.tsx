
import ProductCard from '../components/ProductCard'

import { useEffect } from 'react'
import { IProductContextType, useProductContext } from '../contexts/ProductContext'

import { ProductItem } from '../models/ProductModels'


// interface LocalProps {
//      items: ProductItem[]
// }


const ProductToplistShowcase:React.FC = () => {

     const {latestProducts, getLatestProducts} = useProductContext() as IProductContextType
     useEffect (() => {
          getLatestProducts(3)
        }, [])

     const {bestSellingProducts, getBestSellingProducts} = useProductContext() as IProductContextType
     useEffect (() => {
          getBestSellingProducts(3)
        }, [])

     const {topRatedProducts, getTopRatedProducts} = useProductContext() as IProductContextType
     useEffect (() => {
          getTopRatedProducts(3)
        }, [])

  return (
          <section className='product-top-lists'>
               <div className='container'>
                    <div className='left'>
                         <h4>Latest Products</h4>
                         {
                              latestProducts.map(product => <ProductCard key={product.articleNumber} orientation='horizontal' item={product}/>)
                         }
                    </div>
                    <div className='center'>
                         <h4>Best Selling Products</h4>
                         {
                              bestSellingProducts.map(product => <ProductCard key={product.articleNumber} orientation='horizontal' item={product}/>)
                         }
                    </div>
                    <div className='right'>
                         <h4>Top Rated Products</h4>
                         {
                              topRatedProducts.map(product => <ProductCard key={product.articleNumber} orientation='horizontal' item={product}/>)
                         }
                    </div>
               </div>
          </section>
  )
}

export default ProductToplistShowcase