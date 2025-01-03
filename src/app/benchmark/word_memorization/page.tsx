'use client';

import Link from 'next/link';
import {createContext, useContext, useRef, useState, useCallback} from 'react';
import {sub_50, sub_100, sub_200} from './words';
class Word {
  word: string;
  seen: boolean;
  constructor(word: string) {
    this.word = word;
    this.seen = false;
  }
}
let words: string[] = sub_50;
let DICT: Word[] = [];
for (let word of words) {
  DICT.push(new Word(word));
}


function seenOrNew(
  key: string, 
  word: Word, 
  setWord: Function, 
  score: number, 
  setScore: Function, 
  lives: number, 
  setLives: Function
) {
  if ((word.seen && key == "seen") || (!word.seen && key == "new")) {
    setScore(score + 1);
  } else {
    setLives(lives - 1);
  }
  if (lives > 0) {
    // set old word as 'seen'
    DICT[DICT.indexOf(word)] = ({word: word.word, seen: true});
    // expand dictionary if at point threshold
    if (score == 49) {
      DICT = DICT.concat(sub_100.map((word) => new Word(word)));
    } else if (score == 99) {
      DICT = DICT.concat(sub_200.map((word) => new Word(word)));
    }
    // find new word & set state
    setWord(DICT[Math.floor(Math.random() * DICT.length)]);
  }
}


function Game({setGameState}: { setGameState: React.Dispatch<React.SetStateAction<boolean>> }) {
  // initialize states
  let [score, setScore] = useState(0);
  let [lives, setLives] = useState(3);
  let startingWord = DICT[Math.floor(Math.random() * DICT.length)];
  let [word, setWord] = useState(startingWord);
  // button callbacks
  let btnCallbackSeen = () => seenOrNew('seen', word, setWord, score, setScore, lives, setLives);
  let btnCallbackNew = () => seenOrNew('new', word, setWord, score, setScore, lives, setLives);
  if (lives > 0) {
    return (
      <div className='mt-4 w-11/12 mx-auto bg-neutral-600 p-4 rounded-lg shadow-sm shadow-neutral-800'>
        <div className='w-full flex flex-row justify-between'>
          <span className='inline-block text-lg'>Lives: {lives}</span>
          <span className='inline-block text-lg'>Score: {score}</span>
        </div>
        <span className="text-2xl mx-auto w-fit block pb-8 pt-4">{word.word}</span>
        <div className='flex flex-row justify-around pb-2'>
          <button onClick={btnCallbackSeen} className='bg-neutral-800 p-2 px-4 rounded-md'>Seen</button>
          <button onClick={btnCallbackNew} className='bg-neutral-800 p-2 px-4 rounded-md'>New</button>
        </div>
      </div>
    )
  } else {
    // set high score variable
    let highScore = localStorage.getItem("wordMemorizationHighScore");
    if (score > parseInt(highScore || "0")) {
      localStorage.setItem("wordMemorizationHighScore", score.toString());
    }
    return (
      <div className='mt-4 w-11/12 mx-auto bg-neutral-600 p-4 rounded-lg shadow-sm shadow-neutral-800'>
        <span className="text-2xl mx-auto w-fit block pt-4">Game Over!</span>
        <span className='block text-center'>Score: {score}</span>
        <span className='block text-center pb-4'>High Score: {highScore}</span>
        <div className='flex flex-row justify-around pb-2'>
          <button onClick={() => setGameState(false)} className='bg-neutral-800 p-2 px-4 rounded-md'>Start Over</button>
        </div>
      </div>
    )
  }
  
}

function beginGame(setGameState: Function) {
  // initialize game state
  setGameState(true);
  for (let word of DICT) {
    word.seen = false;
  }
} 

export default function Page() {
  let [gameState, setGameState] = useState(false);
  return (
    <>
    <div className='lg:min-w-96 w-fit max-w-xl mx-auto mt-4'>
      <Link href='/benchmark'>↵ Back to Benchmarks</Link>
    
      <div className='mt-2 shadow-md p-4 bg-neutral-700 rounded-lg'>
        <div className='text-2xl text-center mb-2'>Word Memorization</div>
        <div className={`${gameState ? '!hidden' : ''}`}>
          <p className='text-lg font-bold'>Instructions</p>
          <p className="mb-2 text-wrap">A word will be displayed in the center of the game window. You have to decide whether or not that word has appeared before. The pool of words gradually grows as you gain score. You have three lives. Good luck!</p>
          <button id='beginBtn' 
                className={`bg-neutral-800 p-2 rounded-lg mx-auto block`} 
                onClick={() => beginGame(setGameState)}>
          Begin
          </button>
        </div>
        
        <div id='game-container' style={{'display': gameState ? 'block' : 'none'}}>
          {gameState ? 
          <Game 
          setGameState={setGameState}
          /> : null}
        </div>
      </div>
    </div>
    </>
  )
}