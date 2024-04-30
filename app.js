/*
1. Do the below programs in anonymous function & IIFE
a. Print odd numbers in an array
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
;(function () {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) sum += arr[i]
  }
  console.log(sum)
})(arr)

//b. Convert all the strings to title caps in a string array.

let strArray = ['hello', 'welcome', 'to', 'mars']
;(function () {
  for (let i = 0; i < strArray.length; i++) {
    strArray[i] = strArray[i][0].toUpperCase() + strArray[i].slice(1)
  }
  console.log(strArray)
})(strArray)

//c. Sum of all numbers in an array
// using the array - arr from above
;(function () {
  let sum = arr.reduce((a, b) => a + b)
  console.log(sum)
})(arr)

//d. Return all the prime numbers in an array
//using the same array - arr

function isPrime(num) {
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
;(function (arr) {
  const primes = []

  for (let num of arr) {
    if (isPrime(num)) {
      primes.push(num)
    }
  }
  console.log(primes)
})(arr)

//e. Return all the palindromes in an array
var palinArray = ['racecar', 'mars', 'suitcase', 'level']

function isPalindrome(word) {
  const reversedWord = word.split('').reverse().join('')
  return word === reversedWord
}

;(function (arr) {
  const palindromes = []

  for (let word of arr) {
    if (isPalindrome(word)) {
      palindromes.push(word)
    }
  }

  console.log(palindromes)
})(palinArray)

//f. return median of two sorted arrays of same size.
let num1 = [1, 3, 5]
let num2 = [2, 4, 6]
;(function () {
  let num = num1.concat(num2).sort()
  const n = num.length
  let median
  if (n % 2 !== 0) {
    // Odd length
    median = num[Math.floor(n / 2)]
  } else {
    // Even length
    const middle1 = num[n / 2 - 1]
    const middle2 = num[n / 2]
    median = (middle1 + middle2) / 2
  }
  console.log(median)
})(num1, num2)

//g. Remove duplicated from an array.
let arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5]
;(function () {
  console.log([...new Set(arrayWithDuplicates)])
})(arrayWithDuplicates)

//h. rotate an array k times
const array = [1, 2, 3, 4, 5]
const k = 3
;(function (arr, k) {
  const n = arr.length
  k = k % n

  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop())
  }

  console.log(arr)
})(array, k)
