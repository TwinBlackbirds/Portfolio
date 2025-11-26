'use client';

import { AiFillGithub, AiFillLinkedin, AiFillWindows } from "react-icons/ai";
import { RiFilePaper2Line } from "react-icons/ri";
import { DiLinux } from "react-icons/di";
import { useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    document.title = "TwinBlackbirds | Home";
  }, []);
  return (
    <main className="animate-pop-in sm:w-2/3 lg:w-1/2 mx-0 min-w-fit xs:w-auto xs:sm-0 text-center pt-12 lg:shadow-lg md:rounded-md p-4 bg-neutral-900 lg:rounded-lg sm:mx-auto mt-0 md:mt-4">
      <div>
        <Image priority={true} className="min-w-20 w-44 max-w-44 mx-auto mb-4 rounded-full outline-white outline" src="/pfp.webp" alt="Album art of MM.. Food? by MF DOOM" width={200} height={200} />
        <h1 className='text-3xl'>Michael Amyotte</h1>
        <h2 className="text-neutral-400"> Full-Stack Developer </h2>
      </div>
      <div className="flex justify-around mt-16">

        <Link href="https://github.com/TwinBlackbirds">
          <AiFillGithub className="size-20" title="GitHub" />
        </Link>
        <Link href="https://www.linkedin.com/in/twinblackbirds/">
          <AiFillLinkedin className="size-20" title="LinkedIn" />
        </Link>
        <Link href="./assets/r120938123.pdf" target="_blank" rel="noopener noreferrer">
          <RiFilePaper2Line className="size-20" title="Resume" />
        </Link>
      </div>
      <div className=" select-none w-full justify-center flex flex-row  h-fit mt-40">
        <p className="text-neutral-600 flex flex-row">
          <DiLinux title="Linux" className="size-8" /> <span className="text-2xl px-4">&lt; &gt;</span> <AiFillWindows title="Windows" className="size-8" />
        </p>

      </div>
    </main>
  );
}
