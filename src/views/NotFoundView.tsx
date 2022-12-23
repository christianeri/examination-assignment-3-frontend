import { useEffect } from 'react'
import NotFound from '../components/NotFound'
import MainNavigation from '../sections/MainNavigation'

const NotFoundView: React.FC = () => {
  
    useEffect(() => {
    document.title = "Fixxo | Home"
 }, []);

  return (
    <>
      <MainNavigation/>
      <NotFound/>
    </>    
  )
}

export default NotFoundView