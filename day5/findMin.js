const findMin=(arr)=>{
    arr=arr.sort((a,b)=>{
        if(b>a) return -1;
    });
    return arr[0];
}


console.log(findMin([4,6,2,1,3,7]));