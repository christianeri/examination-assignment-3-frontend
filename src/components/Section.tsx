import React from "react"

interface LocalProps {

     sectionIdentifier?:string
     container:string
     classHeader?:string
     title?:string
     breakSM?:string
     breakMD?:string
     breakLG?:string
     breakXL?:string
     body?:any
}

const Section: React.FC<LocalProps> = ({sectionIdentifier, container, classHeader, title, breakSM, breakMD, breakLG, breakXL, body}) => {

     return (
        <>
          <section className={sectionIdentifier}>     
               {/* <div className={`section-${container}`}> */}
               <div className={container}>
                    {/* <h3 className='section-title pt-0'>{title}</h3> */}
                    <h3 className={`section-title ${classHeader} px-3 g-0`}>{title}</h3>
               </div>
               <div className={container}>
                    <div className={`row row-cols-sm-${breakSM} row-cols-md-${breakMD} row-cols-lg-${breakLG} row-cols-xl-${breakXL} g-0`}>
                         {body}
                    </div>
               </div>
          </section>
        </>
     )
   }

export default Section

