'use client';

import Card from './card';
import { useEffect } from "react";
import Project from "@/app/shared/project";

export default function Projects() {
  useEffect(
    () => { 
      document.title = "TwinBlackbirds | Projects";
    }, []);
  let projects = [
    new Project("Awesome Project", "Desc1", "https://via.placeholder.com/150", "https://example.com"),
    new Project("Dope Project", "Desc2", "https://via.placeholder.com/150", null),
    new Project("Super Duper Omega Awesome Project", "Desc3", "https://via.placeholder.com/150", "https://example.com"),
    new Project("Okay Project", "Desc4", "https://via.placeholder.com/150", "https://example.com"),
    new Project("Awesome Project", "Desc1", "https://via.placeholder.com/150", "https://example.com"),
    new Project("Dope Project", "Desc2", "https://via.placeholder.com/150", null),
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
              className="transition mt-8 mx-4 lg:mx-12"/>
        ))
      }

    </main>
  );
}
