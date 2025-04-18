import type { Route } from "./+types/home";
import { Welcome } from "../landing-page/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Weather App" },
    { name: "description", content: "Welcome to Weather App!" },

  ];
}

export default function Home() {
  return <Welcome />;
}

