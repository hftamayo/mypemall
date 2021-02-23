import React from 'react';
//import { useAuth0 } from '@auth0/auth0-react';
import { Button} from 'grommet';
import { useHistory } from 'react-router-dom';
const LoginButton = () => {

    //const { isAuthenticated, isLoading } = useAuth0();
    const viewValidar = useHistory();
    return (
        <Button className="logButton" 
            onClick={() => viewValidar.push('/acceder')}
            >Validar
        </Button>
        /*!isAuthenticated && !isLoading ?
            (<Button className="logButton" 
            onClick={() => viewValidar.push('/acceder')}
            >Ingresar
            </Button>)
        :
            null
            */
    )
}

export default LoginButton
