import {userservice} from '../services/service.js'

const getUsers = async(req,res)=> {
    const result = await userservice.getAll();
    res.send({status:"success",payload:result})
}

export default {
    getUsers
}