import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Logo from './logo.png';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{display:`flex`, alignItems:`center`,flexDirection:`row`, marginTop:`80px`}}>
    <div style={{width:`400px`}} >
    <h1>Technology Trends</h1>
    <p>
      Discover the latest trend on technology
      and  be up to date on what future lies on upcoming technology 
    </p>
    <p>Now go and do some digging on technology.</p>
   
    <Link style={{textDecoration:`none`, border:`1px solid black`, color:`black`, padding:`5px 5px`}} to="/blog/">Visit Now</Link> <br />
    </div>
    <div style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
     <img style={{marginLeft:`250px`, marginTop:`50px`}} src={Logo} alt=''></img>
    </div>
    </div>
    {/*<Link to="/using-typescript/">Go to "Using TypeScript"</Link>*/}
  </Layout>
)

export default IndexPage
