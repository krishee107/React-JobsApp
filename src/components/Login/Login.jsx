import { useDispatch } from 'react-redux';
import { useState } from 'react'
//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import './login.css'
import { startGoogleAuth } from '../../actions/auth';

export const Login = () => {
  //const [isRegistrando, setIsRegistrando] = useState(false)
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

/*
const submitHandler = (e) => {
  e.preventDefault();
  const correo = e.target.correo.value;
  const password = e.target.password.value;

  // Firebase
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, correo, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorcode + ": " + errorMessage)
      alert(errorMessage)
    });

}*/

/* 
      <form onSubmit={handleGoogleAuth}>
        <h1>{isRegistrando ? "Regístrate" : "Inicia sesión"}</h1>
        <input type="email" placeholder='Email' name='correo' />
        <input type="password" placeholder='Password' name='password' />
        <button type="submit">{isRegistrando ? "Regístrate" : "Inicia sesión"}</button>
      </form>

      <button onClick={() => setIsRegistrando(!isRegistrando)}>
        {isRegistrando ? "¿Ya tienes cuenta? ¡Inicia sesión!" : "¿No tienes cuenta? ¡Regístrate!"}
      </button>
*/