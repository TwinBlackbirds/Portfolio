import BlogProps from "@/app/blog/blogProps";
import Image from "next/image";

export default function Blog(props: BlogProps) {
    let count = 0;
    return (
        <>
            <div>
                <h2 className={"text-xl font-bold"}>{props.title}</h2>
                {props.content.map((section) => {
                    count++;
                    return (
                        <section key={`blog_section_${count}`}>
                            <p className={"my-4"}>{section.content}</p>
                            {section.picture != null ? <Image className={"w-max"} width={"150"} height={"150"} alt={`Section ${count} of the blog's picture`} src={section.picture!}></Image> : <></>}
                        </section>
                    );
                })}
            </div>
        </>
    )
}