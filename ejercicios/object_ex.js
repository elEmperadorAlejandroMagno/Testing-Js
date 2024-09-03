/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.twitch.tv/videos/2218300512?t=00h17m10s
*/

// 1. Crea un objeto con 3 propiedades

// 2. Accede y muestra su valor

// 3. Agrega una nueva propiedad

// 4. Elimina una de las 3 primeras propiedades

// 5. Agrega una función e invócala

// 6. Itera las propiedades del objeto

// 7. Crea un objeto anidado

// 8. Accede y muestra el valor de las propiedades anidadas

// 9. Comprueba si los dos objetos creados son iguales

// 10. Comprueba si dos propiedades diferentes son iguales

const auto = {
  "doors" : 4,
  "windows" : {
    "doorWindow" : 4,
    "frontWindow": 1,
    "backWindow" : 1
  },
  "breaks" : 4,
  "color": "red",
  "horsepower": 410,
  "engine" : sound => {
    console.log(sound)
  }
};

auto.ruedas = 4;

let { color: pintura, horsepower: potencia} = auto;

console.log(pintura);
console.log(potencia + "hp");
auto.engine("bruum,bruum,brum");

delete auto.engine
console.log(auto)

for (key in auto) {
console.log(key + ": " + auto[key])
}