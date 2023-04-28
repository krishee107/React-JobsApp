import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Tiempo.css'
import ThermostatIcon from '@mui/icons-material/Thermostat';

export const Tiempo = () => {
    /* Llamada a la api para mostrar el tiempo */
    const baseURL = "https://www.el-tiempo.net/api/json/v2/provincias/08"
    const [tiempo, setTiempo] = useState()

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setTiempo(response.data);
            console.log(tiempo.ciudades[6].stateSky);
        });
    }, []);

    return (
        <div className='temperaturasAPI'>
            {
                tiempo ?
                    <div>
                        <div className="title">El tiempo en {tiempo.ciudades[6].name}</div>
                        <div className="tiempo">
                            <div className="temperatura">
                                <label>
                                    <b>Max:</b>
                                    {
                                        tiempo.ciudades[6].temperatures.max
                                    }º
                                    <ThermostatIcon />
                                </label>
                                <label>
                                    <b>Min:</b>
                                    {
                                        tiempo.ciudades[6].temperatures.min
                                    }º

                                    <ThermostatIcon />
                                </label>

                            </div>
                        </div>
                    </div>
                    : <div>Cargando...</div>
            }

        </div>
    )
}
