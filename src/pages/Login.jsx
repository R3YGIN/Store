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
	width: 25%;
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
	flex-direction: column;
`

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 10px 0;
	padding: 10px;
	/* border-radius: 5px; */
`

const Button = styled.button`
	width: 40%;
	border: 1px solid black;
	padding: 15px 20px;
	background-color: black;
	color: white;
	cursor: pointer;
	margin: 0 auto 10px;
`

const Link = styled.a`
	margin: 5px 0;
	font-size: 12px;
	text-decoration: underline;
	text-align: center;
	cursor: pointer;
`

const Login = () => {
	return <Container>
		<Wrapper>
			<Title>Уже зарегистрированы?</Title>
			<Form>
				<Input placeholder="Адрес электронной почты" />
				<Input placeholder="Пароль" />
				<Button>Войти</Button>
				<Link>Я забыл пароль</Link>
				<Link>Создать новый аккаунт</Link>
			</Form>
		</Wrapper>
	</Container>;
};

export default Login;
