import React from "react";
import { generateNPhrases } from '../diceware';

export default function Phrases( props ) {
  const { wordCount, phraseCount } = props;

  if ( !wordCount || !phraseCount ) return;

  const generatedPhrases = generateNPhrases(phraseCount, wordCount);

  return (
    <div>
      <>Here { phraseCount > 1 ? 'are' : 'is' } { phraseCount } phrase{ phraseCount > 1 ? 's' : ''} with { wordCount } word{ wordCount > 1 ? 's' : ''}{ phraseCount > 1 ? ' each' : ''}:</>
      <ul>
        {generatedPhrases.map((phrase, index) => (
          <li key={index}>{ phrase.join( ' ' ) }</li>
        ))}
      </ul>
    </div>
  )
}