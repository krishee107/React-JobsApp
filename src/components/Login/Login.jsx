import { useDispatch } from 'react-redux';
import { useState } from 'react'

import './login.css'
import { startGoogleAuth } from '../../actions/auth';

export const Login = () => {

  const dispatch = useDispatch();
  const handleGoogleAuth = () => {
    dispatch(startGoogleAuth())
  }

  return (
    <div className="login">
      <button onClick={handleGoogleAuth}>Iniciar</button>
    </div>

  )
}