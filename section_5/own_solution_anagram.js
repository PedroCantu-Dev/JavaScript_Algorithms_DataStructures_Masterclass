function validAnagram(palabra1, palabra2){
    // add whatever parameters you deem necessary - good luck!
    if(palabra1.length != palabra2.length){
        return false;
    }

    for(let i = 0 ; i < palabra1.length; i++){
        if(palabra1[i] != palabra2[palabra2.length -1 - i ]){
            return false;
        }
    }
    return true;
  }

  console.log(validAnagram('asdfghjklñ','ñlkjhgfdsa'));
  console.log(validAnagram('asdfghjklñ','ñlkjhgfda'));
  console.log(validAnagram('qwertyu','uytrewq'));
