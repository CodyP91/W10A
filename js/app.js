function addAndMultiply(num1, num2) {
    const sum = num1 + num2;
    const product = sum * 5;
    return product;
  }
  
  function checkStringLength(str) {
    return str.length > 10;
  }
  
  function findFirstStartingWith(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].startsWith("ph")) {
        return arr[i];
      }
    }
    return null;
  }
  
  console.log(addAndMultiply(2, 3));
  console.log(addAndMultiply(10, 20));
  console.log(addAndMultiply(-1, 5));
  
  console.log(checkStringLength("Hello, world!"));
  console.log(checkStringLength("Short"));
  console.log(checkStringLength("This string is longer than 10 characters"));
  
  console.log(findFirstStartingWith(["apple", "banana", "pear", "phoenix"]));
  console.log(findFirstStartingWith(["phone", "elephant", "phonograph"]));
  console.log(findFirstStartingWith(["cat", "dog", "bird"]));
  
  