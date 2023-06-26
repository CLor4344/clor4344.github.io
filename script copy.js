const str = 'hello';
console.log(str.slice(0,2));
function solution(str){
    if(str.length === 0)return "";
    return str[str.length-1]+solution(str.slice(0,str.length-1));

}
console.log(solution(str));