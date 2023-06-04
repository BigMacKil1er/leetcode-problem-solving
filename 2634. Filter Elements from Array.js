var filter = function(arr, fn) {
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i],i)){
            arr2.push(arr[i])
        }
    }
    return arr2
};

var filter2 = function(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        if (!fn(arr[i],i)){
            for (let j = i; j < arr.length-1; j++) {
                arr[j] = arr[j + 1]
            }
            arr.length--
            i--
        }
    }
    return arr
};
console.log(filter2([0,10,20,30], fn = function greaterThan10(n) { return n > 10; }))

console.log(filter2([1,2,3,4,5,6,7,8,9], function squareI(n, i) { return Math.pow(i, 2); }))

console.log(Math.pow(0,2))