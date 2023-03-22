// не решено нужно решить с помощью ооп


// my solution
// 
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]





// var addTwoNumbers = function(l1, l2) {
//     return (String(+l1.join('') + +l2.join('')).split('').reverse()).map(string => +string)
// };

// console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9])); 

// and another solution

var addTwoNumbers = function(l1, l2) {
    let str = '';
    let strScd ='';
    const listRevers = [];
    for(let i = 0; i < l1.length; i++){
        str+=l1[i]
    }
    for(let i = 0; i < l2.length; i++){
        strScd+=l2[i]
    }
    let sumDig = +str + +strScd;
    
    for(let i = 0; i < String(sumDig).length; i++){
        listRevers.unshift(String(sumDig)[i])
    }
    return listRevers.map(string => +string)
}
console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]));