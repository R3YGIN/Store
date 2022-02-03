import { Facebook, Instagram, MailOutline, Phone, Room, Twitter, WhatsApp } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
`

const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
`

const Logo = styled.h1``

const Desc = styled.p`
	margin: 20px 0px;
`

const SocialContainer = styled.div`
	display: flex;
`

const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: white;
	background-color: #${props => props.color};
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 20px;
	cursor: pointer;
`


const Center = styled.div`
	flex: 1;
	padding: 20px;
`

const Title = styled.h3`
	margin-bottom: 30px;
`

const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`

const ListItem = styled.li`
	width: 45%;
	margin-bottom: 10px;
	padding-right: 5px;
`

const Right = styled.div`
	flex: 1;
	padding: 20px;
`

const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
`

const Payment = styled.img`
	width: 50%;
`

const Footer = () => {
	return <Container>
		<Left>
			<Logo>George Gerus</Logo>
			<Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, deleniti optio minima quod illum voluptatum hic odit veritatis veniam id voluptatem! Repudiandae, aperiam cupiditate nam rem est tempore distinctio esse.</Desc>
			<SocialContainer>
				<SocialIcon color="3B5999">
					<Facebook/>
				</SocialIcon>
				<SocialIcon color="E4405F">
					<Instagram/>
				</SocialIcon>
				<SocialIcon color="55ACEE">
					<Twitter/>
				</SocialIcon>
				<SocialIcon color="43D854">
					<WhatsApp/>
				</SocialIcon>
			</SocialContainer>
		</Left>
		<Center>
			<Title>Полезные ссылки</Title>
			<List>
				<ListItem>Главная</ListItem>
				<ListItem>Корзина</ListItem>
				<ListItem>Мужская одежда</ListItem>
				<ListItem>Женская одежда</ListItem>
				<ListItem>Аксессуары</ListItem>
				<ListItem>Мой аккаунт</ListItem>
				<ListItem>Отслеживание</ListItem>
				<ListItem>Условия</ListItem>
				<ListItem>Список желаний</ListItem>
				<ListItem>Список желаний</ListItem>
			</List>
		</Center>
		<Right>
			<Title>Контакты</Title>
			<ContactItem>
				<Room style={{marginRight:"10px"}}/> ст.Кущевская, ул.Крупской №
			</ContactItem>
			<ContactItem>
				<Phone style={{marginRight:"10px"}}/> +7 999 656 1234
			</ContactItem>
			<ContactItem>
				<MailOutline style={{marginRight:"10px"}}/> contact@store@mail.ru
			</ContactItem>
			<Payment src="http://unsplash.it/200/40"/>
		</Right>
	</Container>;
};

export default Footer;
