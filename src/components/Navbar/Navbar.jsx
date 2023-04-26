import { Link } from 'react-router-dom'
import './Navbar.css'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { auth, onAuthStateChanged } from '../../firebase/firebase';
import { login, startGoogleAuth, startGoogleLogout } from '../../actions/auth';

import Button from '@mui/material/Button';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Person2Icon from '@mui/icons-material/Person2';


export const Navbar = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userType, setUserType] = useState(localStorage.getItem("userType") ?? "usuario");

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
          <div className='loggedUser'>
            {/* EMPRESA */}
            {(userType == "empresa" || userType == "administrador") &&
              <div className="empresa_actions">
                <Link to="/create">
                  <Button variant="contained" style={{ backgroundColor: `#0f24c6` }}>
                    Crear oferta
                  </Button>
                </Link>
              </div>
            }
            {/* ADMINISTRADOR */}
            {userType == "administrador" &&
              <div className="administrador_actions">
                <Link to="/create">
                  <Button variant="contained" style={{ backgroundColor: `#9233e4` }}>
                    Administrar
                  </Button>
                </Link>
              </div>
            }

            {/* USUARIO */}
            <Link to="/profile">
              <Button variant="contained" endIcon={<Person2Icon />}>
                Perfil
              </Button>
            </Link>
            <Button variant="contained" endIcon={<ExitToAppIcon />} onClick={handleLogout} style={{ backgroundColor: `#ee3731` }}>
              Cerrar sesión
            </Button>

          </div>
          :
          <Button variant="contained" endIcon={<LockOpenIcon />} onClick={handleGoogleAuth}>
            Iniciar sesión
          </Button>
        }

      </div>
    </nav>
  )
}
