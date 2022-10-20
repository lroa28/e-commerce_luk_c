const form = document.getElementById('registerForm');

form.addEventListener('submit',evt=>{ //submit=enviar
    evt.preventDefault();
    let data = new FormData(form);
    let obj = {};
    data.forEach((value,key)=>obj[key]=value);//hasta aca preparo todo para enviar
    fetch('/api/sessions/register',{ //ruta que tengo en app.js
        method:'POST',
        body:JSON.stringify(obj),
        headers:{
            "Content-Type":"application/json" //le aviso al servidor que le envio un json
        }
    }).then(result=>result.json()).then(json=>console.log(json));//convierto el arch q nos llega del servidor en json
    
})