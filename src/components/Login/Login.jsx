import { useDispatch } from 'react-redux';

import './login.css'
import { login, startGoogleAuth, startGoogleLogout } from '../../actions/auth';
import { useEffect, useState } from 'react';
import { auth, onAuthStateChanged } from '../../firebase/firebase';

import { Alert, Button } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export const Login = () => {
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
    <div className="loginForm">
      {isLoggedIn ?
        <div className='loggedBox'>
          <Alert severity="error" style={{ padding: `20px 10px` }}>¡Ahora mismo te encuentras logueado! ¿Quieres cerrar sesión? </Alert>
          <Button variant="contained" endIcon={<ExitToAppIcon />} onClick={handleLogout} style={{ backgroundColor: `#ee3731`, justifySelf: `center` }} >
            Cerrar sesión
          </Button>
        </div>
        :
        <div className='logoutBox'>
          <Alert style={{ padding: `20px 10px` }}>Ahora mismo no tienes una sesión iniciada. Puedes hacerlo pulsando el botón de "Iniciar sesión". </Alert>
          <Button variant="contained" endIcon={<LockOpenIcon />} onClick={handleGoogleAuth} style={{ justifySelf: `center` }}>
            Iniciar sesión
          </Button>
        </div>
      }
    </div>



  );
};
