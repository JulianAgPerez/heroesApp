import { FC } from "react";
import { IHeroes } from "../../../types/IHeroes";
import Card from "react-bootstrap/esm/Card";
import { useNavigate } from "react-router-dom";
import styles from "./CardHero.module.css";

interface ICardHero {
  hero: IHeroes;
}

export const CardHero: FC<ICardHero> = ({ hero }) => {
  const navigate = useNavigate();
  const handleNavigateHeroe = () => {
    navigate(`/hero/${hero.id}`);
  };

  return (
    <Card
      className={styles.card}
      onClick={handleNavigateHeroe}
      style={{ width: "100%" }}
    >
      <Card.Img variant="top" src={`/assets/heroes/${hero.id}.jpg`} />
      <Card.Body>
        <Card.Title>{hero.superhero}</Card.Title>
        <Card.Text>
          <p>
            <b>Alter Ego: </b>
            {hero.alter_ego}
          </p>
          <p>
            <b>Publisher: </b>
            {hero.publisher}
          </p>
          <p>
            <b>Primera aparicion: </b>
            {hero.first_appearance}
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
