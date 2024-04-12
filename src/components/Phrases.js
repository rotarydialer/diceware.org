import React from "react";
import { generateNPhrases } from '../diceware';

const Phrases = React.memo(({ wordCount, phraseCount }) => {
  if ( !wordCount || !phraseCount ) return;

  const generatedPhrases = generateNPhrases(phraseCount, wordCount);

  return (
    <div>
      <h2>Here { phraseCount > 1 ? 'are' : 'is' } { phraseCount } phrase{ phraseCount > 1 ? 's' : ''} with { wordCount } word{ wordCount > 1 ? 's' : ''}{ phraseCount > 1 ? ' each' : ''}:</h2>
      <div>
        {generatedPhrases.map((phrase, index) => (
          <div key={index} className='phrase'>{ phrase.join( ' ' ) }</div>
        ))}
      </div>
    </div>
  )
}, areEqual);

function areEqual(prevProps, nextProps) {
  return prevProps.wordCount === nextProps.wordCount &&
         prevProps.phraseCount === nextProps.phraseCount;
}

export default Phrases;