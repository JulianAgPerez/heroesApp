import { useEffect, useState } from "react";
import { IHeroes } from "../../../types/IHeroes";
import { heroesData } from "../../../data/heroes";
import { ListHeroes } from "../../ui/ListHeroes/ListHeroes";

export const DcHeroes = () => {
  const [heroes, setHeroes] = useState<IHeroes[]>([]);

  const handleGetHeroesMarvel = () => {
    const result = heroesData.filter((hero) => hero.publisher === "DC Comics");
    setHeroes(result);
  };
  useEffect(() => {
    handleGetHeroesMarvel();
  }, []);

  return <ListHeroes heroes={heroes} title="Heroes DC" />;
};
