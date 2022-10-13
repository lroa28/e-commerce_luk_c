const form = document.getElementById('registerForm');

form.addEventListener('submit',evt=>{
    evt.preventDefault();//no se refresca la pagina
    console.log('HOLA')
    let data = new FormData(form);
    let obj = {}
    data.forEach((value,key)=>obj[key]=value)//para crear un obj manipulable antes de enviarlo
    fetch('/api/sessions/register',{//lo que tengo en el servidor lo envio del formulario al servidor
        method:'POST',
        body:JSON.stringify(obj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(result=>result.json()).then(json=>console.log(json));
})