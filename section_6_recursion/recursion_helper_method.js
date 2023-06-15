function collectOdds(nums){
let result = [];

}


let result = [];

function collectOdds2(nums){
     result.push
    }

function collectOddValuesRec(arr){
    let result = [];
    function helper(helperInput){
        if(helperInput.length === 0){
            return;
        }

        if (helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr);
    return result;
}

