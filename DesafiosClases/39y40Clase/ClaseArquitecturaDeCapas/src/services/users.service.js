export default class UserService {
    constructor(dao){
        this.dao = dao; //no se que DAO me van a enviar
        this.entity = 'users';
    }
    getUsers = () =>{
        return this.dao.getAll(this.entity);
    }

    saveUser = (user) =>{ //recibo un usuario
        user.role = user.role?user.role:'user';// si llega es xq lo va a cambiar, le pongo el que trae o por default 'user'
        user.active = true; //x default se crea activo
        return this.dao.save(user,this.entity);
    }
}