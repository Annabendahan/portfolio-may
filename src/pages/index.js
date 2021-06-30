import React, { Component } from "react"
import { Parallax } from 'react-scroll-parallax';


import Layout from "../components/layout"
import SEO from "../components/seo"
import bcnb from "../images/bcn-billet 1.png"
import mhilz from "../images/MHILSZ2 2.png"
import sites from "../images/sites.png"

class IndexPage extends Component {

  state = {

    mounted: false,
    num: false,
    phrase: false,
    header: true,
    count: 19283,
    landing: true

  }


  componentDidMount = () => {
    var element = document.getElementById("top")
    element.scrollIntoView({ behavior: 'smooth' })
    setInterval(
      function () {
        this.setState({ count: this.state.count + 1 })
      }.bind(this),
      200
    )
    setTimeout(
      function () {
        this.setState({ num: true })
      }.bind(this),
      300
    )
    setTimeout(
      function () {
        this.setState({ phrase: true })
      }.bind(this),
      1300
    )
    setTimeout(
      function () {
        this.setState({ landing: false })
      }.bind(this),
      2500
    )
    this.setState({ mounted: true })
    window.addEventListener("scroll", this.handleScroll)


  }


  handleScroll = event => {

    if (window.scrollY > 99) {
      this.setState({ header: false })
    } else if (window.scrollY < 100) {
      this.setState({ header: true })
    }
  }

  scrollTo = (idd) => {

    var element = document.getElementById(idd)
    element.scrollIntoView({ behavior: 'smooth' })
  }

  render() {
    return (
      <Layout >
        <SEO title="Home" />
        <div className="landing" style={{
          transform: this.state.landing ? "translateY(0vh)" : "translateY(-150vh)",
          transition: "transform 1s cubic-bezier(0.82, 0.0, 0.28, 1.0)"
        }}>
          <div className="landing__content" style={{
            transform: this.state.num ? "translateX(0vh)" : "translateX(100vh)",
            transition: "transform 1s cubic-bezier(0.82, 0.0, 0.28, 1.0)"
          }}>
            <h6 className="landing__num">Hello</h6>
            <h6 className="landing__desc" style={{
              opacity: this.state.phrase ? "1" : "0",
              transition: "opacity 2s ease-out"
            }}>☻</h6>
          </div>
        </div>
        <div id="top" onScroll={event => this.handleScroll(event)}>
          <div className="header" style={{
            opacity: this.state.header ? "1" : "0",
            transition: "opacity 1s cubic-bezier(0.32, 0.0, 0.38, 1.0)"
          }}>
            <div className="header__content">
              <p> Portfolio /20</p>
              <div className="tabs">
                <p onClick={() => this.scrollTo("work")}>Work</p>
                <p onClick={() => this.scrollTo("about")}>About</p>
                <p onClick={() => this.scrollTo("contact")}>Contact</p>
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="welcome"><h1>WELCOME</h1></div>
            <div className="welcome-mobile"><h1>WEL<br />COME</h1></div>

            <div className="pres">
              <div className="pres__name">
                <p>
                  <b>Anna Bendahan</b>
                </p>
                <svg
                  width="33"
                  height="1"
                  viewBox="0 0 43 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="2.18557e-08"
                    y1="0.75"
                    x2="43"
                    y2="0.750004"
                    stroke="black"
                    stroke-width="0.5"
                  />
                </svg>
                <p>
                  <i>Web designer</i>
                </p>
                <p>
                  <i>Creative developer</i>
                </p>
              </div>
              <div className="pres__text">
                <h5>
                  I am Anna Bendahan, a web designer & developer based in Paris. After learning to code in Barcelona,
                  I became a freelance developer. I worked for agencies, law-firms, music & podcast producers, and I am currently working for Veepee.
                  <br /> <br />

                  <b>
                    {" "}
                    <span className="enjoy" onClick={() => this.scrollTo("billet")}>  Enjoy your visit !{" "}

                      <svg className="smallarrowdown" width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 14.9975L6.73684 1.73438" stroke="black" stroke-width="3" />
                        <path d="M20 1V15H6" stroke="black" stroke-width="3" />
                      </svg>
                      <svg className="bigarrowdown" width="46" height="28" viewBox="0 0 46 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32.8555 23.8657L11.066 2.19531" stroke="black" stroke-width="5" />
                        <path d="M32.8564 1V23.8743H9.85644" stroke="black" stroke-width="5" />
                      </svg>
                    </span>




                  </b>
                </h5>{" "}
              </div>
            </div>
          </div>

          <div id="billet" className="box">
            <div className="box__img">
              <img src={bcnb} alt="bcnb" />
              <p>BCN, <i>May /18</i></p>
            </div>
            <div id="work" className="box__text">
              <div className="box__title">
                <h2> WORK</h2>

              </div>
              <div className="box__content">
                <svg
                  width="33"
                  height="1"
                  viewBox="0 0 43 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="2.18557e-08"
                    y1="0.75"
                    x2="43"
                    y2="0.750004"
                    stroke="black"
                    stroke-width="0.5"
                  />
                </svg>
                <p>
                  I start with the <i>design</i>, which aims to be modern, intuitive &
                  responsive, then comes the <i>development</i> part (front & back) and{" "}
                  <i>integration</i>.
                </p>
                <p>
                  <b>
                    Figma, lllustrator
                    <br />
                    React.js, Vue.js
                    <br />
                    HTML, SCSS
                  </b>{" "}
                </p>
              </div>
            </div>
          </div>


          <Parallax className="custom-class" y={[10, -10]} tagOuter="figure">
            <div className="sites"> <img style={{
              width: '100vw'
            }} src={sites} alt="sites" /></div>
          </Parallax>



          <div className="projects">
            <a href="https://majortheory.com/" target="blank">
              <div className="project">
                <div className="project__content">
                  <div className="project__left">
                    <h3>01</h3>
                  </div>
                  <div className="project__right">
                    <p>
                      <b>Major Theory</b> - Music agency
                      <br />
                      <i>Web design & development</i>
                    </p>
                  </div>
                </div>
                <svg
                  className="thinline"
                  width="100%"
                  height="1"
                  viewBox="0 0 3194 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="2.18557e-08"
                    y1="0.75"
                    x2="3194"
                    y2="0.750192"
                    stroke="black"
                    stroke-width="1"
                  />
                </svg>

                <svg
                  className="heavyline"
                  width="100%"
                  height="5"
                  viewBox="0 0 3194 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="2.18557e-07"
                    y1="2.5"
                    x2="3194"
                    y2="2.50019"
                    stroke="black"
                    stroke-width="10"
                  />
                </svg>
              </div>
            </a>


            <a href="https://jgenerator.netlify.app/" target="blank">
              <div className="project">
                <div className="project__content">
                  <div className="project__left">
                    <h3>02</h3>
                  </div>
                  <div className="project__right">
                    <p>
                      <b>Jersey generator</b> - Perso

                      <br />
                      <i>Nodejs + gatsbyjs</i>
                    </p>
                  </div>
                </div>
                <svg
                  className="thinline"
                  width="100%"
                  height="1"
                  viewBox="0 0 2194 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="2.18557e-08"
                    y1="0.75"
                    x2="2194"
                    y2="0.750192"
                    stroke="black"
                    stroke-width="1"
                  />
                </svg>

                <svg
                  className="heavyline"
                  width="100%"
                  height="5"
                  viewBox="0 0 2194 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="2.18557e-07"
                    y1="2.5"
                    x2="2194"
                    y2="2.50019"
                    stroke="black"
                    stroke-width="10"
                  />
                </svg>
              </div>
            </a>


            <a href="https://alicethonnier.netlify.app/" target="blank">
              <div className="project">
                <div className="project__content">
                  <div className="project__left">
                    <h3>03</h3>
                  </div>
                  <div className="project__right">
                    <p>
                      <b>Alice Thonnier</b> - Stylist

                      <br />
                      <i>Web design & development</i>
                    </p>
                  </div>
                </div>
                <svg
                  className="thinline"
                  width="100%"
                  height="1"
                  viewBox="0 0 2194 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="2.18557e-08"
                    y1="0.75"
                    x2="2194"
                    y2="0.750192"
                    stroke="black"
                    stroke-width="1"
                  />
                </svg>

                <svg
                  className="heavyline"
                  width="100%"
                  height="5"
                  viewBox="0 0 2194 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="2.18557e-07"
                    y1="2.5"
                    x2="2194"
                    y2="2.50019"
                    stroke="black"
                    stroke-width="10"
                  />
                </svg>
              </div>
            </a>

            <a href="https://dantelennon.com/" target="blank">
              <div className="project">
                <div className="project__content">
                  <div className="project__left">
                    <h3>04</h3>
                  </div>
                  <div className="project__right">
                    <p>
                      <b>Dante Lennon</b> - Producer
                      <br />
                      <i>Web design & development</i>
                    </p>
                  </div>
                </div>
                <svg
                  className="thinline"
                  width="100%"
                  height="1"
                  viewBox="0 0 2194 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="2.18557e-08"
                    y1="0.75"
                    x2="2194"
                    y2="0.750192"
                    stroke="black"
                    stroke-width="1"
                  />
                </svg>

                <svg
                  className="heavyline"
                  width="100%"
                  height="5"
                  viewBox="0 0 2194 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="2.18557e-07"
                    y1="2.5"
                    x2="2194"
                    y2="2.50019"
                    stroke="black"
                    stroke-width="10"
                  />
                </svg>
              </div>
            </a>


            <a href="http://www.qm-avocat.com/" target="blank">
              <div className="project">
                <div className="project__content">
                  <div className="project__left">
                    <h3>05</h3>
                  </div>
                  <div className="project__right">
                    <p>
                      <b>Quentin Mameri</b> - Lawyer
                      <br />
                      <i>Web design & development</i>
                    </p>
                  </div>
                </div>
                <svg
                  className="thinline"
                  width="100%"
                  height="1"
                  viewBox="0 0 3194 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="2.18557e-08"
                    y1="0.75"
                    x2="3194"
                    y2="0.750192"
                    stroke="black"
                    stroke-width="1"
                  />
                </svg>

                <svg
                  className="heavyline"
                  width="100%"
                  height="5"
                  viewBox="0 0 3194 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="2.18557e-07"
                    y1="2.5"
                    x2="3194"
                    y2="2.50019"
                    stroke="black"
                    stroke-width="10"
                  />
                </svg>
              </div>
            </a>

            <a href="https://rentman.io/fr" target="blank">
              <div className="project">
                <div className="project__content">
                  <div className="project__left">
                    <h3>06</h3>
                  </div>
                  <div className="project__right">
                    <p>
                      <b>Rentman</b> - Software company
                      <br />
                      <i>Web & print design</i>
                    </p>
                  </div>
                </div>
                <svg
                  className="thinline"
                  width="100%"
                  height="1"
                  viewBox="0 0 3194 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="2.18557e-08"
                    y1="0.75"
                    x2="3194"
                    y2="0.750192"
                    stroke="black"
                    stroke-width="1"
                  />
                </svg>

                <svg
                  className="heavyline"
                  width="100%"
                  height="5"
                  viewBox="0 0 3194 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="2.18557e-07"
                    y1="2.5"
                    x2="3194"
                    y2="2.50019"
                    stroke="black"
                    stroke-width="10"
                  />
                </svg>
              </div>
            </a>

            <a href="https://reconfinement.netlify.app/" target="blank">
              <div className="project">
                <div className="project__content">
                  <div className="project__left">
                    <h3>07</h3>
                  </div>
                  <div className="project__right">
                    <p>
                      <b>(Re)confinement</b> - Confinement radio
                      <br />
                      <i>Web design & development</i>
                    </p>
                  </div>
                </div>
                <svg
                  className="thinline"
                  width="100%"
                  height="1"
                  viewBox="0 0 3194 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="2.18557e-08"
                    y1="0.75"
                    x2="3194"
                    y2="0.750192"
                    stroke="black"
                    stroke-width="1"
                  />
                </svg>

                <svg
                  className="heavyline"
                  width="100%"
                  height="5"
                  viewBox="0 0 3194 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="2.18557e-07"
                    y1="2.5"
                    x2="3194"
                    y2="2.50019"
                    stroke="black"
                    stroke-width="10"
                  />
                </svg>
              </div>
            </a>



          </div>

          <div className="arrowdown">

            <svg width="92" height="126" viewBox="0 0 92 126" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 81L48 121L89 81" stroke="black" stroke-width="7" />
              <path d="M48 118V0" stroke="black" stroke-width="7" />
            </svg>

          </div>

          <div id="about" className="foot-box">
            <img src={mhilz} alt="terrain" />
            <div className="foot-box__text">
              <div className="foot-box__title">
                {" "}
                <h2>ABOUT</h2>
              </div>

              <div className="foot-box__content">
                <svg
                  width="33"
                  height="1"
                  viewBox="0 0 43 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="2.18557e-08"
                    y1="0.75"
                    x2="43"
                    y2="0.750004"
                    stroke="black"
                    stroke-width="0.5"
                  />
                </svg>
                <p>
                  Apart from coding, I play football <a href="https://www.instagram.com/usparisxifeminine/" target="blank"><u>@usparisxifeminine</u> </a> in Paris. By the way, we
                  are recruiting for next year,{" "}
                  <b>
                    <a className="join" href="https://www.instagram.com/usparisxifeminine/" target="blank">join us !{" "}
                      <svg style={{
                        marginBottom: "0px",
                      }} className="arrowdownjoin" width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.4992 2L4.60449 12.8947" stroke="black" stroke-width="2.5" />
                        <path d="M4 2H15.5V13.5" stroke="black" stroke-width="2.5" />
                      </svg></a>

                  </b>
                </p>{" "}
              </div>
            </div>
          </div>

          <div id="contact" className="contact">
            <h2> CONTACT</h2>
            <svg
              width="33"
              height="1"
              viewBox="0 0 43 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="2.18557e-08"
                y1="0.75"
                x2="43"
                y2="0.750004"
                stroke="black"
                stroke-width="0.5"
              />
            </svg>

            <div className="contact__content">
              <p>You have a <i>project</i> in mind? Feel free to contact me ! </p>{" "}
              <p>
                <b>an.bendahan@gmail.com </b>
                <br />
                <b>@lebendan</b>
                <br />
                <b>+33 659133919</b>
              </p>
            </div>
          </div>


          <div onClick={() => this.scrollTo("top")} className="scroll-top"> <h4>SCROLL TO TOP <svg className="smallarrowup" width="34" height="23" viewBox="0 0 34 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.3502 2.59766L7.8291 21.1187" stroke="black" stroke-width="4" />
            <path d="M6.80078 2.59766H26.3508V22.1477" stroke="black" stroke-width="4" />
          </svg>

            <svg className="bigarrowup" width="58" height="34" viewBox="0 0 58 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M46.4662 3.53906L18.7266 31.2787" stroke="black" stroke-width="6" />
              <path d="M17.1865 3.53906H46.4673V32.8198" stroke="black" stroke-width="6" />
            </svg>



          </h4></div>
        </div>
      </Layout>

    )
  }
}



export default IndexPage
