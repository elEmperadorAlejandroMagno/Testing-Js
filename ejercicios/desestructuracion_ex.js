/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.twitch.tv/videos/2218300512?t=00h17m10s
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

// 3. Usa desestructuración para extraer dos propiedades de un objeto

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

// 6. Usa propagación para combinar dos arrays en uno nuevo

// 7. Usa propagación para crear una copia de un array

// 8. Usa propagación para combinar dos objetos en uno nuevo

// 9. Usa propagación para crear una copia de un objeto

// 10. Combina desestructuración y propagación

let numerospequeños = [1,24,17,8,91,36,98,85,4]
let numerosGrandes = [103, 288, 333, 109, 503]

let [num1, num2] = numerospequeños

const objecto = {
  "color": "naranja",
  "material": "plástico",
  "forma": "redonda"
}

const persona = {
  "nombre": "alejandro",
  "edad": 24,
  "altura": 163,
  "idiomas": {
    "español": "idioma materno",
    "ingles": "avanzado",
    "ruso": "principiante"
  }
}

let { color: pintura, material, forma, uso = "jugar basketball" } = objecto

let { nombre, alias = "ale", edad, idiomas: { español, ingles, ruso } } = persona

const numeros = [...numerospequeños, ...numerosGrandes]
console.log(numeros)
let numerosGanadores = [...numerosGrandes]

const deportista = {...persona, deporte: { ...objecto } }

console.log(deportista["idiomas"])

