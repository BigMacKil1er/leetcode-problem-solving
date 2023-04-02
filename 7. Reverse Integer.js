var reverse = function(x) {
    if (String(x)[0] === '-') {
        x = String(x).replace('-', '')
        x = x.split('').reverse()
        x.unshift('-')
            return (+x.join('') < -2147483647) ? 0: +x.join('')
    } else {
        return (+(String(x).split('').reverse().join('')) > 2147483647) ? 0: +(String(x).split('').reverse().join(''))
    }
};

console.log(reverse(-123))

