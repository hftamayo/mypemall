import React from 'react';
import { Box, Header, Nav, Select, Text } from 'grommet';
import { DocumentStore, Group, UserAdd, Home } from 'grommet-icons';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { setNewTheme } from '../../redux/actions';
import { themes } from '../../utils';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../../Componentes/LoginButton';
import AuthButton from '../../Componentes/AuthButton';
import LogoutButton from '../../Componentes/LogoutButton';

const publicLinks = [
  { label: 'Inicio', to: '/', icon: <Home color="accent-2" /> },
  { label: 'Registrarse', to: '/ncliente', icon: <UserAdd color="accent-2" /> },  
];

/* Contendra todos los links que necesitan que el usuario inicie sesion*/
const privateLinks = [
  {label: 'Catalogo compras', to: '/comprar', icon: <Group color="accent-2" /> },
  { label: 'Ver carrito', to: '/vercarrito', icon: <DocumentStore color="accent-2" /> },
];

const bofficeLinks = [
  {label: 'Catalogo Clientes', to: '/clientes', icon: <Group color="accent-2" /> },
  { label: 'Catalogo Productos', to: '/productos', icon: <DocumentStore color="accent-2" /> },
];

function PageHeader(props) {
  const {isAuthenticated, isLoading, user} = useAuth0();
  //const {name, email} = user;
  const location = useLocation();
  
  /* Mientras la pagina este cargando, no recornada nada */
  if(isLoading){
    return null;
  }


  let links = [...publicLinks];//Agregamos los links publicos

  if(isAuthenticated){//Solo si el usuario esta autenticado, agregamos los links privados
    const {name, email} = user;
    if(email === "kodigo@kodigo.org.sv"){
      links  = [...publicLinks, ...bofficeLinks];
    }
    else{
      links = [...publicLinks, ...privateLinks];
    }

  }
  
  return (
    <Header background="brand" pad="medium">
      <Nav direction="row">
        {links.map((link) => {
          return (
            <Link to={link.to} key={link.to}>
              {link.icon}
              {` `}
              <Text
                color={link.to === location.pathname ? 'accent-2' : 'accent-3'}
              >
                {link.label}
              </Text>
            </Link>
          );
        })}
      </Nav>

      <Box justify="end">
        <Select
          value={props.theme}
          options={Object.keys(themes)}
          onChange={({ option }) => props.setNewTheme(option)}
        />
      </Box>
      
      <Box justify="end">
        <AuthButton/>
        <LogoutButton/>
      </Box>
      
    </Header>
  );
}

const mapStateToProps = (state) => ({
  theme: state.main.theme,
});

const mapDispatchToProps = {
  setNewTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(PageHeader);
