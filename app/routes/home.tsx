import type { Route } from "./+types/home";
import { Homepage } from "../homepage/homepage";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Welcome" },
        { name: "description", content: "Welcome to my blog!" },
    ];
}

export default function Home() {
    return <Homepage />;
}
