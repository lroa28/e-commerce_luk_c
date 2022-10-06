import {normalize, schema, denormalize} from 'normalizr'

import empresa from './empresa.json' assert {type: "json"}
//console.log(empresa)

import fs from 'fs';
const company = JSON.parse(fs.readFileSync ('./empresa.json', 'utf-8'));
console.log(company)

// correr= >node .\desafio1.js

/*Resolucion*/
// Definimos un esquema de empleados
const employeeSchema = new schema.Entity('employees')

// Definimos un esquema de company
const companySchema = new schema.Entity('companies',{ 
    gerente: employeeSchema,
    encargado: employeeSchema,
    empleados: [employeeSchema]

})

//NORMALIZAR
const normalizedObject = normalize(company, companySchema);
console.log(JSON.stringify(normalizedObject,null, '\t'));

//DESNORMALIZAR input es el iD que es el result, esquema padre, entidades realizadas...
const deormalizedObject = denormalize( normalizedObject.result, companySchema, normalizedObject.entities);
console.log(JSON.stringify(denormalizedObject,null, '\t'));