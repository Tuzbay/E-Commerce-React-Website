import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

import Announcement from "../components/Announcement";

import Newsletter from "../components/Newsletter";

import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";
import { useNavigate } from "react-router";

function Product() {
  const [amount, setAmount] = useState(1);

  const add = () => {
    if (amount === 10) {
      setAmount(10);
    } else {
      setAmount(amount + 1);
    }
  };
  const remove = () => {
    if (amount === 1) {
      setAmount(1);
    } else {
      setAmount(amount + -1);
    }
  };

  const navigate = useNavigate();

  const goCart = () => {
    navigate("/cart");
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas hic
            iste eveniet, officia deserunt error, vero labore neque dolorum
            placeat quod eius ullam perspiciatis repudiandae, odit nesciunt
            minima voluptas debitis. Voluptates, in modi?{" "}
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <AmountFunc>
                <Remove onClick={remove} />
              </AmountFunc>
              <Amount>{amount}</Amount>
              <AmountFunc>
                <Add onClick={add} />
              </AmountFunc>
            </AmountContainer>
            <Button onClick={goCart}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default Product;

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  ${mobile({
    padding: "10px",
    flexDirection: "column",
  })}
`;

const ImgContainer = styled.div`
  flex: 1; ;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({
    height: "40vh",
  })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({
    padding: "10px",
  })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0;
`;

const Price = styled.div`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 40%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  ${mobile({
    width: "100%",
  })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const AmountFunc = styled.div`
  cursor: pointer;
  display: flex;
`;
