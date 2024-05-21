function isPalindrome(string) {
  let arrayString = string.split("");
  console.log(arrayString)
  let reverseString = arrayString.reverse();
  console.log(reverseString)
  let joinString = reverseString.join("");
  console.log(joinString)
  let result = (string === joinString)
  return result;
}


//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false