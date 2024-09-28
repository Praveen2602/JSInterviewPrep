const sumOfDigits=(num)=>{
    let arr=Array.from(String(num),Number);
    return arr.reduce((acccum,currVal)=>acccum+currVal,0);
}
console.log(sumOfDigits(123456));