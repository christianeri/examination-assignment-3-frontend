
import React from 'react'
import Promo from '../components/Promo'
import MainNavigation from '../sections/MainNavigation'

const OnSaleView = () => {
  
  return (
    <>
      <MainNavigation/>
        <Promo header1='%SALE%'/>
    </>
  )
}

export default OnSaleView