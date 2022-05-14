import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__logo--container">
          HR DEPARTMENT
        </div>

        <div className="navbar__menu">
          <ul className="navbar__menu--list">
            <li className="navbar__menu--item"><NavLink className="navbar__menu--link" to='/employees'>Employees</NavLink></li>
            <li className="navbar__menu--item"><NavLink className="navbar__menu--link" to='/managers'>Managers</NavLink></li>
            <li className="navbar__menu--item"><NavLink className="navbar__menu--link" to='/departments'>Departments</NavLink></li>         
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar