/**
 * 
 * Implement a function caslled count unique values, wich accepts a sorted
 * arrat , and counts the unique values inthe array . There xan ve 
 * negatie nnumbers in the array, but it always be sorteed
 * 
 * 
 */

function countUniqueValues(array){
    if(arr.length === 0 ) return 0;
   var i = 0 ;
   for(var j = 1; j< array.length ; j++){
    if(arr[i] !== arr[j]){
        i++;
        arr[i] = arr[j]
    }
   }
} 


console.log(countUniqueValues([1,1,1,2,3,3,4,4,5,6]))