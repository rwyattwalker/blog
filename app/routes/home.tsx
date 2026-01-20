import type { Route } from "./+types/home";
import { Home as HomeComponent } from "../home/home";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Welcome" },
        { name: "description", content: "Welcome to my blog!" },
    ];
}

export default function Home() {
    return <HomeComponent />;
}
