import { useDispatch } from 'react-redux';

import './login.css'
import { startGoogleAuth, startGoogleLogout } from '../../actions/auth';

export const Login = () => {
  const dispatch = useDispatch();

  const handleGoogleAuth = () => {
    dispatch(startGoogleAuth())
  }

  const handleLogout = () => {
    dispatch(startGoogleLogout())
  }

  return (
    <div className="loginForm">
      <button onClick={handleGoogleAuth}>Iniciar</button>
      <button onClick={handleLogout}>Logout</button>
    </div>

  )
}