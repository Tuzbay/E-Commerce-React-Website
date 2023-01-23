import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../responsive";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const register = () => {
    navigate("/register");
  };
  const login = () => {
    navigate("/login");
  };
  const cart = () => {
    navigate("/cart");
  };
  const homePage = () => {
    navigate("/");
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo onClick={homePage}>TUZBAY</Logo>
        </Center>
        <Right>
          <MenuItem onClick={register}>REGISTER</MenuItem>
          <MenuItem onClick={login}>SIGN IN</MenuItem>
          <MenuItem onClick={cart}>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;

// ! Main Start ! \\

const Container = styled.div`
  height: 60px;

  ${mobile({
    height: "50px",
  })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({
    padding: "10px 0",
  })}
`;

// ! Main End ! \\

// ! Left Side Start ! \\
const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({
    display: "none",
  })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({
    width: "50px",
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
// ! Left Side End ! \\

// ! Center Side Start ! \\
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
  ${mobile({
    fontSize: "24px",
  })}
`;
// ! Center Side End ! \\

// ! Right Side Start ! \\
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
    flex: 2,
    justifyContent: "center",
  })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({
    fontSize: "12px",
    marginLeft: "10px",
  })}
`;
// ! Right Side End ! \\
