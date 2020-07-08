/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./style.scss"

const Layout = ({ children }) => {
  

  return (
    <>
      
      <div
      className="layout"
        
      >
        <main>{children}</main>
        <footer><p>
           {new Date().getFullYear()} © Created by Anna Bendahan
          </p></footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
