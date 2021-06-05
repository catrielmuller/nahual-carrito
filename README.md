# Carrito Nahual

## Instalación resumida
```sh
sudo apt install postgresql                        # bajar PostgreSQL
git clone git@github.com:nahual/Carrito.git        # clonar el repo
cd Carrito                                         # cambiar a la nueva carpeta donde vive el repo local
npm install                                        # bajar las dependencias del back (express y sequelize)
( cd public ; ../node_modules/.bin/bower install ) # bajar las dependencias del front (angular)
sudo su postgres                                   # para usar el usuario de administracion de PostgreSQL
createuser pedro -P                                # para crear el usuario "pedro", llenar el pass con "secret"
createdb carrito                                   # para crear la db que usa carrito
node rebuild_tables.js                             # armar la estructura de la BBDD
node load_fixtures.js                              # cargarla con datos
node server.js                                     # arrancar la app
```

PD: las credenciales "pedro" y "secret" estan en el archivo `config/config.json`. (si te copa, cambialas)

## Instalación

### Dependencias Node (Server side)

    npm install

### Dependencias Bower (Client side)

    cd public
    bower install

### Estructura de base de datos

    node rebuild_tables.js

### Datos de prueba

    node load_fixtures.js

### Iniciar servidor

    node server.js

Fin
