const names = prompt('Enter a list of names separated by commas (e.g. Alice, Bob, Charlie, David):').split(', ');

for (let i = 0; i < names.length; i++) {
  
  if (names[i].length > 4) {
    
    const uppercaseName = names[i].toUpperCase();
    
    console.log(uppercaseName);
  }
}


const sentence = prompt('Enter a sentence:');

const words = sentence.split(' ');
for (let i = 0; i < words.length; i++) {
  
  if (words[i][0] === 't' || words[i][0] === 'T') {
    
    words[i] = 'T' + words[i].slice(1);
  }
}

const newSentence = words.join(' ');

console.log(newSentence);













