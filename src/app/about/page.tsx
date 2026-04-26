'use client';

import Link from "next/link";
import { useEffect } from "react";
import { MdEmail } from "react-icons/md";

export default function Projects() {
  useEffect(() => {document.title = "TwinBlackbirds | About"});
  
  return (
    <main id="about" className="animate-fade-in h-fit mx-auto w-full grid md:grid-cols-3 lg:grid-cols-4 flex-wrap justify-around">
      <div className="text-neutral-400 p-8 lg:col-span-4 md:col-span-3">
        <h1 className="text-3xl mb-4">Hello!</h1>
        <p>
          Welcome to my website!  
        </p>

        <p className="mt-4">
          My name is Michael Amyotte. I am a developer with professional experience as well as a final year student at Niagara College.
        </p>
        <p>
          I love to code and I am constantly challenging myself to improve my skill set.
        </p>
        <p>
          On this website, you can find examples of my work as well as links to GitHub repositories and my resume.
        </p>
        <p className="mt-4">
          Please feel free to reach out to me if you have any questions or opportunities!
        </p>
        
        <Link className="mt-4 inline-block" href="mailto:twinblackbirds@gmx.com"><MdEmail className="inline mr-2" />Email Me</Link>
      </div>
    </main>
  );
}
