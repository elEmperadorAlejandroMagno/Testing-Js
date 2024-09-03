/*
Clase 6 en vídeo | 15/08/2024
Clases (continuación) y manejo de errores
https://www.twitch.tv/videos/2225058195?t=00h16m42s
*/

// 1. Crea una clase que reciba dos propiedades

// 2. Añade un método a la clase que utilice las propiedades

// 3. Muestra los valores de las propiedades e invoca a la función

// 4. Añade un método estático a la primera clase

// 5. Haz uso del método estático

// 6. Crea una clase que haga uso de herencia

// 7. Crea una clase que haga uso de getters y setters

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

// 10. Sobrescribe un método de una clase que utilice herencia 

class Car {
  constructor (name, color) {
    this.name = name,
    this.color = color
  }
  intro () {
    console.log(`Yo me llamo ${this.name}`)
  }
  encender(name) {
    console.log(`Encendiendo ${name}...`)
    console.log('brumm...brum,brum...')
  }
}

let ford = new Car("ford Mustang", "redCaramel");
let ferrari = new Car("ferrari 458", "white");

console.log(ford, ferrari)
ferrari.intro()
ferrari.encender("ferrari 458")


class AnotherCar extends Car {
  constructor(name, color, doors) {
    super(name, color)
    this.doors = doors
  }
  encender() {
      console.log("vruum,vrum, vruum...")
    } 
  openDoor() {
    console.log("Left front door oppened")
  }
  closeDoor() {
    console.log("Left front door closed")
  }
}

let landRover = new AnotherCar("Land Rover 4x4", "metal gray", 5)
console.log(landRover)
landRover.openDoor()

// secret values, get and set

class Order {
  #card
  #code
  constructor (card, code, name, products) {
    this.name = name,
    this.#card = card,
    this.#code = code,
    this.products = products
  }
  finishOrder() {
    console.log("Prushase done")
  }
  get product() {
    return this.products
  }
  get cardNumber() {
    return this.#card
  }
  set card (card) {
    this.#card = card
  }
}
let products = {
  "coca cola":250, 
  "oreos":960
}
let order1 = new Order(435655521358, 598, "Alejandro Marvich", products)
console.log(order1)
order1.finishOrder()

// console.log(order1.#car) dato privado
console.log(order1.product)

order1.card = 9895551321;
console.log(order1.cardNumber)

let lamborginni1 = new AnotherCar("lamborginni", "black", 4)
lamborginni1.encender()

