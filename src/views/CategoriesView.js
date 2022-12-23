import React from 'react'
import NotFound from '../components/NotFound'
import MainNavigation from '../sections/MainNavigation'

const CategoriesView = () => {

  window.top.document.title = 'Fixxo | Categories'

  return (
    <>
      <MainNavigation/>
      <NotFound/>
    </>
  )
}

export default CategoriesView