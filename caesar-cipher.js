function caesarCipher(stringToEncrypt, factor){
  let alphabetArrayUppercase =[];
  let alphabetArrayLowercase =[];

  for(let i=65; i <=90; i++){
    alphabetArrayUppercase.push(String.fromCharCode(i));
  }
  for (i = 97; i <=122; i++){
    alphabetArrayLowercase.push(String.fromCharCode(i));
  }

  let encryptedArray = [];

  for (let char of stringToEncrypt){
    if (alphabetArrayUppercase.includes(char)){
      let index = alphabetArrayUppercase.indexOf(char);
      encryptedArray.push(alphabetArrayUppercase[(index + factor) % 26]);
    }
    else if (alphabetArrayLowercase.includes(char)){
      let index = alphabetArrayLowercase.indexOf(char);
      encryptedArray.push(alphabetArrayLowercase[(index + factor) % 26]);
    } else{
      encryptedArray.push(char);
    }
  }
  return encryptedArray.join("");
}

module.exports=caesarCipher;