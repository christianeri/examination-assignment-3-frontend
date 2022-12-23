
interface LocalProps {
     header1?: string
     header2?: string
}

const Promo: React.FC<LocalProps> = ({header1, header2}) => {
  return (
     <div className='promo'>
          <h1>{header1}</h1><h2>{header2}</h2>    
     </div>
  )
}

export default Promo