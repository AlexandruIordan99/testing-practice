function caesarCipher(stringToEncrypt, factor){
  //get character from string
  //match it to position in alphabet
  //iteration: get character at position of the current char + factor
  //add that to the encryptedString variable
  //return encrypted string
  let alphabetArrayUppercase =[];
  let alphabetArrayLowercase =[];
  let i;
  for(let i=65; i <=90; i++){
    alphabetArrayUppercase.push(String.fromCharCode(i));
  }
  for (i = 97; i <=122; i++){
    alphabetArrayLowercase.push(String.fromCharCode(i));
  }
  let stringToEncryptArray = stringToEncrypt.split("");

  for(let j = 0; j < stringToEncryptArray.length; j++){
    if(stringToEncryptArray[j] in alphabetArrayLowercase){
      if(j+factor > alphabetArrayLowercase.length){
        stringToEncryptArray[j] = alphabetArrayLowercase[factor - (alphabetArrayLowercase.length-1-j)];
      } else {
        stringToEncryptArray[j] = alphabetArrayLowercase[j + factor];
      }
    }
    else if (stringToEncryptArray[j] in alphabetArrayLowercase){
      if(j+factor > alphabetArrayLowercase.length){
        stringToEncryptArray[j] = alphabetArrayLowercase[factor - (alphabetArrayLowercase.length-1-j)];
      } else{
        stringToEncryptArray[j] = alphabetArrayUppercase[j + factor];
      }
    }
  }


  for (let i = 0; i < stringToEncryptArray.length; i++){

  }

  return "ended"
}

console.log(caesarCipher("A", 1));

module.exports=caesarCipher;