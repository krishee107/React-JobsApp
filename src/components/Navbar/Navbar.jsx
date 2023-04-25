import { Link } from 'react-router-dom'
import './Navbar.css'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { auth, onAuthStateChanged } from '../../firebase/firebase';
import { login, startGoogleAuth, startGoogleLogout } from '../../actions/auth';

export const Navbar = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
      setChecking(false)
    });
  }, [dispatch, checking, isLoggedIn])

  const handleGoogleAuth = () => {
    dispatch(startGoogleAuth())
  }

  const handleLogout = () => {
    dispatch(startGoogleLogout())
  }


  return (
    <nav>
      <Link to="/">
        <div className="title">
          <span>Dev</span> Jobs
        </div>
      </Link>

      <div className="user_actions">
        {isLoggedIn ?
          <button onClick={handleLogout}>Logout</button>
          :
          <button onClick={handleGoogleAuth}>Iniciar sesión</button>
        }

      </div>
    </nav>
  )
}
