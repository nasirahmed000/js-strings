function reverseString(str) {
    let reversedStr = '';
  
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
  
    return reversedStr;
  }
  
  // Example usage
  const str = 'Hello, World!';
  const reversedStr = reverseString(str);
  console.log(reversedStr); // Output: !dlroW ,olleH
  