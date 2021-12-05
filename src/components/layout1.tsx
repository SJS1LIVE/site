import { useStaticQuery, graphql } from "gatsby"
 
 import Header from "./header"
 import "./layout.css"
import React from "react"
 
 interface LayoutProps {
  children: React.ReactNode 
}
 
 const Layout = ({ children }: LayoutProps) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery1 {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata?.title || `Title`
  const description = data.site.siteMetadata?.description || 'Description'

  return (
    <div>
      <Header siteTitle={siteTitle} description={description}/>
      <main>{children}</main>
    </div>
  )
}
 
 export default Layout