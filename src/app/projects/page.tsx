'use client';

import Card from './card';
import { useEffect } from "react";
import Project from "./project";

export default function Projects() {
  useEffect(() => {document.title = "TwinBlackbirds | Projects"});
  
  let projects = [
    new Project("Browser Game", "Runner game inspired by Gravity Guy", "/assets/150.png", null), // leave link 'null' for non-interactivity
    new Project("Benchmark Game", "Human benchmark clone", "/assets/150.png", "/benchmark")
    ];
  return (
    <main id="projects" className="animate-fade-in h-fit mx-auto w-fit grid md:grid-cols-3 lg:grid-cols-4 flex-wrap justify-around">
      { 
        projects.map((proj: Project, i) => (
          <Card 
              key={i}
              description={proj.description}
              image={proj.image}
              title={proj.title}
              url={proj.url} 
              className="transition mt-8 mx-4 lg:mx-12"
          />
        ))
      }

    </main>
  );
}
