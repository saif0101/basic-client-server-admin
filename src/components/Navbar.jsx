import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
   height : 40px;
  
`;
const Wrapper = styled.div`
   padding : 2px 20px;
   display : flex;
   align-items : center;
   justify-content : space-between;
`;
const Left = styled.div`
 flex :1;
 display :flex;
 align-items : center;
`;
const SearchContainer = styled.div`
  border : 0.5px solid lightgray;
  display :flex;
  align-items : center;
  margin-left : 15px;
  padding: 5px;
  `;
const Input = styled.input`
  border: none; 
`;

const Languages = styled.span`
font-size :14px;
cursor : pointer;
`;

const Center = styled.div`
 flex :1;
 text-align: center;
`;
const Logo = styled.h1`
font-weight : bold;
`;

const Right = styled.div`
  flex :1;
  display : flex;
  align-items: center;
  justify-content : flex-end;
`;
const MenuItem = styled.div`
 font-size : 14px;
 cursor : pointer;
 margin-left : 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Languages>EN</Languages>
          <SearchContainer>
            <Input />
            <Search style ={{ color:'gray',fontSize:16}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo> Online Shopping</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>

    </Container>
  )
}

export default Navbar