import { Link } from 'react-router-dom'
import './Navbar.css'
import { useState } from 'react'

export const Navbar = () => {
  const [usuario, setUsuario] = useState(null)

  return (
    <nav>
      <Link to="/">
        <div className="title">
          <span>Dev</span> Jobs
        </div>
      </Link>

      <div className="user_actions">
        {usuario ?
          <Link>
            Logout
          </Link>
          :
          <div className="no_user">
            <Link className='login' to="/login">
              Login
            </Link>
            <Link className='register' to="/register">
              Register
            </Link>
          </div>
        }

      </div>
    </nav>
  )
}
