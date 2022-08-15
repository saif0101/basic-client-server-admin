import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   width :100%;
   height : 100vh;
   display : flex;
   position:relative;
   
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color :#fff7f7;
  border-radius: 50%;
  align-items:center;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left : ${props =>props.direction==="left"&& "10px"};
  right : ${props =>props.direction==="right"&& "10px"};
  margin:auto;
  cursor:pointer;
  opacity: 0.5;

  `;
const Wrapper = styled.div`
    height: 100%;

    `;
    
const Slide = styled.div `
    display: flex;
    align-items:center;
`;
const ImageContainer = styled.div `
    flex :1;
`;
const Image = styled.img``;
 
const InfoContainer = styled.div `
    flex:1;
`;

const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowBackIosNew/>
        </Arrow>
        <Wrapper>
            <ImageContainer>
                <Image src="https://i.ibb.co/cXFnLLV/3.png"/>
            </ImageContainer>
            <InfoContainer></InfoContainer>
        </Wrapper>
        <Arrow direction="right">
            <ArrowForwardIos/>
        </Arrow>
    </Container>
  )
}

export default Slider