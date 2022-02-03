import styled from "styled-components";

const Container = styled.div`
	height: 30px;
	background-color: red;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 14px;
	font-weight: 500;
`

const Announcement = () => {
	return <Container>
		Акция! Бесплатная доставка при заказе от 1000р
	</Container>;
};

export default Announcement;
