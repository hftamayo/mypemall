import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button} from 'grommet';
const AuthButton = () => {

    const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
    return (
        !isAuthenticated && !isLoading ?
            (<Button className="logButton" 
            onClick={() => loginWithRedirect()}
            >Ingresar
            </Button>)
        :
            null
    )
}

export default AuthButton
