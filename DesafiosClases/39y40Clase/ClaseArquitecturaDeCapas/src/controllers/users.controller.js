import { userService } from "../services/index.js";

const getAllUsers = async(req,res)=>{ //fx q le envio al router
    try{
        let users = await userService.getUsers();
        res.send({status:"success",payload:users})
    }catch(error){
        console.log(error);
        res.send({status:"error",error:error}) //err q me viene de las otras capas
    }
}
const saveUser = async(req,res)=>{
    try{
        //validación de los datos
        const {first_name,last_name,email,role} = req.body;
        if(!first_name||!last_name||!email) return res.status(400).send({status:"error",error:"Incomplete values"});
        let user = {
            first_name,
            last_name,
            email,
            role
        }
        let result = await userService.saveUser(user);// lo envio al servicio pq lo guarde
        res.send({status:"success",message:"User added",payload:result});    
    }catch(error){
        console.log(error);
        res.send({status:"error",error:error})
    }
}

export default {//los genero en una instancia o los exporto
    getAllUsers,
    saveUser
}