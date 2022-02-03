import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Container = styled.div``

const Title = styled.h1`
	margin: 20px;
`

const FilterContainer = styled.div`
	display: flex;
	justify-content: space-between;
`

const Filter = styled.div`
	margin: 20px;
`

const FilterText = styled.span`
	font-size: 20px;
	font-weight: 600;
	margin-right: 20px;
`

const Select = styled.select`
	padding: 10px;
	margin-right: 20px;
`

const Option = styled.option``

const ProductList = () => {
	return <Container>
		<Navbar/>
		<Announcement/>
		<Title>Куртки</Title>
		<FilterContainer>
			<Filter>
				<FilterText>Фильтры:</FilterText>
				<Select>
					<Option disabled selected>
						Цвета
					</Option>
					<Option>Белый</Option>
					<Option>Черный</Option>
					<Option>Красный</Option>
					<Option>Синий</Option>
					<Option>Желтый</Option>
					<Option>Зеленый</Option>
				</Select>
				<Select>
					<Option disabled selected>
						Размер
					</Option>
					<Option>XS</Option>
					<Option>S</Option>
					<Option>M</Option>
					<Option>L</Option>
					<Option>XL</Option>
				</Select>
			</Filter>
			<Filter>
				<FilterText>Сортировка:</FilterText>
				<Select>
					<Option selected>Новинки</Option>
					<Option>По увеличению цены</Option>
					<Option>По уменьшению цены</Option>
				</Select>
			</Filter>
		</FilterContainer>
		<Products/>
		<Newsletter/>
		<Footer/>
	</Container>;
};

export default ProductList;
