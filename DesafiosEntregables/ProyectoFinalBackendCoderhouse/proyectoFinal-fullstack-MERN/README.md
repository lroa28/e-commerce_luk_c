# Curso Backend - MERN Stack: Proyecto Final
E-commerce project


## Endpoints de la API:
1) **Productos**:  

	Metodos GET:
	- "/api/productos" → devuelve todos los productos existentes en la base datos. Puede o no recibir query param de orden por precio asc o desc ("?sort=1" || "?sort=-1").
	- "/api/productos/:id" → Devuelve un unico producto por id.
	- "/api/productos/categoria/:category" → devuelve todos los productos de esa categoria. Puede o no recibir query param de orden por precio asc o desc ("?sort=1" || "?sort=-1").  
	

	Metodo POST:
	- "/api/productos" → Recibe por body los datos del producto y devuelve el producto con su id asignado por el backend. Los datos obligatorios a enviar por body son: nombre, precio, stock. Alcaracion: Para acceder a este endpoint es necesario estar logueado como administrador.  


	Metodo PUT:
	- "/api/productos/:id" → Recibe por body los campos a modificar del producto con id que se paso por param de url. Alcaracion: Para acceder a este endpoint es necesario estar logueado como administrador.  


	Metodo DELETE:
	- "/api/productos/:id" → Elimina de la base de datos el producto con el id indicado en el param de url. Alcaracion: Para acceder a este endpoint es necesario estar logueado como administrador.  
	
    ```json
	El modelo de productos es el siguente:
    		timestamp: valor generado por el backend,
    		nombre: texto requerido,
    		descripcion: texto opcional,
    		codigo: texto opcional,
    		foto: texto (url) opcional,
    		precio: numero requerido,
    		stock: numero requerido,
    		categoria: texto opcional
     ```

2) **Carritos**:  


	Metodo GET:
	- "/api/carrito/:id/productos" → devuelve todos los productos existentes en el carrito.  
	

	Metodos POST:
	- "/api/carrito" → crea un nuevo carrito y se lo asigna al usuario.	
	- "/api/carrito/:id/productos" → agrega los productos que se pasan por body al carrito con el id indicado en el param url. El body del request debe contener: idProd (id del producto a agregar) y quantity (cantidad de dicho producto).  


	Metodos DELETE:
	- "/api/carrito/:id" → Elimina un carrito por completo.
	- "/api/carrito/:id/productos/:id_prod" → Elimina el producto con id indicado en el ultimo param de url (id_prod) del carrito que se indica en el primer param url (id).  


	Aclaracion: Para todos los endpoints de carrito se debe estar logueado. Solo se puede acceder al carrito del cual el usuario logueado es dueño.


3) **Usuarios**:  


	Metodos GET:
	- "/api/user/current" → Devuelve los datos del usuario logueado.
	- "/api/user/:id" → Devuelve los datos del usuario con id indicado.  

	
	Metodo POST:
	- "/api/user" → Registra un usuario en la base de datos Y devuelve los datos del mismo sin el password.
    ```json
		Recibe por body:
    		email: texto requerido,
   	 	    password: texto requerido,
    		firstName: texto requerido,
   		    lastName: texto requerido,
    		address: texto requerido,
    		age: numero requerido,
    		tel: numero requerido,
    		avatar: puede ser imagen o url opcional,
    		currentCart: {type: String, default: ""}  
    ```
	
	Metodo PUT:
	- "/api/user/:id" → Modifica los campos indicados con los valores enviados por body. Se debe estar autenticado para acceder.  


4) **Ordenes**:  


	Metodos GET:
	- "/api/order/:email" → Devuelve las ordenes generadas por el usuario cuyo email es el indicado en el param.  


	Metodo POST:
	- "/api/order" → Crea una nueva orden de compra a partir de los productos existentes en el carrito del usuario logueado. No requiere pasar ningun dato por body, solo estar logueado y tener productos en el carrito.  


5) **Chat/Mensajes**:  

	
	Metodo GET:	
	- "/api/chat/:email" → Devuelve todos los mensajes correspondientes a ese email.  


	Metodo POST:
	- "/api/chat" → Inserta un nuevo mensaje en la base de datos.
	Recibe por body:
	email: texto requerido,
	text: texto requerido.

	Metodo DELETE:
	- "/api/chat/:id" → Elimina un mensaje por su numero de id.  

	
6) **Categorias**:  

	
	Metodo GET:
	- "/api/categories" → Devuelve todas las categorias existentes en la base de datos.  

	
	Metodo POST:
	- "/api/categories" → Crea una nueva categoria y la guarda en la base de datos. Solo los usuarios con rol de admin pueden acceder.
	Recibe por body unicamente el "name" de la categoria.  

	
	Metodo DELETE:
	- "/api/categories/:name" → Elimina una categoria por su nombre. Solo los usuarios con rol de admin pueden acceder.  


7) **Login**:  

	
	Metodo POST:
	- "/login" → Inicia sesion del usuario pasado por body y devuelve los datos del mismo. La sesion se guarda en base de datos por 1min.
	Recibe por body:
	email: texto requerido,
	password: texto requerido.  


8) **Logout**:  


	Metodo GET:
	- "/logout" → Cierra sesion del usuario activo.