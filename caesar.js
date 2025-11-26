function caesarCipher(str, shift) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

   
    if (char >= 'A' && char <= 'Z') {
      let charCode = char.charCodeAt(0); 
      let shiftedCharCode = ((charCode - 65 + shift) % 26) + 65; 
      result += String.fromCharCode(shiftedCharCode); 
    }
    
    else if (char >= 'a' && char <= 'z') {
      let charCode = char.charCodeAt(0);
      let shiftedCharCode = ((charCode - 97 + shift) % 26) + 97;
      result += String.fromCharCode(shiftedCharCode);
    }
    else {
      result += char;
    }
  }
  return result;
}

console.log(caesarCipher("Hello, World!", 3)); 
console.log(caesarCipher("Khoor, Zruog!", -3));
