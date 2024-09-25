const genrateHash=(str)=>{
    if(str.length>280||str.trim()===0){
        return false;
    }
    str = str.split(" ");
    console.log(str)
    str=str.map((currElem)=>
        currElem.charAt(0).toUpperCase()+currElem.slice(1));

    str = `#${str.join("")}`;
    return str;
 }
console.log(genrateHash("my name is praveen pandey"));