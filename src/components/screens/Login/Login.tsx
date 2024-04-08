import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import styles from "./Login.module.css";
import { FormEvent, useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { useAppDispatch } from "../../../hooks/redux";
import { setLogin } from "../../../redux/slices/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const { values, handleChange } = useForm({
    user: "",
    password: "",
  });
  const { user, password } = values;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("/user.json");
    const userData = await response.json();
    const userFound = userData.user.find(
      (u: { username: string; password: string }) =>
        u.username === user && u.password === password
    );
    if (userFound) {
      dispatch(setLogin(user));
      navigate("/");
    } else {
      alert("Usuario inválido");
    }
  };

  return (
    <div className={styles.containerLogin}>
      <div className={styles.containerForm}>
        <span
          style={{ fontSize: "10vh" }}
          className="material-symbols-outlined"
        >
          account_circle
        </span>
        <Form onSubmit={handleSubmitForm}>
          <Form.Group className="mb-3">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={user}
              name="user"
              type="text"
              placeholder="Usuario"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={password}
              name="password"
              type={showPass ? "text" : "password"}
              placeholder="Contraseña"
            />
          </Form.Group>
          <Form.Check
            type="switch"
            onChange={() => setShowPass(!showPass)}
            id="custom-switch"
            label="Mostrar contraseña"
          />
          <div className="d-flex justify-content-center align-items-center mt-2">
            <Button type="submit" variant="primary">
              Ingresar
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
