/* Desafío Get endpoints
Dada la siguiente constante: const frase = 'Hola mundo cómo están'
Realizar un servidor con API Rest usando node.js y express que contenga los siguientes endpoints get:
1) '/api/frase' -> devuelve la frase en forma completa en un campo ‘frase’.
2) '/api/letras/:num  -> devuelve por número de orden la letra dentro de esa frase (num 1 refiere a la primera letra), en un
campo ‘letra’.
3) '/api/palabras/:num  -> devuelve por número de orden la palabra dentro de esa frase (num 1 refiere a la primera palabra),
en un campo ‘palabra’.
Aclaraciones:
- En el caso de las consignas 2) y 3), si se ingresa un parámetro no numérico o que esté fuera del rango de la cantidad total de letras o palabras (según el caso), el servidor debe devolver un objeto con la descripción de dicho error. Por ejemplo:
{ error: "El parámetro no es un número" } cuando el parámetro no es numérico
{ error: "El parámetro está fuera de rango" } cuando no está entre 1 y el total de letras/palabras
- El servidor escuchará peticiones en el puerto 8080 y mostrará en la consola un mensaje de conexión que muestre dicho puerto, junto a los mensajes de error si ocurriesen.
*/

const express =  require('express');
const app = express(); 

const PORT  = 8080;
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}
);

const frase = 'Hola mundo como estan';
app.get('/api/frase', (req, res)=>{
  res.json({
      frase: frase
  })
})

app.get('/api/letras/:num', (req, res)=>{
  let num = parseInt(req.params.num) //parseamos de string a numero esta parte /:num
  
  if (!isNaN(num)){ //si num es numero
    if(num>=1 && num <= frase.length){
      res.json({letra: frase[num-1]})
    }
    else{
      res.send({error: 'El parámetro está fuera de rango'})
    }
  }
  else{
    res.send({error: 'El parámetro ingresado no es un numero'})
  }
}
)

//terminar!!!
app.get('/api/palabras/:num', (req, res)=>{
    let num = parseInt(req.params.num) //parseamos de string a numero esta parte /:num
    
    if (!isNaN(num)){ //si num es numero
      if(num>=1 && num <= frase.length){
        res.json({palabra: frase[num-1]}) //hay que mostrar la palabra del orden que se pide de la frase
      }
      else{
        res.send({error: 'El parámetro está fuera de rango'})
      }
    }
    else{
      res.send({error: 'El parámetro ingresado no es un numero'})
    }
  }
  )

/* Operaciones con el servidor:  
Desarrollar un servidor que permita realizar la suma entre dos números utilizando tres rutas en estos formatos (Ejemplo con números 5 y 6)
a) Ruta get '/api/sumar/5/6
b) Ruta get '/api/sumar?num1=5&num2=62) 
c) Ruta get '/api/operacion/5+6
No hace falta validar los datos a sumar, asumimos que los ingresamos correctamente.
Implementar las rutas post, put y delete en la dirección '/api' respondiendo 'ok' + (post/put/delete) según corresponda. Probar estas rutas con Postman, verificando que el servidor responda con el mensaje correcto.
El servidor escuchará en el puerto 8080 y mostrará todos los mensajes de conexión/error que correspondan.
*/


/* Servidor con get, post, put y delete:
Considere la siguiente frase: ‘Frase inicial’
Realizar una aplicación de servidor node.js con express que incorpore las siguientes rutas:
GET '/api/frase': devuelve un objeto que como campo ‘frase’ contenga la frase completa
GET '/api/palabras/:pos': devuelve un objeto que como campo ‘buscada’ contenga la palabra hallada en la frase en la posición dada (considerar que la primera palabra es la #1.
POST '/api/palabras': recibe un objeto con una palabra bajo el campo ‘palabra’ y la agrega al final de la frase. Devuelve un objeto que como campo ‘agregada’ contenga la palabra agregada, y en el campo ‘pos’ la posición en que se agregó dicha palabra.
PUT '/api/palabras/:pos': recibe un objeto con una palabra bajo el campo ‘palabra’ y reemplaza en la frase aquella hallada en la posición dada. Devuelve un objeto que como campo ‘actualizada’ contenga la nueva palabra, y en el campo ‘anterior’ la anterior.
DELETE '/api/palabras/:pos': elimina una palabra en la frase, según la posición dada (considerar que la primera palabra tiene posición #1).

Aclaraciones:
Utilizar Postman para probar la funcionalidad.
El servidor escuchará peticiones en el puerto 8080 y mostrará en la consola un mensaje de conexión que muestre dicho puerto, junto a los mensajes de error si ocurriesen.
*/