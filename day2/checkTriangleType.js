const checkTriangleType=(a,b,c)=>{
    if(a===b && b===c) return "equilateral";
    if(a===b||b===c||a===c) return "isosceles";


return "Scalene";
}

console.log(checkTriangleType(3,4,3));
console.log(checkTriangleType(5,5,5));
console.log(checkTriangleType(2,3,4));