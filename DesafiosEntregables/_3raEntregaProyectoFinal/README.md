# 3ra entrega de proyecto final | Curso de Backend | Coderhouse 2022

### Consigna de la entrega actual (3er pre-entrega):
Se debe entregar:
1) Un menú de registro y autenticación de usuarios basado en passport local, guardando en la base de datos las credenciales y el resto de los datos ingresados al momento del registro. 
- El registro de usuario consiste en crear una cuenta en el servidor almacenada en la base de datos, que contenga el email y password de usuario, además de su nombre, dirección, edad, número de teléfono (debe contener todos los prefijos internacionales) y foto ó avatar. La contraseña se almacenará encriptada en la base de datos.
- La imagen se podrá subir al servidor y se guardará en una carpeta pública del mismo a la cual se tenga acceso por url.

2) Un formulario post de registro y uno de login. De modo que, luego de concretarse cualquiera de estas operaciones en forma exitosa, el usuario accederá a su home.
- El usuario se logueará al sistema con email y password y tendrá acceso a un menú en su vista, a modo de barra de navegación. Esto le permitirá ver los productos totales con los filtros que se hayan implementado y su propio carrito de compras e información propia (datos de registro con la foto). Además, dispondrá de una opción para desloguearse del sistema.
- Ante la incorporación de un usuario, el servidor enviará un email al administrador con todos los datos de registro y asunto 'nuevo registro', a una dirección que se encuentre por el momento almacenada en una constante global.

3) Envío de un email y un mensaje de whatsapp al administrador desde el servidor, a un número de contacto almacenado en una constante global.
- El usuario iniciará la acción de pedido en la vista del carrito.
- Será enviado una vez finalizada la elección para la realizar la compra de productos.
- El email contendrá en su cuerpo la lista completa de productos a comprar y en el asunto la frase 'nuevo pedido de ' y el nombre y email del usuario que los solicitó. En el mensaje de whatsapp se debe enviar la misma información del asunto del email.
- El usuario recibirá un mensaje de texto al número que haya registrado, indicando que su pedido ha sido recibido y se encuentra en proceso.

## Aspectos a incluir en el entregable: 
- El servidor trabajará con una base de datos DBaaS (Ej. MongoDB Atlas) y estará preparado para trabajar en forma local o en la nube a través de la plataforma PaaS Heroku.
- Habilitar el modo cluster para el servidor, como opcional a través de una constante global.
- Utilizar alguno de los loggers ya vistos y así reemplazar todos los mensajes a consola por logs eficientes hacia la misma consola. En el caso de errores moderados ó graves el log tendrá además como destino un archivo elegido.
- Realizar una prueba de performance en modo local, con y sin cluster, utilizando Artillery en el endpoint del listado de productos (con el usuario vez logueado). Verificar los resultados.


### Prueba de performance con Artillery.
Nota: curl me funciono en CMD y no en PowerShell. También asegurarse de tener una carpeta "profiling" creada en la ruta base del proyecto.

- Prueba en modo FORK:
   1. Ejecuto el servidor con npm start (asegurandome que en el .env tengo el MODO="FORK").
   2. En una nueva consola en la ruta del proyecto → curl -H "Content-Type: application/json" -X POST http://localhost:8080/login -d "{\"email\":\"mail@mail.com\", \"password\" : \"mail123\"}"
   3. Luego → artillery quick --count 20 -n 50 http://localhost:8080/api/productos > profiling/result_fork.txt

 - Prueba con modo CLUSTER:
   1. Ejecuto el servidor con npm start (asegurandome que en el .env tengo el MODO="CLUSTER").
   2. En una nueva consola en la ruta del proyecto → curl -H "Content-Type: application/json" -X POST http://localhost:8080/login -d "{\"email\":\"mail@mail.com\", \"password\" : \"mail123\"}"
   3. Luego → artillery quick --count 20 -n 50 http://localhost:8080/api/productos > profiling/result_cluster.txt

    ![Artillery](https://user-images.githubusercontent.com/86528930/191414631-6a774fdd-46de-4bca-b52b-6521660514cd.JPG)
   
   Conclusion: Como podemos ver en las imágenes anteriores, el servidor es un poco mas eficiente al ejecutarse en modo CLUSTER ya que las peticiones son recepcionadas por 6 procesos distintos, evitando que una nueva solicitud tenga que esperar a la siguiente como para en modo FORK al tener un solo proceso activo recibiendo todas las peticiones. Comparando los resultados entre modo CLUSTER y modo FORK, el servidor pudo atender un 10% mas de solicitudes por segundo, en tanto la media de respuesta al cliente aumentó de 68.7ms a 70.1ms y la medida de sesiones paso de 9416.8ms a 9607.1ms.
