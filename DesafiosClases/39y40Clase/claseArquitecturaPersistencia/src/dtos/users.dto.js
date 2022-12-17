//antes de enviarlo al cliente lo puedo , se puede pensar para la BD tb
export default  class UserDTO{
    constructor(user){//le pasamos toda la entidad que queremos procesar
        this.id = user._id??user.id;
        this.first_name = user.first_name||'usuario';
        this.last_name = user.last_name;
        this.name = `${user.first_name} ${user.last_name}`;
        this.email = user.email;
        this.role = user.role||"user";
    }
}