import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("http://unsplash.it/1500/650") center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
  border-radius: 10px;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  /* border-radius: 5px; */
`;

const Button = styled.button`
  width: 40%;
  border: 1px solid black;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  margin: 0 auto 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  text-align: center;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
  text-align: center;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Уже зарегистрированы?</Title>
        <Form>
          <Input
            placeholder="Имя пользователя"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Пароль"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            Войти
          </Button>
          {error && <Error>Что-то пошло не так...</Error>}
          <Link>Я забыл пароль</Link>
          <Link>Создать новый аккаунт</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
