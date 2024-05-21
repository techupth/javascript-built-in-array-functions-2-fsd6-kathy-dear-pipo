function isPalindrome(string) {
  // Start coding here
  // โดย Function นี้จะทำการตรวจสอบ string ที่ได้รับเข้ามาว่าเป็นคำที่สามารถอ่านจากหลังไปหน้าหรือหน้าไปหลังแล้วมีความหมายเหมือนกันหรือไม่ คำแบบนี้เรียกว่า Palindrome
  return string === string.split('').reverse().join('');
}

//Example case
console.log(isPalindrome('reviver')); // true
console.log(isPalindrome('บวบ')); // true
console.log(isPalindrome('deliver')); // false
