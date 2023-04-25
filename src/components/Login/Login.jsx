import { useDispatch } from 'react-redux';
import { useState } from 'react'

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
    <div className="login">
      <button onClick={handleGoogleAuth}>Iniciar</button>
      <button onClick={handleLogout}>Logout</button>
    </div>

  )
}