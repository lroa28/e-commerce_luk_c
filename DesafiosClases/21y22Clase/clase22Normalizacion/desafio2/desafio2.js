import holding from '././holding.json' assert {type: 'json'}
//console.log(holding);

import { normalize, schema, denormalize } from "normalizr";
import fs from 'fs';
import util from 'util';

//análisis de adentro hacia afuera
const employeeSchema = new schema.Entity('employees')
const companyeSchema = new schema.Entity('companies',{
    gerente: employeeSchema, 
    encargado: employeeSchema, 
    empleados:[employeeSchema]
}) 
const holdingSchema = new schema.Entity('holdings',{
    empresas:[companySchema]
})

//Aca se ve todo sintetizado:
const normalizeObject = normalize(holding, holdingSchema)
console.log(JSON.stringify (normalizeObject, null, '\t'))

//Desnormalizamos, vemos todo completo
const denormalizeObject = normalize(normalizeObject.result, holdingSchema, normalizeObject.entities)
console.log(JSON.stringify (denormalizeObject, null, '\t'))