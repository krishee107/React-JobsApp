import { Link } from 'react-router-dom'
import './Navbar.css'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { auth, onAuthStateChanged } from '../../firebase/firebase';
import { login, startGoogleAuth, startGoogleLogout } from '../../actions/auth';

import Button from '@mui/material/Button';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';



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
          <Button variant="contained" endIcon={<ExitToAppIcon />} onClick={handleGoogleAuth} style={{ backgroundColor: `#ee3731` }}>
            Cerrar sesión
          </Button>
          :
          <Button variant="contained" endIcon={<LockOpenIcon />} onClick={handleGoogleAuth}>
            Iniciar sesión
          </Button>
        }

      </div>
    </nav>
  )
}
