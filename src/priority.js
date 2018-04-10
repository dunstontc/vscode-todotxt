const path = require('path');
const fs = require('fs');
const dest = path.join(__dirname, 'scopes.json');
const patterns = [];

const makeScope = (letter) => {
  const scope = {
    "begin": `^(\\()([${letter}${letter.toUpperCase()}])(\\))`,
    "beginCaptures": {
      "1": { "name": "punctuation.definition.priority.todo" },
      "2": { "name": "variable.priority.todo" },
      "3": { "name": "punctuation.definition.priority.todo" },
    },
    "end": "$",
    "name": `meta.priority.${letter}.todo`,
    "patterns": [
      { "include": "#date" },
      { "include": "#strings" },
      { "include": "#variable" },
    ],
  };
  patterns.push(scope);
};

// const logScopesA = () => {
//   for(i = 0; i < 26; i++) {
//     currentLetter = "letter " + (i + 10).toString(36) + " ";
//     console.log(currentLetter);
//   }
// };

// const logScopesB = () => {
//   const bet = [...Array(26).keys()];
//   for(i of bet) {
//     const currentLetter = (i + 10).toString(36);
//     console.log(currentLetter);
//   }
// };

// const logScopesC = () => {
//    [...Array(26).keys()].forEach((i) => {
//     makeScope((i + 10).toString(36));
//   });
// };

const logScopesD = () => {
  [...Array(26).keys()].forEach(letter => makeScope((letter + 10).toString(36)));
};


logScopesD();
fs.writeFile(dest, JSON.stringify(patterns), (err) => { if(err) { throw err; }});
