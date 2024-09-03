/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma ✓

function sumCalculator(a, b) {
  let number1 = a;
  let number2 = b;
  let result = a + b;
  console.log(result)
}
sumCalculator(4,8);

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function getBiggestNumber(array) {
  let max = arr[0]
  let maxIndex = 0
  for (let i = 1; i < array.length; i++) {
    if(array[i] > max){
      max = arr[i]
      maxIndex = i
    }
  }
  console.log(`The biggest number of the array is ${max} and its index is ${maxIndex}`)
}

getBiggestNumber([2,6,8,11,17,21,7])

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
let vocals = ["a","e","i","o","u"]

function getVocals(text) {
  let vocalCounter = 0
  for (let letter of text) {
    for (let i = 0; i < vocals.length; i++) {
      if(letter == vocals[i]) {
        vocalCounter++
      }
    }
  }
  console.log(vocalCounter)
}

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
const stringArray = ["hola","warzone","choro"]

function stringToUpperCase(array) {
  let newArray = [...array].map(str => str.toUpperCase())
  console.log(newArray)
}
stringToUpperCase(["rozco","alejandro","black ops 6"]);
stringToUpperCase(stringArray);

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
let primeNumber = false

function checkPrimeNumber(num) {
  if (!num) {
    return console.log('You have to introduce a number')
  }else {
    if (!(num % 2 == 0)) {
      primeNumber = true
      console.log(`${num} it is a prime number`)
    }else console.log(`${num} it is an even number`)
  }
}

checkPrimeNumber(6)
checkPrimeNumber(9)

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
function getNewArray(arr1, arr2){
  let set1 = new Set(arr1)
  let set2 = new Set(arr2)
  
  let commonElements = [...set1].filter(item => set2.has(item))
  return commonElements
}
getNewArray([2,4,8,9,1,3,33], [2,6,9,89,66,41,33,1])

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumEvenNumbers(arr) {
  let sum = 0
  arr.forEach(num => {
    if (num % 2 === 0) {
      sum += num
    }
    return sum
  })
  console.log(sum)
}

sumEvenNumbers([2,4,3,6,8,11,27])


// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function numbersSquare(arr) {
  let newArr = []
  arr.forEach(num => {
    let numberMath = num * num
    newArr.push(numberMath)
  })
  console.log(newArr)
}

numbersSquare([2,3,5])

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function reversedStr(str) {
  let newStr = ""
  
  for (let i = str.length -1; i >= 0; i--) {
    newStr += str[i]
  }
  console.log(newStr)
}

reversedStr("Esto es un string")

// 10. Crea una función que calcule el factorial de un número dado
function factorialMath(num) {
  let result = 1

  for (let i = 1; i <= num; i++) {
    result *= i
    console.log(result)
  }
}

factorialMath(4)