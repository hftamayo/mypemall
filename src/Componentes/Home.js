import React from 'react';
import logo from '../img/logo.png';
function Home() {
    return (
        <div className="mainBody">
            <h1 align="center">MYPE-MALL</h1>
            <img src={logo} className="centrar"></img>
            <h3 align="center">Sitio de E-Commerce Para la Micro y Pequeña Empresa</h3>
            <h6 align="center"><b>Bienvenido Invitado, por favor 
                registrese o ingrese sus credenciales</b></h6>            
        </div>
    )
}

export default Home
