# Develop and deploy of an Ecommerce Application using React JS
### Developer: Herbert Fernandez Tamayo, @heftamayo

### Table of Content
1. Project's overview
2. Architectural Diagram
3. Screen Recording
4. Technical Details
    1. Authentication
    2. Front End
    3. Back End
    4. Deployment
5. Future improvements

### 1. Project's overview
The project's objective is to develop an ecommerce application where the customer can request an account, browse available products and shop what they need.

During the shopping process, the client may drop or confirm the shopping cart.

From an educational point of view, this project is a good opportunity to put in practice basic to middle level concepts developing web based application using cutting edge technology.

### 2. Architectural Diagram
TODO

### 3. Screen Recording
In the next series of videos, the user may have an idea how to use the application

In the next video the user may have access to the project's summary and the expected results. In the next sections, there are specific videos to help the user to understand specific tasks :

[1. Accesing and register a user's account](https://youtu.be/DFAr6zs6nro)

[2. Login credentials](https://youtu.be/DFAr6zs6nro)

[3. Backend operations](https://youtu.be/DFAr6zs6nro)

[4. Shopping operations](https://youtu.be/DFAr6zs6nro)


### 4. Technical details
    1. Authentication: Auth0, in short term: authentication module from scratch

    2. Front End: React JS: redux, grommet, react-query

    3. Back End: Contentful, in short term: Node JS

    4. Deployment: Netlify


### 5. Future improvements
    
A. BackOffice: 
    -Clientes:
        1. comparar claves
        2. no borrar clientes que tienen compras pendientes
        3. edicion de datos
        4. validar patron de las claves

    -Productos:
        1. float en el precio
        2. foto para el producto
        3. Despues de agregar no refresca la tabla en ciertas ocasiones, talvez se deba al proxy

B. Compras:
        1. Validar que la fecha de compra no sea mayor a la actual
        2.  agregar por default la fecha del sistema
        4. validar que los items a comprar no sean mas de los disponibles

C. Carrito:
        1. eliminar items
        2. mostrar los items exclusivamente del cliente
        3. desarrollar las funciones de pagar

D. General:
        1. Paginacion, ordenamiento columnas
    
    
