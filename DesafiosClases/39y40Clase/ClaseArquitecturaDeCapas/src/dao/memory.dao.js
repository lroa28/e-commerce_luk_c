export default class MemoryDao{
    constructor(){
        this.entities = { //objeto
            //arreglos = entidades, multiples entidades ligadas a unica instancia de memoria
            users:[],
            pets:[],
        }
    }
    getAll = async(entity)=>{ //obtener todo
        if(!this.entities[entity]) throw new Error('Entity not found');
        return this.entities[entity];
    }
    save = async(element,entity) =>{//guardar
        if(!this.entities[entity]) throw new Error('Entity not found');
        
        if(this.entities[entity].length===0){
            element.id = 1;
        }else{
            element.id = this.entities[entity][this.entities[entity].length-1].id+1; //insertamos el id en el ult elem del arreglo
        }
        this.entities[entity].push(element);
    }
}