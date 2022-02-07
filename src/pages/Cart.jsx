import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { Add, CurrencyRuble, Remove } from '@mui/icons-material';
import { mobile } from '../responsive';


const Container = styled.div``

const Wrapper = styled.div`
	padding: 20px;
	${mobile({ padding: "10px" })}
`

const Title = styled.h1`
	font-weight: 300;
	text-align: center;
`

const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
	${mobile({ padding: "20px 0" })}
`

const TopButton = styled.button`
	padding: 10px;
	font-weight: 600;
	cursor: pointer;
	border: ${props => props.type === "filled" && "none"};
	background-color: ${props => props.type === "filled" ? "black" : "transparent"};
	color: ${props => props.type === "filled" && "white"};
`

const TopTexts = styled.div`
	${mobile({ display: "none" })}
`

const TopText = styled.span`
	text-decoration: underline;
	cursor: pointer;
	margin: 0 10px;
`


const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
	${mobile({ flexDirection: "column" })}
`

const Info = styled.div`
	flex: 3;
`

const Product = styled.div`
	display: flex;
	justify-content: space-between;
	${mobile({ flexDirection: "column" })}
`

const ProductDetails = styled.div`
	flex: 2;
	display: flex;
`

const Image = styled.img`
	width: 200px;
`

const Details = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${props => props.color};
`

const ProductSize = styled.span``

const PriceDetails = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	/* background-color: #EEDC82; */
	/* margin: 35px; */
	/* border-radius: 10px; */

	${mobile({ flexDirection: "row", justifyContent: "space-around", backgroundColor: "#EEDC82", margin: "5px 0", borderRadius: "10px" })}
`

const ProductAmountContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
	${mobile({ margin: "10px 0" })}
`

const ProductAmount = styled.div`
	font-size: 24px;
	margin: 5px;
	${mobile({ margin: "5px 15px" })}
`

const ProductPrice = styled.div`
	font-size: 30px;
	font-weight: 200;
`

const Hr = styled.hr`
	background-color: #eee;
	border: none;
	height: 1px;
	margin: 10px 0; //fix
`

const Summary = styled.div`
	flex: 1;
	border: 0.5px solid lightgray;
	border-radius: 10px;
	padding: 20px;
	height: 50vh;
`

const SummaryTitle = styled.h1`
	font-weight: 200;
`

const SummaryItem = styled.div`
	margin: 30px 0;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #eee;
	font-weight: ${props => props.type === "total" && "500"};
	font-size: ${props => props.type === "total" && "24px"};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
	width: 100%;
	padding: 10px;
	background-color: black;
	color: white;
	font-weight: 600;
	border: none;
`

const Cart = () => {
	return <Container>
		<Navbar/>
		<Announcement/>
		<Wrapper>
			<Title>Корзина</Title>
			<Top>
				<TopButton>Продолжить покупки</TopButton>
				<TopTexts>
					<TopText>Корзина (2)</TopText>
					<TopText>Список желаний (0)</TopText>
				</TopTexts>
				<TopButton type="filled">Перейти к оформлению</TopButton>
			</Top>
			<Bottom>
				<Info>
					<Product>
						<ProductDetails>
							<Image src="http://unsplash.it/530/530"/>
							<Details>
								<ProductName><b>Название: </b>Кардиган</ProductName>
								<ProductId><b>Артикул: </b>353</ProductId>
								<ProductColor color='black'/>
								<ProductSize><b>Размер: </b>XL</ProductSize>
							</Details>
						</ProductDetails>
						<PriceDetails>
							<ProductAmountContainer>
								<Add/>
								<ProductAmount>2</ProductAmount>
								<Remove/>
							</ProductAmountContainer>
							<ProductPrice>3499 <CurrencyRuble/></ProductPrice>
						</PriceDetails>
					</Product>
					<Hr/>
					<Product>
						<ProductDetails>
							<Image src="http://unsplash.it/530/533"/>
							<Details>
								<ProductName><b>Название: </b>Футболка</ProductName>
								<ProductId><b>Артикул: </b>368</ProductId>
								<ProductColor color='green'/>
								<ProductSize><b>Размер: </b>XL</ProductSize>
							</Details>
						</ProductDetails>
						<PriceDetails>
							<ProductAmountContainer>
								<Add/>
								<ProductAmount>1</ProductAmount>
								<Remove/>
							</ProductAmountContainer>
							<ProductPrice>1499 <CurrencyRuble/></ProductPrice>
						</PriceDetails>
					</Product>
				</Info>
				<Summary>
					<SummaryTitle>Описание заказа</SummaryTitle>
					<SummaryItem>
						<SummaryItemText>Цена: </SummaryItemText>
						<SummaryItemPrice>5000 <CurrencyRuble/></SummaryItemPrice>
					</SummaryItem>
					<SummaryItem>
						<SummaryItemText>Доставка: </SummaryItemText>
						<SummaryItemPrice>0 <CurrencyRuble/></SummaryItemPrice>
					</SummaryItem>
					<SummaryItem>
						<SummaryItemText>Скидка: </SummaryItemText>
						<SummaryItemPrice>-500 <CurrencyRuble/></SummaryItemPrice>
					</SummaryItem>
					<SummaryItem type="total">
						<SummaryItemText>Итого: </SummaryItemText>
						<SummaryItemPrice>5000 <CurrencyRuble/></SummaryItemPrice>
					</SummaryItem>
					<Button>Оформить заказ</Button>
				</Summary>
			</Bottom>
		</Wrapper>
		<Footer/>
	</Container>;
};

export default Cart;
