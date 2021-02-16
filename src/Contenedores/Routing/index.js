import React from 'react';
/*import { HashRouter, Route, Switch } from "react-router-dom";*/
import { Route, Switch } from "react-router-dom";
import Workers from '../Workers';
import Medcerts from '../Medcerts';
import Vermedcerts from '../Vermedcerts';
import PrivateRoute from './PrivateRoute';
import Home from '../../Componentes/Home';
import Clientes from '../Clientes';
import NuevoCliente from '../NuevoCliente';
import AccesoCredencial from '../AccesoCredencial';

function Routing() {
    return (
        <Switch>
            <Route exact path="/">
            <Home />
            </Route>

            <Route path="/clientes">
            <Clientes />
            </Route>            

            <Route path="/ncliente">
            <NuevoCliente />
            </Route>      

            <Route path="/acceder">
            <AccesoCredencial />
            </Route>      

            
            <PrivateRoute path="/workers">
                <Workers />
            </PrivateRoute>
            
            <PrivateRoute path="/medcerts/:idEmp/:fnEmp">
                <Medcerts />
            </PrivateRoute>
            
            <PrivateRoute path="/vermedcerts">
                <Vermedcerts />
            </PrivateRoute>
        </Switch>
    );
}

export default Routing; 
