function sumZero(arr){
    let left = 0; 
    let rigth = arr.length -1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[rigth]];    
        }
        else if(sum > 0){
            rigth--;
        }
        else
        {
            left++;
        }
    }
}