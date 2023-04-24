import { useState } from 'react'
import './login.css'

export const Login = () => {
  const [isRegistrando, setIsRegistrando] = useState(false)

  return (
    <div className="login">
      <form>
        <h1>{isRegistrando ? "Regístrate" : "Inicia sesión"}</h1>
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Password' />
        <button type="submit">{isRegistrando ? "Regístrate" : "Inicia sesión"}</button>
      </form>

      <button onClick={() => setIsRegistrando(!isRegistrando)}>
        {isRegistrando ? "¿Ya tienes cuenta? ¡Inicia sesión!" : "¿No tienes cuenta? ¡Regístrate!"}
      </button>
    </div>

  )
}
