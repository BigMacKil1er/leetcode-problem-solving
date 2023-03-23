var lengthOfLongestSubstring = function(s) {
    if(s.length == 1){
        let a = 1;
    } else {
        let a = 0;
    }
    const unicChar = [];
    if(s.length == 1){
        unicChar.push(s)
    } else {
        for(let i = 1; i < s.length; i++){
            if(!unicChar.includes(s[i])){
                unicChar.push(s[i])
            }
        }
    }
    
    return unicChar.length
};
console.log(lengthOfLongestSubstring(" "));

let arr = [1, 2, 3, 4]
// let arrSlised = arr.slice(1, 3);
let arrSlised = arr.shift();
console.log(arr, arrSlised);