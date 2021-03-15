import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = () => (
  <header className="flex flex-row justify-between h-20 bg-charcoal">
    <div className="self-center ml-8 text-4xl text-teal font-light tracking-wider">
      TB
    </div>
    <div className="flex flex-row justify-around items-center w-1/3 px-6 py-auto hidden">
      <div className="text-xl text-teal font-light tracking-wide transform hover:scale-110">
        <Link to="/">Home</Link>
      </div>
      <div className="text-xl text-teal font-light tracking-wide transform hover:scale-110">
        <Link to="/projects">Projects</Link>
      </div>
      <div className="text-xl text-teal font-light tracking-wide transform hover:scale-110">
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
