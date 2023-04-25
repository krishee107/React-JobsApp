import './Profile.css'

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../actions/auth";
import { auth, onAuthStateChanged } from "../../firebase/firebase";
import { Paper } from "@mui/material";

export const Profile = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true)
        setUserInfo(user)
        console.log(user)
      } else {
        setIsLoggedIn(false)
        setUserInfo(null)
      }
      setChecking(false)
    });
  }, [dispatch, checking, isLoggedIn])


  return (
    <Paper elevation={5} style={{ width: `50%`, margin: `0 auto`, padding: `30px` }}>
      {userInfo ?
        <div>
          <div className="nombre profile_info">
            Nombre:
            <span>{userInfo.displayName}</span>
          </div>

          <div className="email profile_info">
            Email:
            <span>{userInfo.email}</span>
          </div>
          <div className="sesion profile_info">
            Fecha de creación:
            <span>{userInfo.metadata.creationTime}</span>
          </div>
          <div className="sesion profile_info">
            Ultima vez que iniciaste sesión:
            <span>{userInfo.metadata.lastSignInTime}</span>
          </div>
        </div >
        :
        <div>No se ha encontrado el usuario.<br></br> Si crees que esto es un error, inicia sesión de nuevo o recarga la página.</div>
      }
    </Paper >
  )
}
