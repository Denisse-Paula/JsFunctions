//Iteracion#2:Busca la palabra mas larga
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param){
    let longestWord="";
    param.forEach((item)=>{
        if(item.length>longestWord.length)longestWord=item;
    });
    return longestWord;
}
console.log(findLongestWord(avengers));