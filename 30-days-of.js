//Q1 Link--https://leetcode.com/problems/create-hello-world-function/description/

var createHelloWorld = function() {
    
    return function(...args) {
       return "Hello World" 
    }
};


//Q2 Link--https://leetcode.com/problems/counter/description/

var createCounter = function(n) {
    var a = n;
    return function() {

       return a++;
    };
};


//Q3 Link--https://leetcode.com/problems/counter-ii/description/

var createCounter = function(init) {
    let a = init;
   return {
       increment: function(){
           init += 1;
           return init;
       },
       decrement: function(){
           init--;
           return init;
       },
       reset: function(){
           init = a;
           return init
       }
       
   } 
};

//Q4 Link--https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/

var map = function(arr, fn) {
    let retArr = [];
    for(let i=0; i<arr.length; i++){
        let newValueAtCurrentIndex = fn(arr[i],i);
        retArr.push(newValueAtCurrentIndex);
    }
    return retArr;
};

//Q5 Link--
