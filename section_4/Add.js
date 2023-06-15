function charCountCommentedPseudocode(str){
    //make object return at end 
    //loop over string , foreach character ... 
        // if the char is a number/letter AND is a key in object, add one to count 
        //if the char is a number/letter AND not in object, add it to objerct and set value 1
        //if charact5er us somethinf else (space, period, etc. ) dont do anything 
        //return object at end
}

function charCount(str){
    //make object return at end 
    var result = {};
    //loop over string , foreach character ... 
    for(var i = 0 ; i < str.length; i++){
        var char = str[i];
        if(result[char] > 0){
            result[char]++;
        }
        else{
            result[char]=1;
        }
    }
        // if the char is a number/letter AND is a key in object, add one to count 
        //if the char is a number/letter AND not in object, add it to objerct and set value 1
        //if charact5er us somethinf else (space, period, etc. ) dont do anything 
        console.log(result);
        //return object at end
        return result;
}

charCount("pide Que yo me la Pike ");