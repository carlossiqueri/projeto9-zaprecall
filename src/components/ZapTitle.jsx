import styled from "styled-components";
import logo from "../assets/logo.png"
export default function ZapTitle() {
  return (
    <Top>
       <img src={logo} alt="logo" />
       <h1>ZapRecall</h1> 
    </Top>
  )
}

const Top = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
position: absolute;
top: 40px;
left: 70px; 
display: flex;
align-items: center;
width:250px;

img{
    width:52px;
    height:px;
    margin-right: 20px;
}

h1 {
    
    font-weight: 400;
    font-size: 36px;
    color: #FFFFFF;
    font-family: 'Righteous', cursive;
}
`;
