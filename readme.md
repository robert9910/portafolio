El presente proyecto integra las siguientes tecnologías: **MongoDB**, **Express** y **Node.js**

A mayores, se han incluido las siguientes tecnologías: 
* **Normalize.css** para normalizar el estilo css en todos los navegadores 
 `$ npm install --save normalize.css`
* **Twitten Bootstrap** para mejorar el diseño correspondiente a la vista 
 `$ npm install --save bootstrap `
* **Google fonts** para utilizar una fuente moderna. Las fuentes utilizadas han sido: **PT Sans** e **Indie Flower**

El proyecto original está subido a GitHub en el repositorio: [https://github.com/arvindr21/MEAN-Workshop/tree/master/resources/day3/examples/02.MongoExpressNode](https://github.com/arvindr21/MEAN-Workshop/tree/master/resources/day3/examples/02.MongoExpressNode)

Para ejecutar el proyecto, es necesario abrir una consola de comandos en el directorio en que está el proyecto y ejecutar: 
`$ node ./bin/www `

Otra posibilidad sería utilizando nodemon, que es un módulo para NodeJS que reinicia automáticamente el servidor cada vez que se hacen cambios en los archivos .js: 
`$ nodemon ./bin/www`

A continuación, arrancar un navegador web y acceder a la URL: [http://localhost:3000/](http://localhost:3000/)

El presente proyecto consta de 4 diferentes páginas: 
- **Página de inicio:** Incluye un enlace a las restantes páginas. 
- **Página de registro de un nuevo usuario:** Al enviar el formulario, añade ese usuario a la base de datos. 
- **Página de inicio de sesión:** Al enviar el formulario, se verifica que las credenciales del usuario introducidas son correctas. 
- **Página de usuarios:** Muestra una tabla formateada con la lista de usuarios de la base de datos.

Lista de tareas a realizar en el futuro: 
- Integrar en la vista de register el código con los datos del usuario creado. Tener dos secciones y dependiendo de si se envia un determinado argumento, mostrar una u otra sección. 
- Añadir funcionalidad a los botones "Edit" y "Delete" correspondientes a cada usuario 
- Al iniciar sesión un usuario, puede acceder a su lista de tareas. Podrá añadir nuevas, editarlas y borrarlas. Sin embargo, no tendrá acceso a las tareas de los restantes usuarios.
