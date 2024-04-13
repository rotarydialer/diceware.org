import wordlist from './resources/wordlist.json';

const createWordMap = () => {
  Object.entries(wordlist).forEach((token) => {
    if (token[0] && token[1]) {
      codeWordMap.set(token[0], token[1]);
    }
  });

  return codeWordMap;
};

let codeWordMap = new Map();
codeWordMap = createWordMap();

export const countTokens = () => {
  const numTokens = Object.entries(wordlist).length;

  createWordMap();

  return `Found ${numTokens} words to build phrases with.`;
}

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const concatDieRolls = (numSides = 6, numDigits = 5) => {
  let rolls = [];
  for (let i = 0; i < numDigits; i++) {
    rolls.push(getRandomInt(1, numSides));
  }

  return rolls.join("");
};

export const generatePhrase = (wordCount = 1) => {
  let codesRandomized = [];

  for (let i = 0; i < wordCount; i++) {
    codesRandomized.push(concatDieRolls());
  }

  let phrase = [];

  for (let p = 0; p < codesRandomized.length; p++) {
    phrase.push(codeWordMap.get(codesRandomized[p]));
  }

  return phrase;
}

export const generateNPhrases = (phraseCount = 1, wordCount = 4) => {
  const phrases = [];

  for (let c = 0; c < phraseCount; c++) {
    phrases.push(generatePhrase(wordCount));
  }

  return phrases;
}