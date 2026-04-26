'use client';

import {useEffect} from "react";
import Link from "next/link";
import Blog from "@/app/blog/blog";
import BlogProps from "@/app/blog/blogProps";
import Section from "@/app/blog/section";

export default function Page() {
    useEffect(() => {document.title = "TwinBlackbirds | Blog - Linux Scripting #1"});

    const sections = new Array<Section>();
    sections.push(new Section(
        "This is one of the first projects I made out of sheer necessity. I had purchased a Vaydeer keypad to use as a macro pad for my computer. At the time, I was running Windows. The product comes with a driver installation and a macro configuration software. I thought nothing more of it until I later switched to a Linux environment as my main OS.",
        null,
    ));

    sections.push(new Section(
        "Upon switching to Linux, I found that the keypad was recognized, however the keys would not function whatsoever. I found a script online which had covered a similar issue and I decided I could rework it to fit my needs. The solution made no sense to me, writing a device file to /dev/null. What mattered though, is that it made the keypad function.",
        null,
    ));

    sections.push(new Section(
        "I quickly threw together a script which would automate the process for all keypad slots that it could potentially be plugged into. Once added to the system startup scripts, the keypad keys output as expected. The only drawback is that it cannot be programmed this way, still requiring a Windows machine to set macros. ",
        null,
    ));


    
    const bProps = new BlogProps(
        "Linux Scripting | Vaydeer Script",
        sections
    );

    return (
        <div className="w-fit mx-auto">
            <h1 className="text-2xl mt-4 text-center">Blog - Linux Scripting #1 (2025-11-25)</h1>
            <main className="mx-auto shadow-lg p-4 bg-neutral-700 rounded-lg w-fit mt-4 max-w-3xl">
                <Blog
                    title={bProps.title}
                    content={bProps.content}
                />
                <div className={"text-center"}>
                    <Link className="text-blue-400" href="https://github.com/TwinBlackbirds/vaydeer-keypad-linux" target="_blank" rel="noopener noreferrer">View the project on GitHub</Link>
                </div>
            </main>
        </div>
    );
}