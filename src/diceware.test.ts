import { countTokens, generatePhrase, generateNPhrases } from './diceware';
import wordlist from './resources/wordlist.json';

describe('Diceware functions', () => {
  describe('countTokens', () => {
    it('should return correct count of tokens', () => {
      const expectedCount = Object.entries(wordlist).length;
      const countMessage = countTokens();
      expect(countMessage).toBe(`Found ${expectedCount} words to build phrases with.`);
    });
  });

  describe('generatePhrase', () => {
    it('should generate a phrase of correct length', () => {
      const wordCount = 5;
      const phrase = generatePhrase(wordCount);
      expect(phrase.length).toBe(wordCount);
    });

    it('should generate a phrase with valid words from the wordlist', () => {
      const wordCount = 3;
      const phrase = generatePhrase(wordCount);
      phrase.forEach(word => {
        expect(Object.values(wordlist)).toContain(word);
      });
    });
  });

  describe('generateNPhrases', () => {
    it('should generate the correct number of phrases', () => {
      const phraseCount = 4;
      const phrases = generateNPhrases(phraseCount, 3);
      expect(phrases.length).toBe(phraseCount);
    });

    it('each phrase should contain the correct number of words', () => {
      const phraseCount = 3;
      const wordCount = 2;
      const phrases = generateNPhrases(phraseCount, wordCount);
      phrases.forEach(phrase => {
        expect(phrase.length).toBe(wordCount);
      });
    });
  });
});
