
# Dev Jobs

## Explicación del proyecto:

Me he decantado por una aplicación tipo portal de empleo. 
En un principio iba a ser una llamada a la API de Github Jobs para listar todas las ofertas de trabajo pero al estar la API caída en ese momento, me decanté por crear un sistema propio de ofertas de trabajo.


### Tipos de usuario y acciones:
#### Los usuarios:
- Pueden iniciar sesión con su cuenta de Google desde Firebase
Pueden cerrar sesión
- Las rutas están protegidas por si no somos usuarios
- Podemos ver el listado de ofertas
- Podemos filtrar las ofertas por jornada y/o ciudad
- Podemos entrar a ver los detalles de una oferta
- Podemos marcar las ofertas como favoritas
- Podemos ver un listado de nuestras ofertas de trabajo favoritas para hacer un seguimiento de las que nos interesan
- Pueden acceder a su perfil de usuario
- **PARA EL TEST:** Pueden modificar desde su perfil el tipo de usuario que es (usuario, administrador, empresa)

### Las empresas:
- Pueden hacer lo mismo que los usuarios 
- Pueden acceder a las rutas para empresas como /create
- Pueden crear ofertas de trabajo nuevas

### Los administradores:
- Pueden hacer lo mismo que las empresas
- Pueden acceder a las rutas para administradores como /administrar
- Pueden eliminar ofertas de trabajo

## Llamada a API:
Para la API he implementado una pequeña información del tiempo en la home, bajo el filtro de ofertas de trabajo. 
