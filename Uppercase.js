function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  const inputString = prompt("Enter a word to capitalize:");
  const outputString = capitalizeFirstLetter(inputString);
  console.log(outputString);