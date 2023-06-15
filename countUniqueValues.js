/**
 * 
 * Implement a function caslled count unique values, wich accepts a sorted
 * arrat , and counts the unique values inthe array . There xan ve 
 * negatie nnumbers in the array, but it always be sorteed
 * 
 * 
 */

function countUniqueValues(array){
    frecArray = {}
    for(let i = 0 ; i < array.length ; i++ ){
        frecArray[array[i]] = (frecArray[array[i]] | 0) +1
    }
    return frecArray;
} 


console.log(countUniqueValues([1,1,1,2,3,3,4,4,5,6]))