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

