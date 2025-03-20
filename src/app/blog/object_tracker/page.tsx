'use client';

import {useEffect} from "react";
import Blog from "@/app/blog/blog";
import BlogProps from "@/app/blog/blogProps";
import Section from "@/app/blog/section";

export default function Page() {
    useEffect(() => {document.title = "TwinBlackbirds | Blog - Object Tracker"});

    const sections = new Array<Section>();
    sections.push(new Section(
        "Recently, I was inspired to build an object tracking software. The idea just seemed interesting to me, and so I decided to start learning. I realized first, that I needed something to track. So, I had to build a demonstration program. I figured that a black circle bouncing around a white canvas would be simple enough to track.",
        "/blog_assets/object_tracker/ball.gif",
    ));
    sections.push(new Section(
        "With that in mind, I quickly hammered together a prototype in SFML (Simple Fast Multimedia Library). Now that I had this, I could begin work on the actual tracker itself. I started learning OpenCV (which is an open source computer vision library) and within about an hour, I had this:",
        "/blog_assets/object_tracker/tracked-ball.gif",
    ));
    sections.push(new Section(
        "Voila! My tracker was working. As you can see above, it successfully draws a bounding box in green, and a center point in blue. In the future, I plan to make the tracking work in more complex scenarios. I have some ideas cooking up in my head for things such as facial recognition, but that will take quite some time to complete. Anyhow, I am quite enjoying learning C++ and I plan on continuing in the future.",
        null,
    ));

    const bProps = new BlogProps(
        "My Experience Building an Object Tracker Using C++",
        sections
    );

    return (
        <div className="w-fit mx-auto">
            <h1 className="text-2xl mt-4 text-center">Blog - Object Tracker (2025-03-20)</h1>
            <main className="mx-auto shadow-lg p-4 bg-neutral-700 rounded-lg w-fit mt-4 max-w-3xl">
                <Blog
                    title={bProps.title}
                    content={bProps.content}
                />
            </main>
        </div>
    );
}