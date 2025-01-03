import Link from 'next/link';
import {useEffect} from 'react';

export default function Page() {
  useEffect(() => {document.title = "TwinBlackbirds | Benchmarks"});

  return (
    <div className="w-fit mx-auto">
      <h1 className="text-2xl mt-4">Human Benchmark Clone</h1>
      <main className="mx-auto shadow-lg p-4 bg-neutral-700 rounded-lg w-fit mt-4">
        <label htmlFor='tests' className="text-xl">Available tests</label>
        <ul id="tests" className="flex-col flex">
          <Link className="bg-neutral-800 rounded-lg p-2 my-1" href="benchmark/wpm">wpm</Link>
          <Link className="bg-neutral-800 rounded-lg p-2 my-1" href="benchmark/reaction_time">reaction time</Link>
          <Link className="bg-neutral-800 rounded-lg p-2 my-1" href="benchmark/word_memorization">word memorization</Link>
        </ul>
      </main>
    </div>
  );
}