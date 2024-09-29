const countVowels=(str)=>{
    let vowels= ['a','e','i','o','u'];
    str = str.split('');
    let count=0;
    console.log(str);
    for(let char of str){
        if(vowels.includes(char.toLowerCase())){
            count++;
        }
    }
    return count;
}

console.log(countVowels('this is your destiny'))
console.log(countVowels('fullfill as per your need and dedications'))