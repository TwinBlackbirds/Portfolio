'use client';

import Card from './card';
import { useEffect } from "react";
import Project from "./project";

export default function Projects() {
  useEffect(() => {document.title = "TwinBlackbirds | Projects"});
  
  const projects = [
    // new Project("Benchmark Game", "Human benchmark clone made with Next.js", "/assets/150.png", "/benchmark"),
    new Project("Library", "Collection of free books with downloads, made in ASP.NET MVC", "/assets/library.png", "https://library.twinblackbirds.com"),
    new Project("Object Tracker", "Built in C++ with OpenCV", "/blog_assets/object_tracker/tracker-cover.jpg", "/blog/object_tracker")
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
