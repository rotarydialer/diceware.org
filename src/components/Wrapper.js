import React, { useState } from 'react';
import Phrases from './Phrases';
import { Slider, Text, Box } from '@mantine/core';

export default function Wrapper( props ) {
  const [numWords, setNumWords] = useState(4);
  const [endNumWords, setEndNumWords] = useState(4);
  
  const [numPhrases, setNumPhrases] = useState(3);
  const [endNumPhrases, setEndNumPhrases] = useState(3);

  return (
    <>
      <Box maw={200} mx="auto">
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

      <Box maw={200} mx="auto">
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

      <div className='phraseWrapper'>
        <Phrases wordCount={ endNumWords } phraseCount = { endNumPhrases } />
      </div>
    </>
  )
}