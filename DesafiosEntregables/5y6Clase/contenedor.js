const {promises : fs} = require('fs');

class Contenedor {
    constructor (ruta){
        this.ruta = ruta
    }

/*save(Object): Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.*/
    async save(obj){
        const objs = await this.getAll();
        let newId;

        if (objs.length == 0){
            newId = 1;
        }else {
            newId = objs[objs.length - 1].id + 1;
        }

        const newObj ={...obj , id: newId}
        objs.push (newObj);
        try {
            await fs.writeFile(this.ruta, JSON.stringify(objs,null,2));
            return newId
        } catch (error) {
            throw new Error (`Error al guardar: ${error}`);
        }
    }

/*getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.*/
    async getById(id) {
        const objs = await this.getAll();
        const obj = objs.find(x => x.id == id);
        return obj;
    }

/*getAll(): Object[] - Devuelve un array con los objetos presentes en el archivo.*/
    async getAll(){
        try {
            const objs = await fs.readFile(this.ruta,'utf-8');
            return JSON.parse(objs);
        }   catch (error) {
            return []
        }
    } 
    

/*deleteById(Number): void - Elimina del archivo el objeto con el id buscado.*/
    async deleteById(id){
        let collection = []
        await fs.readFile(`./${this.ruta}`,'utf-8')
        .then( contenido => {
            let col = JSON.parse(contenido)
            for (const ob of col) {
                if(ob.id != id) {
                    collection.push(ob)
                }
            }
        })
        .catch( err => console.log(err));
        await fs.writeFile(`./${this.ruta}`, JSON.stringify(collection));
        console.log('Objeto eliminado!');
        console.log('******************');
    }

/*deleteAll(): void - Elimina todos los objetos presentes en el archivo.*/
    async deleteAll(){
        await fs.writeFile(`./${this.ruta}`, '');
        console.log('Todos los objetos fueron eliminados');
    }
}

module.exports = Contenedor






