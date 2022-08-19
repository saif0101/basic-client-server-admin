import { Facebook, Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter } from '@mui/icons-material';
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
`;
const Left = styled.div`
  flex:1;
  display:flex;
  flex-direction:column;
  padding:20px;
`;
const Logo = styled.h1``;

const Description = styled.p`
  margin : 20px 0px;
`;

const SocialContainer = styled.div`
 display:flex; 
`;

const SocialIcon = styled.div`
  width :40px;
  height:40px;
  border-radius:50%;
  color:white;
  background-color: #${props => props.color};
  display:flex;
  align-items:center;
  justify-content:center;
  margin-right:20px;
 `;

const Center = styled.div`
  flex:1;
  padding:20px;
`;
const Right = styled.div`
  flex:1;
  padding:20px;
`;
const Footer=()=>{
    return (
      <Container>
        <Left>
           <Logo>W A L A.</Logo>
           <Description> There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.</Description>

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
              <SocialIcon color="E60023">
                 <Pinterest/>
              </SocialIcon>
           </SocialContainer>
        </Left>
        <Center>

        </Center>
        <Right>
        
        </Right>


      </Container>
    )
}

export default Footer;