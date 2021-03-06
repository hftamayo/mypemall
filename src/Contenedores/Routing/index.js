import React from 'react';
/*import { HashRouter, Route, Switch } from "react-router-dom";*/
import { Route, Switch } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Home from '../../Componentes/Home';
import Clientes from '../Clientes';
import NuevoCliente from '../NuevoCliente';
import AccesoCredencial from '../AccesoCredencial';
import Productos from '../Productos';
import Comprar from '../Comprar';
import DetallesCompra from '../DetallesCompra';
import VerCarrito from '../VerCarrito';

function Routing() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/ncliente">
                <NuevoCliente />
            </Route>      

            <PrivateRoute path="/clientes">
                <Clientes />
            </PrivateRoute>            

            <PrivateRoute path="/acceder">
                <AccesoCredencial />
            </PrivateRoute>      

            <PrivateRoute path="/productos">
                <Productos />
            </PrivateRoute>                  

            <PrivateRoute path="/comprar">
                <Comprar />
            </PrivateRoute>          

            <PrivateRoute path="/detallecompra/:idProd/:nProd">
                <DetallesCompra />
            </PrivateRoute>                      

            <PrivateRoute path="/vercarrito">
                <VerCarrito />
            </PrivateRoute>                              
        </Switch>
    );
}

export default Routing; 
