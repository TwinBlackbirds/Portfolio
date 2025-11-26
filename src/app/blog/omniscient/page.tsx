'use client';

import {useEffect} from "react";
import Link from "next/link";
import Blog from "@/app/blog/blog";
import BlogProps from "@/app/blog/blogProps";
import Section from "@/app/blog/section";

export default function Page() {
    useEffect(() => {document.title = "TwinBlackbirds | Blog - Omniscient"});

    const sections = new Array<Section>();
    sections.push(new Section(
        "",
        null,
    ));

    
    const bProps = new BlogProps(
        "Omniscient - Overview",
        sections
    );

    return (
        <div className="w-fit mx-auto">
            <h1 className="text-2xl mt-4 text-center">Blog - Omniscient (2025-11-25)</h1>
            <main className="mx-auto shadow-lg p-4 bg-neutral-700 rounded-lg w-fit mt-4 max-w-3xl">
                <Blog
                    title={bProps.title}
                    content={bProps.content}
                />
                <div className={"text-center"}>
                    <Link className="text-blue-400" href="https://github.com/TwinBlackbirds/Omniscient" target="_blank" rel="noopener noreferrer">View the project on GitHub</Link>
                </div>
            </main>
        </div>
    );
}