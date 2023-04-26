import React, { useState } from 'react'
import './CreateJob.css'
import { Button, Divider, TextField } from '@mui/material'


export const CreateJob = () => {
    const [oferta, setOferta] = useState({
        nombre: '',
        urlLogo: '',
        titulo: '',
        texto: '',
        city: '',
        time: '',
    })


    const handleCityChange = (e) => {
        setOferta({
            ...oferta,
            city: e.target.value
        })
    }
    const handleTimeChange = (e) => {
        setOferta({
            ...oferta,
            time: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const nombre = formData.get('name');
        const urlLogo = formData.get('img');
        const titulo = formData.get('title');
        const texto = formData.get('text');

        const newOferta = {
            ...oferta,
            nombre,
            urlLogo,
            titulo,
            texto,
        };

        setOferta(newOferta);
        alert("La oferta se ha creado correctamente")
    };

    return (
        <div className="createJob">
            <h3>Crear una nueva oferta laboral</h3>
            <form onSubmit={handleSubmit}>
                <Divider>Información de la empresa</Divider>

                <TextField id="outlined-basic" label="Nombre de la empresa" name='name' variant="outlined" required />
                <TextField id="outlined-basic" label="URL logo de la empresa" name='img' variant="outlined" required />

                <Divider>Información de la oferta</Divider>

                <TextField id="outlined-basic" label="Titulo de la oferta" name='title' variant="outlined" required />
                <TextField
                    name='text'
                    id="filled-multiline-static"
                    label="Texto de la oferta"
                    multiline
                    rows={4}
                    variant="outlined"
                    required
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


                <Button type='submit' variant="contained" style={{ width: `fit-content`, justifySelf: `center`, marginTop: `50px`, marginBottom: `10px` }} > Crear oferta</Button>
            </form>
        </div >
    )
}
