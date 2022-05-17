let nombre = "pepe"
let edad= 25
let precio= 99.90
let seriesFavoritas= ["Dark", "Mr Robor", "Castlevania"]

//Array de objeto con propiedades
let peliculasFavoritas= [
    {  
    nombre: "Titanic",
    anioEstreno: "1998",
    protagonistas: ["Leonardo Di Caprio", "Kate Winslet"]
    },
    { 
    nombre: "Avatar",
    anioEstreno: "2010",
    protagonistas: ["Sam Worthing", "Zoe Saldaña"]
    },
]
console.log (nombre)
console.log (edad)
console.log (precio) 
console.log (seriesFavoritas)
console.log (peliculasFavoritas)

//Forma abreviada:
edad ++
//Otra forma de sumar: edad= edad + 1
console.log (edad)

//Agregar una serie al Array seriesFavoritas
seriesFavoritas.push ("Bridgerton")
console.log (seriesFavoritas) 