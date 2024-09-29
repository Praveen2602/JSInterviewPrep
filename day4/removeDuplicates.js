const removeDuplicates=(arr)=>{
    let newArr = [...new Set(arr)];
    // console.log(newArr);
    return newArr;
}

console.log(removeDuplicates([1,2,7,4,3,4,5,8,2,1,3,4,1]));