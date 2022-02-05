import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';


const Container = styled.div``

const Wrapper = styled.div`
	padding: 20px;
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
`

const TopButton = styled.button`
	padding: 10px;
	font-weight: 600;
	cursor: pointer;
	border: ${props => props.type === "filled" && "none"};
	background-color: ${props => props.type === "filled" ? "black" : "transparent"};
	color: ${props => props.type === "filled" && "white"};
`

const TopTexts = styled.div``

const TopText = styled.span`
	text-decoration: underline;
	cursor: pointer;
	margin: 0 10px;
`


const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
`

const Info = styled.div`
	flex: 3;
`

const Summary = styled.div`
	flex: 1;
`

const Product = styled.div``

const ProductDetails = styled.div``

const Image = styled.div``

const Details = styled.div``

const ProductName = styled.div``

const ProductId = styled.div``

const ProductColor = styled.div``

const ProductSize = styled.div``

const PriceDetails = styled.div``

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
								<ProductName><b>Название:</b>Кардиган</ProductName>
								<ProductId><b>Артикул:</b>353</ProductId>
								<ProductColor/>
								<ProductSize><b>Размер:</b>37</ProductSize>
							</Details>
						</ProductDetails>
						<PriceDetails>
							цена
						</PriceDetails>
					</Product>
				</Info>
				<Summary>резюме</Summary>
			</Bottom>
		</Wrapper>
		<Footer/>
	</Container>;
};

export default Cart;
