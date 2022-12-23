import { useEffect } from 'react'
import MainNavigation from '../sections/MainNavigation'
import Breadcrumb from '../components/Breadcrumb'
import ContactForm from '../sections/ContactForm'
import Footer from '../sections/Footer'

const ContactView: React.FC = () => {

     useEffect(() => {
          document.title = "Fixxo | Contact"
       }, []);

  return (
    <>
      <MainNavigation/>
      <Breadcrumb currentPage='Contact'/>
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default ContactView 