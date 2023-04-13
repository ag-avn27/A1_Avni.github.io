const names = ['Alice', 'Bob', 'Charlie', 'David'];

for (let i = 0; i < names.length; i++) {
  
  if (names[i].length > 4) {
    
    const uppercaseName = names[i].toUpperCase();
    
    console.log(uppercaseName);
  }
}


const sentence = 'The lazy dog was sleeping on the road';


const words = sentence.split(' ');
for (let i = 0; i < words.length; i++) {
  
  if (words[i][0] === 't' || words[i][0] === 'T') {
    
    words[i] = 'T' + words[i].slice(1);
  }
}

const newSentence = words.join(' ');

console.log(newSentence);
















