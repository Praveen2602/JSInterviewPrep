const isPalindrome=(str)=>{
 str=str.toLowerCase();
 var r_str=str.split("").reverse().join("");

 return str===r_str?true:false;
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("this is Awesome"));