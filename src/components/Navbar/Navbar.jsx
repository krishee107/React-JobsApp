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

    </nav>
  )
}
