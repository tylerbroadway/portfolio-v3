import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = () => (
  <header className="flex flex-row justify-between h-20 bg-charcoal">
    <div className="self-center ml-4 text-5xl text-teal font-light tracking-widest">
      TB
    </div>
    <div className="flex flex-row justify-around items-center w-1/3 px-6 py-auto">
      <div className="text-xl text-teal font-light">
        <Link to="/">Home</Link>
      </div>
      <div className="text-xl text-teal font-light">
        <Link to="/projects">Projects</Link>
      </div>
      <div className="text-xl text-teal font-light">
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
