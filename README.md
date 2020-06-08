# En este proyecto utilizamos: 

 - Symfony
 - Node.js
 - Composer
 - XAMPP

## Descargamos el proyecto y lo ubicamos dentro de XAMPP, en la carpeta llamada htdocs. Igualmente podemos abrir un terminal, ubicarnos en XAMPP > htdocs y ejecutamos el comando:

- git clone https://github.com/isaacdaw2/IF-FC.git

## Una vez descargado el proyecto nos ubicamos en él y ejecutamos estas líneas:

 - npm install

 - composer install

 ## Abrimos XAMPP e iniciamos Apache y MySQL

 ## Esto es para descargar algunas carpetas y archivos necesarios. A continuación debemos crear la base de datos, para ello ejecutamos:

 - php bin/console doctrine:database:create

 ## Ahora actualizamos los valores que tenemos en la app con la base de datos creada:

 - php bin/console doctrine:schema:update --force
 
 ## Una vez terminado, para arrancar la aplicación introduciremos este comando:

  - symfony server:start

  ## Hecho esto, vamos al navegador y escribimos:
  
  - https://localhost:8000/