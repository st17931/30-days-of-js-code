//Q1 Link--https://leetcode.com/problems/create-hello-world-function/description/

var createHelloWorld = function() {
    
    return function(...args) {
       return "Hello World" 
    }
};

//Q2 Link--https://leetcode.com/problems/counter-ii/description/

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
