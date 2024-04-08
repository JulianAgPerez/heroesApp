import { useEffect, useState } from "react";
import { IHeroes } from "../../../types/IHeroes";
import { useNavigate, useParams } from "react-router-dom";
import { heroesData } from "../../../data/heroes";
import styles from "./HeroPage.module.css";
import { Button } from "react-bootstrap";

export const HeroPage = () => {
  // Estado local para almacenar la información del héroe actual
  const [hero, setHero] = useState<IHeroes | null>(null);
  // Obtención del parámetro de la URL correspondiente al ID del héroe
  const { id } = useParams();

  const getHeroById = () => {
    const result = heroesData.find((h) => h.id === id);
    // Si se encuentra el héroe, actualizar el estado local con su información, de lo contrario, establecer el estado en null
    result ? setHero(result) : setHero(null);
  };

  // Efecto secundario que se ejecuta una vez al montar el componente para obtener el héroe por su ID
  useEffect(() => {
    getHeroById();
  }, []);

  // Función navigate para la navegación hacia atrás
  const navigate = useNavigate();
  const handleNavigate = () => {
    // Navegar hacia atrás en la historia del navegador
    navigate(-1);
  };

  return (
    <>
      {hero && (
        <div className={styles.containerHeroPage}>
          <div className={styles.containerImgHeroPage}>
            <img src={`/assets/heroes/${id}.jpg`} alt={hero.superhero} />
          </div>
          <div>
            <h3>{hero.superhero}</h3>
            <ul>
              <li>
                <b>Alter ego:</b> {hero.alter_ego}
              </li>
              <li>
                <b>Publicadora:</b> {hero.publisher}
              </li>
              <li>
                <b>Primera Aparicion:</b> {hero.first_appearance}
              </li>
            </ul>
            <Button variant="primary" onClick={handleNavigate}>
              Regresar
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
