class MemoryContainer {
    constructor () {
        this.elements = [];
    }
//1re metodo, de contenedor en memoria general. Acceso mas cercano a los datos, relacionado como un DAO.
getAll = () => {
    return [...this.elements] //Lo expresiamos. Devuelve todos los elementos. Todo el arreglo anterior como dato plano
}
//metodo para guardar
save =(newElements) => {
    this.elements.push(newElements);
    return newElements
}
}
export default MemoryContainer;