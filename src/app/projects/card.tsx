'use client';

import Project from "./project";
import { SlLink } from "react-icons/sl";
import Link from 'next/link';
import Image from 'next/image';

function CardInner(proj: Project) {
  return (
    <div className={`${proj.className ? proj.className : ''} ${proj.url ? 'hover:animate-pulse' : ''} bg-neutral-700 rounded-lg max-w-min shadow-lg w-fit h-fit p-4`}>
      {
        proj.image ? (
          <Image src={proj.image} alt={proj.title} width="150" height="150" className="w-full min-w-fit h-48 object-cover rounded-lg" />
        ) : null
      }
      <div className="flex">
        <h2 className="mt-2 text-xl font-bold">
          {proj.title}
        </h2>

        {proj.url ? <span className="flex ml-auto mt-3 mr-0 text-xl"><SlLink /></span> : null}
      </div>

      <p className="text-neutral-400">{proj.description}</p>
    </div>
  );
}

export default function Card(proj: Project) {
  // card component
  return (
    <>
      {proj.url ? (
        <Link href={proj.url}>
          <CardInner
            title={proj.title}
            description={proj.description}
            image={proj.image}
            url={proj.url}
            className={proj.className} />
        </Link>
      ) : <CardInner
        title={proj.title}
        description={proj.description}
        image={proj.image}
        url={null}
        className={proj.className} />
      }
    </>
  )
}