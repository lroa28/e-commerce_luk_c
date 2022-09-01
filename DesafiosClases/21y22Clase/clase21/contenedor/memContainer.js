class MemoryContainer {
    constructor () {
        this.elements = [];
    }
//1re metodo, de contenedor en memoria general. Acceso mas cercano a los datos, relacionado como un DAO.
//devuelve todos los elementos.
getAll = () => {
    return [...this.elements] //todo el arreglo anterior como dato plano
}
//metodo para guardar
save =(newElements) => {
    this.elements.push(newElements);
    return newElements
}
}
export default MemoryContainer;