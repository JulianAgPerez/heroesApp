import { ListHeroes } from "../../ui/ListHeroes/ListHeroes";
import { heroesData } from "../../../data/heroes";

export const Home = () => {
  return <ListHeroes heroes={heroesData} title="Todos los heroes" />;
};
