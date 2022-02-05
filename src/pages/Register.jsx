import styled from "styled-components";


const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("http://unsplash.it/1500/650") center no-repeat;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`

const Wrapper = styled.div`
	padding: 20px;
	width: 40%;
	background-color: white;
	border-radius: 10px;
`

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
	text-align: center;
`

const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0 0;
	padding: 10px;
	/* border-radius: 5px; */
`

const Agreement = styled.span`
	font-size: 12px;
	margin: 20px 0;
`

const Button = styled.button`
	width: 40%;
	border: 1px solid black;
	padding: 15px 20px;
	background-color: black;
	color: white;
	cursor: pointer;
	margin: 0 auto;
`

const Register = () => {
	return <Container>
		<Wrapper>
			<Title>Вы здесь первый раз?</Title>
			<Form>
				<Input placeholder="Адрес электронной почты"/>
				<Input placeholder="Имя"/>
				<Input placeholder="Фамилия"/>
				<Input placeholder="Пароль"/>
				<Input placeholder="Подтверждение пароля"/>
				<Agreement>Нажимая на кнопку Создать аккаунт, Вы соглашаетесь с <b>Условиями и Положениями</b></Agreement>
				<Button>Создать аккаунт</Button>
			</Form>
		</Wrapper>
	</Container>;
};

export default Register;
