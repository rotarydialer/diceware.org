import React, { useEffect, useMemo, useState } from "react";
import { generateNPhrases } from '../diceware';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faRefresh } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from '@mantine/core';

interface PhrasesProps {
  wordCount: number;
  phraseCount: number;
}

const Phrases = React.memo(({ wordCount, phraseCount }: PhrasesProps) => {
  const [refreshCount, setRefreshCount] = useState(0);
  const [tooltipOpenedIds, setTooltipOpenedIds] = useState<boolean[]>(Array(phraseCount).fill(false));

  useEffect(() => {
    setTooltipOpenedIds(Array(phraseCount).fill(false));
  }, [ phraseCount ]);

  const copyToClipboard = (index: number, textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy.trim()).then(() => {
      setTooltipOpenedIds(currentOpeneds => currentOpeneds.map((opened, idx) => idx === index ? true : opened));
  
      setTimeout(() => {
        setTooltipOpenedIds(currentOpeneds => currentOpeneds.map((opened, idx) => idx === index ? false : opened));
      }, 2000);
    }).catch(err => {
      console.error('Error copying text: ', err);
    });
  };

  const generatedPhrases = useMemo(() => {
    return generateNPhrases(phraseCount, wordCount);
  }, [phraseCount, wordCount, refreshCount]);

  if ( !wordCount || !phraseCount ) return;

  return (
    <div>
      <h2 className="phrasesHeader">
        Here { phraseCount > 1 ? 'are' : 'is' } { phraseCount } phrase{ phraseCount > 1 ? 's' : ''} with { wordCount } word{ wordCount > 1 ? 's' : ''}{ phraseCount > 1 ? ' each' : ''}: 
        <span className="refresh-icon" onClick={() => setRefreshCount(count => count + 1)}><FontAwesomeIcon icon={faRefresh} /></span>
      </h2>
      
      <div>
        {generatedPhrases.map((phrase, index) => (
          <div key={index} className='phrase'>
            { phrase.join( ' ' ) }

            <Tooltip
              label="Copied!"
              opened={tooltipOpenedIds[index]}
              position="right"
              withArrow
            >
              <FontAwesomeIcon icon={faCopy} className="copy-icon" onClick={() => copyToClipboard(index, phrase.join(' '))} />
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  )
}, areEqual);

function areEqual(prevProps: PhrasesProps, nextProps: PhrasesProps) {
  return prevProps.wordCount === nextProps.wordCount &&
         prevProps.phraseCount === nextProps.phraseCount;
}

export default Phrases;