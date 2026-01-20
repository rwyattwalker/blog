import type { Route } from "./+types/home";
import { Blog as BlogComponet } from "../blog/blog";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Blog" },
        { name: "description", content: "Block posts" },
    ];
}

export default function Blog() {
    return <BlogComponet />;
}
