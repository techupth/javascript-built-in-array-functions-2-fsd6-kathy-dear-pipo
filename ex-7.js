function isPalindrome(string) {
  // Start coding here
  let newstring = string.split("");
  newstring.reverse();
  newstring = newstring.join("");
  // console.log(string);
  // console.log(newstring);
  if (newstring === string) return true;
  else return false;
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
