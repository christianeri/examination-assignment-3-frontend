import { useState } from "react"
import { validateEmail, validateText } from '../utilities/validation'

import Iframe from "react-iframe"
import AlertNotification from "../components/AlertNotification"


interface FormDataType {
     name:string
     email:string
     comments:string
}

const ContactForm:React.FC = () => {

     const defaultValues:FormDataType = {
          name: '',
          email: '',
          comments: ''
     }

     const [formData, setFormData] = useState<FormDataType>(defaultValues)
     const [formErrors, setFormErrors] = useState<FormDataType>(defaultValues)
     const [submitted, setSubmitted] = useState<boolean>(false)
     const [failedSubmit, setFailedSubmit] = useState<boolean>(false)


     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const {id, value} = e.target
          setFormData({...formData, [id]: value}) // [] interpret as "Key"-value

          if (id === 'name') {
               setFormErrors({...formErrors, [id]: validateText(id, value)})
          }
          if (id === 'email') {
               setFormErrors({...formErrors, [id]: validateEmail(id, value)})
          }
     }

     const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
          const {id, value} = e.target
          setFormData({...formData, [id]: value}) // [] interpret as "Key"-value
          
          if (id === 'comments') {
               setFormErrors({...formErrors, [id]: validateText(id, value)})
          }
     }


     const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault()

          setSubmitted(false)
          setFailedSubmit(false)

          if (formData.name !=='' && formData.email !=='' && formData.comments !=='') {
               if (formErrors.name !=='' && formErrors.email !=='' && formErrors.comments !=='') {
                    
                    const res = await fetch('https://win22-webapi.azurewebsites.net/api/contactform', {
                         method: 'post',
                         headers: {'Content-Type': 'application/json'},
                         body: JSON.stringify(formData)
                    })

                    if (res.status === 200) {
                         setSubmitted(true)
                         setFormData(defaultValues)
                    } else {
                         setSubmitted(false)
                         setFailedSubmit(true)
                    }
               }
          }
     }


  return (
     <section className='contact-section br'>          
          {/* <Breadcrumb currentPage='Contact'/> */}
          <div className='container-flex'>
               <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10998.376637945414!2d77.61423294193482!3d12.938969174075833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae155228d8e435%3A0x5060149e7b0a19e5!2sFixxo%20-%20Apple%20Repair%20Experts!5e0!3m2!1ssv!2sse!4v1666808466835!5m2!1ssv!2sse" width="100%" height="100%" loading="lazy" allowFullScreen={false}/>          
          </div>

          <div className='container'>
               { submitted ? (<AlertNotification alertType="success" title="Thank you for your comments" text=""/>) : (<></>) }
               { failedSubmit ? (<AlertNotification alertType="success" title="Thank you for your comments" text=""/>) : (<></>) }
          </div>

          <div className='container'>               
               <div className={submitted ? 'invisible' : 'contact-form'}>
                    <h4>Come in Contact with Us</h4>
                    
                    <form onSubmit={handleSubmit} noValidate>
                         <div className='input-container'>
                              <input    id='name' 
                                        type='text' 
                                        placeholder='Your name' 
                                        value={formData.name} 
                                        onChange={(e) => handleChange(e)}
                                        onKeyUp={event => validateText} 
                                        className={formErrors.name ? "error" : ""}/>

                              <div className='error-message' id='nameErrorMsg'>{formErrors.name}</div>
                         </div>
                         <div className='input-container'>                              
                              <input    id='email' 
                                        type='email' 
                                        placeholder='Your email' 
                                        value={formData.email} 
                                        onChange={(e) => handleChange(e)}
                                        onKeyUp={event => validateEmail} 
                                        className={formErrors.email ? "error" : ""}/> 
                              
                              <div className='error-message' id='emailErrorMsg'>{formErrors.email}</div>
                         </div>
                         <div>
                              <div className='input-container'>
                                   <textarea id='comments' 
                                             placeholder='Your message' 
                                             value={formData.comments} 
                                             onChange={(e) => handleTextAreaChange(e)}
                                             onKeyUp={event => validateText} 
                                             className={formErrors.comments ? "error" : ""}/> 

                                   <div className='error-message' id='commentErrorMsg'>{formErrors.comments}</div>                                   
                              </div>
                              <button type='submit' className='fixxo-button'>Post Comments</button>
                         </div>
                    </form>
               </div>         
          </div>

     </section>
  )
}

export default ContactForm