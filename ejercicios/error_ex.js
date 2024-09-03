/*
Clase 6 en vídeo | 15/08/2024
Clases (continuación) y manejo de errores
https://www.youtube.com/live/8p6SLAIgwZI?si=MS9o7qIhezx9NTQX&t=902
*/

// 1. Captura una excepción utilizando try-catch

// 2. Captura una excepción utilizando try-catch y finally

// 3. Lanza una excepción genérica

// 4. Crea una excepción personalizada

// 5. Lanza una excepción personalizada

// 6. Lanza varias excepciones según una lógica definida

// 7. Captura varias excepciones en un mismo try-catch

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

let myObject = { 
  "nombre": "alejandro"
}

function getObject(name) {
  if(typeof name !== "string") {
    throw new TypeError ("Solo puedes utilizar una cadena de texto")
  }else if (name ==="hola") {
        throw new InappropriateName (`No puedes utilizar ese nombre "${name}"`)
      } else if(!myObject[name]){
      throw new InfoNotFound("No se ha encontrado información con ese nombre")
    } return console.log(myObject[name])
}

class InappropriateName extends Error {
  constructor(message, name) {
    super(message)
    this.name = name
  }
}

class InfoNotFound extends Error {
  constructor(message, name) {
    super(message)
    this.property = name
  }
}

try {
  getObject("hola")
} catch (e) {
    if (e instanceof TypeError) {
      console.log("Se ha producido un error de tipo:", e.message)
    } else if(e instanceof InappropriateName) {
      console.log("Nombre inapropiado:",e.message)
    } else if (e instanceof InfoNotFound) {
      console.log("Not found:",e.message)
    }
} finally {
    console.log("Redirección de la web")
}
