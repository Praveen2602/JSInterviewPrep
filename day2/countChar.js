const countChar=(str,char)=>{
 str = str.toLowerCase();
 char = char.toLowerCase();
 str = str.split("").reduce((acc,currChar)=>{
    if(currChar===char){
         acc++;
    }
    return acc;
 },0)
 console.log(str);
}

console.log(countChar("MissiPi","I"))