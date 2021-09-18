import { Link } from "gatsby"
import PropTypes from "prop-types"
import React ,{ useContext } from "react"
import { IdentityContext } from "../../identity-context";





export default function Header({ siteTitle }){

  const { user, identity: netlifyIdentity }:any = useContext(IdentityContext);

  return (
  <header
    style={{
      background: `transparent`,
      marginBottom: `0.8rem`,
      borderBottom: `2px solid black`,
      width: `100vw`,
    
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: `100vw`,
        padding: `0.8rem 1.0875rem`,
        display:`flex`
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          G
        </Link>
      </h1>
     
          <Link to='/' style={{marginLeft:`1000px`,marginTop:`10px`,color:`black`,textDecoration:`none`}}>
          Home
          </Link>
      
     
          <Link to='/blog' style={{marginLeft:`20px`,marginTop:`10px`,color:`black`,textDecoration:`none`}}>
          Blog
          </Link>
      
      
    </div>
  </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


