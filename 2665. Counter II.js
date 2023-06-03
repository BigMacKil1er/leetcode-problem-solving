var createCounter = function(init) {
    let res = init
    return {
        increment: function() {
            init++
        },
        decrement: function() {
            init--
        },
        reset: function (){
            init = res
        }
    }
};
const count = createCounter(5)
count.increment()
count.increment()
console.log()