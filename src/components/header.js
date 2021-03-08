import * as React from "react"
import PropTypes from "prop-types"
// import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="bg-blue-500">
    <h1>TB</h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
