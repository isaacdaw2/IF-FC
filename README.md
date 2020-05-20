# En este proyecto utilizamos: 

 - Symfony
 - Node.js
 - Composer
 - XAMPP

## Una vez descargado el proyecto nos ubicamos en él y ejecutamos estas líneas:

 - npm install

 - composer install

 ## Esto es para descargar algunas carpetas y archivos necesarios. A continuación debemos crear la base de datos, para ello ejecutamos:

 - php bin/console doctrine:database:create

 ## Ahora actualizamos los valores que tenemos en la app con la base de datos creada:

 - php bin/console doctrine:schema:update --force
 
 ## Una vez terminado, para arrancar la aplicación introduciremos este comando:

  - symfony server:start