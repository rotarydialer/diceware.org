import React, { useState } from 'react';
import Phrases from './Phrases';
import { Slider, Text, Box } from '@mantine/core';

export default function Wrapper( ) {
  const [numWords, setNumWords] = useState(4);
  const [endNumWords, setEndNumWords] = useState(4);
  
  const [numPhrases, setNumPhrases] = useState(3);
  const [endNumPhrases, setEndNumPhrases] = useState(3);

  return (
    <div className="wrapper">
      <div className="sliders">
        <Box miw={250}>
          <Text mt="md" size="md">
            <b>phrases:</b> { endNumPhrases }
          </Text>
          <Slider 
            value={numPhrases} 
            min={1}
            max={25}
            onChange={setNumPhrases} 
            onChangeEnd={setEndNumPhrases} 
          />
        </Box>

        <Box miw={120}>
          <Text mt="md" size="md">
            <b>words per phrase:</b> { endNumWords }
          </Text>
          <Slider 
            value={numWords} 
            min={2}
            max={12}
            onChange={setNumWords} 
            onChangeEnd={setEndNumWords} 
          />
        </Box>
      </div>

      <div className='phrases'>
        <Phrases wordCount={ endNumWords } phraseCount = { endNumPhrases } />
      </div>
    </div>
  )
}