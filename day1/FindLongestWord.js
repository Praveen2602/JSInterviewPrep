FindLongestWord=(str)=>{
    if(str.trim()===0){
        return false;
    }
    const words=str.split(" ");
    //console.log(str);
    return words.reduce((acc,currWrd)=>(currWrd.length>acc.length?currWrd:acc),"");
}
console.log(FindLongestWord("this is awesome but terified opportunity"));

