 
interface LocalProps {
     alertType:string
     title:string
     subTitle?:string
     text:string
}

const AlertNotification:React.FC<LocalProps> = ({alertType = 'warning', title, subTitle, text}) => {
  return (
    <>
     <div className={`alert alert-${alertType} mt-5 text-center : d-none`}>
          <h1>{title}</h1>
          <h4>{subTitle}</h4>
          <p>{text}</p> 
     </div>
     {/* <div className={failedSubmit ? 'alert alert-warning mt-5 text-center' : 'd-none'}>
          <h1>Something went wrong! Your comment was not submitted :(</h1>
     </div> */}
    </>
  )
}

export default AlertNotification