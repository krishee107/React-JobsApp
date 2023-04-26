import React, { useState } from 'react'
import './CreateJob.css'
import { Button, Divider, TextField } from '@mui/material'


export const CreateJob = () => {
    const [city, setCity] = useState(null);
    const [time, setTime] = useState(null)


    const handleCityChange = () => {
        //setCity()
    }
    const handleTimeChange = () => {
        //setTime();
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="createJob">
            <h3>Crear una nueva oferta laboral</h3>
            <form onSubmit={handleSubmit}>
                <Divider>Información de la empresa</Divider>

                <TextField id="outlined-basic" label="Nombre de la empresa" name='name' variant="outlined" />
                <TextField id="outlined-basic" label="URL logo de la empresa" name='img' variant="outlined" />

                <Divider>Información de la oferta</Divider>

                <TextField id="outlined-basic" label="Titulo de la oferta" name='title' variant="outlined" />
                <TextField
                    name='text'
                    id="filled-multiline-static"
                    label="Texto de la oferta"
                    multiline
                    rows={4}
                    variant="outlined"
                />
                <Divider>Otra información</Divider>
                <h5>Ciudad</h5>
                <div className="city">
                    <label>
                        <input type="radio" name='city' value="London" onChange={handleCityChange} />
                        London
                    </label>

                    <label>
                        <input type="radio" name='city' value="Amsterdam" onChange={handleCityChange} />
                        Amsterdam
                    </label>

                    <label>
                        <input type="radio" name='city' value="NewYork" onChange={handleCityChange} />
                        New York
                    </label>

                    <label>
                        <input type="radio" name='city' value="Barcelona" onChange={handleCityChange} />
                        Barcelona
                    </label>
                </div>


                <h5>Modalidad</h5>
                <div className="city">
                    <label>
                        <input type="radio" name='time' value="partTime" onChange={handleTimeChange} />
                        Part Time
                    </label>

                    <label>
                        <input type="radio" name='time' value="fullTime" onChange={handleTimeChange} />
                        Full Time
                    </label>
                </div>


                <Button variant="contained" style={{ width: `fit-content`, justifySelf: `center`, marginTop: `50px`, marginBottom: `10px` }} > Crear oferta</Button>
            </form>
        </div >
    )
}
