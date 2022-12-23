
import React, { useEffect } from 'react'

import MainNavigation from '../sections/MainNavigation'
import Hero from '../sections/Hero';
import SplitBanner from '../sections/BannerSplit';
import FeaturedProducts from '../sections/FeaturedProducts';
import DoubleBanner from '../sections/BannerDouble';
import CustomerInfoShowcase from '../sections/CustomerInfoShowcase';
import ProductPromoShowcase from '../sections/ProductPromoShowcase';
import SingleBanner from '../sections/BannerSingle';
import ProductToplistShowcase from '../sections/ProductToplistShowcase';
import CustomerInfoMenu from '../sections/CustomerInfoMenu';
import Footer from '../sections/Footer';

import { IProductContextType, useProductContext } from '../contexts/ProductContext';



const HomeView:React.FC = () => {

  document.title = 'Fixxo.'

  const {productsByTag, getProductsByTag} = useProductContext() as IProductContextType
  const {showcaseProducts, getShowcaseProducts} = useProductContext() as IProductContextType

  useEffect (() => {
    getProductsByTag("featured", 8)
  }, [])

  useEffect (() => {
    getShowcaseProducts(4)
  }, [])


  return (
    <>
      <MainNavigation/>
      <Hero/>
      <SplitBanner/>
        {/* <Section title='All Products' body={<ProductCardGrid orientation='vertical' amount='8'/>} container='container' breakSM="1" breakMD="2" breakLG="4" breakXL="4"/> */}
      <FeaturedProducts title='Featured Products' align='middle' sectionName='featured-products' items={productsByTag}/>
      <DoubleBanner/>
      <CustomerInfoShowcase/>
      <ProductPromoShowcase items={showcaseProducts}/>
      <SingleBanner/>
      <ProductToplistShowcase/> 
      <CustomerInfoMenu/>
      <Footer/>     
    </>
  )
}

export default HomeView