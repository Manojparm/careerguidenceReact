import React from 'react'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import {Helmet} from "react-helmet";

const Layout = ({children,title,description,author,keywords}) => {
  return (
    <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author}/>
                <title>{title}</title>
           </Helmet>
     <Header/>
     <main style={{minHeight:"80vh"}}>
     {children}
     </main>
    <Footer/>
    </div>
  )
}
Layout.defaultProps={
  title:"Careerguidence",
  description:"We guide for the carrer that helps to achevie your goals,India's best careerguidence platform.",
  keywords:"careerguidence,scope,bright future,achivers",
  author:"Manoj"
}

export default Layout
