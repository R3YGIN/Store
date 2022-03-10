import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/apiCalls";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
`;

const LoginBox = styled.div`
  flex: ${(props) => (props.selected ? 1.2 : 1)};
  height: 100vh;
  display: flex;
  justify-content: center;
  transition: all 0.3s ease-out;
`;

const Login = styled.div`
  width: 50%;
  margin: 20px;
  display: flex;
  flex-direction: column;
  padding-top: 125px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: ${(props) => (props.selected ? 0 : "auto")};
  transition: all 0.3s ease-out;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 20px;
  height: 20px;
  margin: 10px 20px;
  /* border-radius: 5px; */
  border: none;
  border-bottom: 1px solid #000;
  font-weight: 600;
  font-size: 14px;
  background-color: transparent;
`;

const Button = styled.button`
  width: 40%;
  border: 1px solid black;
  padding: 15px 20px;
  background-color: black;
  color: white;
  font-weight: 400;
  cursor: pointer;
  margin: 20px auto 10px;
  border-radius: 5px;
  min-width: 150px;
  display: ${(props) => (props.selected ? "none" : "block")};
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
const ToggleButton = styled.button`
  width: 40%;
  border: 1px solid black;
  padding: 15px 20px;
  background-color: transparent;
  color: black;
  font-weight: 600;
  cursor: pointer;
  margin: 20px auto 10px;
  border-radius: 5px;
  min-width: 150px;
  display: ${(props) => (props.selected ? "none" : "block")};
  &:hover {
    background-color: black;
    color: white;
  }
`;

const Error = styled.span`
  color: red;
  text-align: center;
`;

const RegisterBox = styled.div`
  flex: ${(props) => (props.selected ? 1.2 : 1)};
  height: 100vh;
  background-color: #dbdbdb;
  display: flex;
  justify-content: center;
  transition: all 0.3s ease-out;
`;

const Register = styled.div`
  width: 50%;
  margin: 20px;
  display: flex;
  flex-direction: column;
  padding-top: 125px;
`;

const Agreement = styled.p`
  font-size: 12px;
  text-align: center;
  color: rgb(71, 71, 71);
  max-width: 300px;
  margin: 20px auto;
`;

const AgreementLink = styled.a`
  font-weight: 600;
  text-decoration: underline;
  color: #000;
  cursor: pointer;
`;

const LoginNew = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  const [isSelected, setSelected] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setSelected(!isSelected);
  };

  return (
    <Container>
      <Wrapper>
        <LoginBox selected={!isSelected}>
          <Login>
            <Title>Войти в аккаунт</Title>
            <Form selected={isSelected}>
              <Input
                placeholder="Имя пользователя"
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                placeholder="Пароль"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                selected={isSelected}
                onClick={handleClick}
                disabled={isFetching}
              >
                Войти
              </Button>
              {error && <Error>Что-то пошло не так...</Error>}
            </Form>
            <ToggleButton selected={!isSelected} onClick={handleToggle}>
              Войти
            </ToggleButton>
          </Login>
        </LoginBox>
        <RegisterBox selected={isSelected}>
          <Register>
            <Title>Регистрация</Title>
            <Form selected={!isSelected}>
              <Input
                placeholder="Имя пользователя"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                placeholder="Почта"
                type="email"
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                placeholder="Пароль"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                selected={!isSelected}
                onClick={handleClick}
                disabled={isFetching}
              >
                Создать аккаунт
              </Button>
              <Agreement>
                Нажимая на кнопку Создать аккаунт, Вы соглашаетесь с{" "}
                <AgreementLink>Условиями и Положениями</AgreementLink>
              </Agreement>
            </Form>
            <ToggleButton selected={isSelected} onClick={handleToggle}>
              Создать аккаунт
            </ToggleButton>
          </Register>
        </RegisterBox>
      </Wrapper>
    </Container>
  );
};

export default LoginNew;
