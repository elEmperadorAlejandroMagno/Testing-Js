// MIN

function getMin(num1, num2) {
  if (num1 < num2) return num1

  return num2
}

getMin(44, 10)


// Recursive

function isEven(n) {
  if (n == 0) return true
  else if (n == 1) return false
  else if (n < 0) return isEven(-n)
  else return isEven(n - 2)

}

isEven(-3)


// bean counting

function countChar(string, ch) {
  let counting = 0
  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() == ch.toLowerCase()) {
      counting++
    }
  }
  console.log(`The string have ${counting} ${ch}`)
  return counting
}

function countBs(string) {
  let counting = countChar(string, "b")
  console.log(counting)
}

countBs("I bought this book in the library")
console.log(countChar("I like the coconut cream for my face", "c"))


//? Objects
let car = {
  wheels: 4,
  windows: 6,
  doors: 6,
  horsePower: 281
}

console.log("wheels" in car)
// ---> true

console.log("color" in car)
// ----> false