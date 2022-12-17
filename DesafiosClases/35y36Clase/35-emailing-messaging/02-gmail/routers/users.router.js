import  Router  from 'express-router';
import userModel from '../dao/users.dao.js'
import jwt from 'jsonwebtoken'

const router = Router ()

router.get('/', async(req, res) => {
    let users = await userModel.find()
    res.send ({status: "success", payload: users})
})

router.post('/register', async(req, res) => {
    const {name, email, password} = req.body
    let exist = await userModel.findOne ({email})

    if (exist) return res.send ({status:"error", error:"Usuario ya exite"})

    let user ={
        name,
        email,
        password
    }
    let result =await userModel.create (user)
    res.send({status: "success", message:"Usuario creado", payload:result})
})

router.post('/login', async (req, res) => {
    const {email, password} = req.body
    let user = await userModel.findOne ({email})
    if (!user) return res.send({status:"error", error:"Usuario no encontrado"})
    if (password!==user.password) return res.send({status:"error", error:"Credenciales incorrectas"})
    res.send({status:"success", message:"Usuario logueado"})
})

router.post ('/recoverRequest', async (req, res) => {
    const {email}= req.body //le pido el mail para restablecer pass
    const recoverToken = jwt.sign ({email}, 'coder', {expiresIn: 300}) //token de recuperacion
    const mailer = new MailingService ()
    let result = await mailer.sendMail({
    from: "Recuperaciones <recuperaciones@coderclass.com",
    to:"mail@hotmail.com",
    subject: "Restablecimiento de pass",
    html: `<div>
    <h1>Restablecer contrasena</h1>
    <p>Ingresar al enlace</p>
    <a href="http://localhost:8080/recoverpwd?token=${recoverToken}">Recuperar pass</a> 
        </div>`
    })
    res.send({status:"success", message:"Se solicito reestablecimiento"})
})

router.post('/recoverpwd', async (req, res) => {
    const token = req.query.token
    try {
        let {email} = jwt.verify(token, 'coder')
        let {password} = req.body
        let user = await userModel.findOne({email})
        if (!user) return res.send ("email invalido en la base")
        user.password= password //si si encontro el usuario que le envie en el token, el seria el mismo pass que quiero re establecer 
        //actualizamos el usuario en la base de datos en la base de datos=
        await userModel.findByIdAndUpdate(user._id, {$set:{password}})
        res.send({status:"success", message:"pass actualizada"})
    } catch (error) {
        
        if(error.expiredAt){
            return res.send ({status:"error", error:"El token de recuperacion expiro"})
        }else{
            return res.send({status:"error", error:"favor de generar nuevamente el correo de recuperacion"})
        }
    }
})

export default router