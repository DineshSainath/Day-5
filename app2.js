//arrow functions
//a. Print odd numbers in an arrow

let arr = [1, 2, 3, 4, 5]

let odd = (arr) => {
  arr.forEach((num) => {
    if (num % 2 !== 0) console.log(num)
  })
}
odd(arr)

//b. convert all the strings to title caps in a string array
let strArray = ['hello', 'welcome', 'to', 'mars']
let titleCaps = (strArray) => {
  for (let i = 0; i < strArray.length; i++) {
    strArray[i] = strArray[i][0].toUpperCase() + strArray[i].slice(1)
  }
  console.log(strArray)
}
titleCaps(strArray)

//c. Sum of all numbers in an array
let sum = (arr) => {
  let sum = arr.reduce((a, b) => a + b)
  console.log(sum)
}
sum(arr)

//d. Return all the prime numbers in an array
let isPrime = (num) => {
  if (num <= 1) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}
let checkPrimeArray = (arr) => {
  const primes = []
  for (let num of arr) {
    if (isPrime(num)) {
      primes.push(num)
    }
  }
  console.log(primes)
}

checkPrimeArray(arr)

//e. Return all the palindromes in an array

var palinArray = ['racecar', 'mars', 'suitcase', 'level']

let isPalindrome = (word) => {
  const reversedWord = word.split('').reverse().join('')
  return word === reversedWord
}

let checkPalindrome = (arr) => {
  const palindromes = []

  for (let word of arr) {
    if (isPalindrome(word)) {
      palindromes.push(word)
    }
  }

  console.log(palindromes)
}
checkPalindrome(palinArray)
