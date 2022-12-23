
import Promo from '../components/Promo'
import MainNavigation from '../sections/MainNavigation'

const OnSaleView: React.FC = () => {
  
  return (
    <>
      <MainNavigation/>
        <Promo header1='%SALE%'/>
    </>
  )
}

export default OnSaleView