import { Link } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <div className="title">
          <span>Dev</span> Jobs
        </div>
      </Link>

      <div className="user_actions">
        <div className="login">
          Login
        </div>
        <div className="register">
          Register
        </div>
      </div>
    </nav>
  )
}
