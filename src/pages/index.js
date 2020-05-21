import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import bcnb from "../images/bcn-billet 1.png"
import mhilz from "../images/MHILSZ2 2.png"
import sites from "../images/sites.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="header"> 
    <h5> Portfolio /20</h5> 
    <div className="tabs">
      <h5>Work</h5>
      <h5>Contact</h5>
    </div>
    </div>
   <h1>WELCOME</h1>
  <div className="pres">
    <div className="pres__name">
      
      <h5><b>Anna Bendahan</b></h5>
      <svg width="33" height="1" viewBox="0 0 43 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="2.18557e-08" y1="0.75" x2="43" y2="0.750004" stroke="black" stroke-width="0.5"/>
</svg>
      <h5>Web designer<br/>
Creative developer</h5>
    </div>
    <div className="pres__text"><p>I am Anna Bendahan, a web designer & developer based in Paris. I studied business law but then I realised I wanted to work in a more creative field. So, I went to Barcelona to learn to code at le Wagon and I loved it ! 
<br/>Now, I <i>design & build</i> websites as a freelance.  
<b> Enjoy your visit !<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 1.41935L15 14M15 14H2M15 14V1" stroke="black" stroke-width="3"/>
</svg>

</b></p> </div>
  </div>

  <div className="box">
    <img src={bcnb} alt="mhilz" />
    <div className="box__text">
      <div className="box__title">
        <h2> WHAT I DO</h2>
      </div>
      <div className="box__content">
        <p>Web design <br/>
Front-end development <br/>
Interactive design <br/>
Graphic design <br/>
Integration </p>
      </div>
    </div>
  </div>


  <div className="idid"><h2>WHAT I DID</h2></div>

  <img src={sites} alt="sites"/>



  <div className="foot-box">
    <img src={mhilz} alt="terrain"/>
    <div className="foot-box__text">
    <div className="foot-box__title"> <h2>WHAT ELSE</h2></div>
    <div className="foot-box__content"><p>I play football <u>@usparisxifeminine</u> in Paris. By the way, we are recruting for next year, <b>join us ! <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.30625 10.0599L10.0703 1.99936M10.0703 1.99936L10.0836 10.0403M10.0703 1.99936L1.00038 2.01957" stroke="black" stroke-width="2"/>
</svg>
</b></p> </div>
    </div>
  </div>


  <div className="contact">
    <h1> CONTACT</h1>


  <svg width="53" height="1" viewBox="0 0 53 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="2.18557e-08" y1="0.75" x2="53" y2="0.750004" stroke="black" stroke-width="0.5"/>
</svg>


<div className="contact__content">
  <p>You have a project in mind? 
Feel free to contact me !  </p> <p>an.bendahan@gmail.com <br/>@lebendan<br/>0659133919</p></div>


</div>
  </Layout>
)

export default IndexPage
