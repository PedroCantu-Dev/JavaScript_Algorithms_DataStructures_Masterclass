function factorial(num){
    if(num===1) return 1;
    return num * factorial(num-1)
}

//basic pitfalls
//no base case
function factorial_base(num){
    if(num===1) console.log(1);
    return num * factorial(num-1)
}
//forgetting to return or returning the wrong thing
//example 
function factorial_stackOF(num){
    if(num===1) return 1;
    return num * factorial(num)
} 

//stack overflow that is the same to , stack size exceed