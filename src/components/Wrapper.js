import React from 'react';
import Phrases from './Phrases';

export default function Wrapper( props ) {

  return (
    <>
      <Phrases wordCount={ 2 } phraseCount = { 5 } />
      <Phrases wordCount={ 1 } phraseCount = { 2 } />
      <Phrases wordCount={ 2 } phraseCount = { 1 } />
      <Phrases wordCount={ 10 } phraseCount = { 20 } />
    </>
  )
}