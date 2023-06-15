/**
 * 
 * Implement a function caslled count unique values, wich accepts a sorted
 * arrat , and counts the unique values inthe array . There xan ve 
 * negatie nnumbers in the array, but it always be sorteed
 * 
 * 
 */

function countUniqueValues(array){
    let frecArray = {}
    let res = 0;
    for(let i = 0 ; i < array.length ; i++ ){
        if(frecArray[array[i]] ){
            frecArray[array[i]]++;
        }
        else{
            frecArray[array[i]] = 1;
            res ++;
        }
    }
    return res;
} 


console.log(countUniqueValues([1,1,1,2,3,3,4,4,5,6]))