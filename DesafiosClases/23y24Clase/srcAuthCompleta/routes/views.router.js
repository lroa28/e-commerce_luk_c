import { Router } from "express";

const router = Router();

router.get('/',(req,res)=>{
    if(!req.session.user) return res.redirect('/login');//sino tengo usuario en la sesion lo lleva al login
    res.render('home',{user:req.session.user});//user para mostrar el nombre de la persona q se logeo en la vista de la generada cuando se logueo
})

//renderiza la vista de registro
router.get('/register',(req,res)=>{
    if(req.session.user) return res.redirect('/');//si ya se tiene un  usuario logueado en la sesion lo lleva a home
    res.render('register');
})

router.get('/login',(req,res)=>{
    if(req.session.user) return res.redirect('/');//con un usu en sesion no podes ir a la home
    res.render('login');
})
export default router;