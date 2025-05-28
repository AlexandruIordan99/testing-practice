function caesarCipher(stringToEncrypt, factor){
  //get character from string
  //match it to position in alphabet
  //iteration: get character at position of the current char + factor
  //add that to the encryptedString variable
  //return encrypted string
  let alphabetArrayUppercase =[];
  let i;
  for(let i=65; i <=90; i++){
    alphabetArrayUppercase.push(String.fromCharCode(i));
  }
  console.log(alphabetArrayUppercase);
  let alphabetArrayLowercase =[];
  for (i = 97; i <=122; i++){
    alphabetArrayLowercase.push(String.fromCharCode(i));
  }
  console.log(alphabetArrayLowercase);
  let stringToEncryptArray = stringToEncrypt.split("");

  for(let j = 0; j < stringToEncryptArray.length; j++){
    if(j in alphabetArrayLowercase || j in alphabetArrayUppercase){

    }
  }

  return "ended"
}

caesarCipher("A", 1);