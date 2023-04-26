import './Profile.css'

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../actions/auth";
import { auth, onAuthStateChanged } from "../../firebase/firebase";
import { Paper } from "@mui/material";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

export const Profile = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userInfo, setUserInfo] = useState(null);
  const [userType, setUserType] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true)
        setUserInfo(user)
      } else {
        setIsLoggedIn(false)
        setUserInfo(null)
      }
      setChecking(false)
    });
  }, [dispatch, checking, isLoggedIn])


  useEffect(() => {
    if (userInfo) {
      const db = getFirestore();
      const userRef = doc(db, "users", userInfo.uid);
      getJob(userRef);
    }
  }, [userInfo]);

  const getJob = async (userRef) => {
    const userDoc = await getDoc(userRef);
    if (userDoc.exists()) {
      //Obtener el tipo de usuario
      const userData = userDoc.data();
      setUserType(userData.type);
    } else {
      const userData = {
        displayName: userInfo.displayName,
        email: userInfo.email,
        type: "usuario"
      }
      //La añadimos 
      await setDoc(userRef, userData);
      setUserType(userData.type)
    }
  };

  const handleUserType = () => {

  }

  return (
    <div>
      <Paper elevation={5} style={{ margin: `0 auto`, padding: `30px` }}>
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

      <div style={{ paddingTop: `40px` }}>
        {userType ?
          <Paper elevation={5} style={{ margin: `0 auto`, padding: `30px` }}>
            <div className="userInfo" style={{ paddingBottom: `30px`, color: `#334680` }}>
              Hay 3 tipos de usuarios:<br></br>
              -<b>Usuario:</b> Puede ver ofertas y sus detalles.<br />
              -<b>Empresa:</b> Puede hacer lo mismo que los usuarios y crear ofertas <br />
              -<b>Administrador:</b>: Puede hacer lo mismo que la empresa y borrar ofertas<br />
            </div>
            <div className="userType">
              Ahora mismo tu usuario es de tipo: <b>{userType}</b>. <br />
              Puedes modificar tu usuario aquí:<br />
              <form>
                <label>
                  <input type="radio" name="type" value="usuario" onChange={handleUserType} />
                  Usuario
                </label>
                <label>
                  <input type="radio" name="type" value="empresa" onChange={handleUserType} />
                  Empresa
                </label>
                <label>
                  <input type="radio" name="type" value="administrador" onChange={handleUserType} />
                  Administrador
                </label>
              </form>
            </div>
          </Paper>
          :
          <Paper elevation={5} style={{ margin: `0 auto`, padding: `30px` }}>Cargando...</Paper>
        }
      </div>

    </div>

  )
}
