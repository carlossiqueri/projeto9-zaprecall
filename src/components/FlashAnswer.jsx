import styled from "styled-components";
import { useState } from "react";
import seta_virar from "../assets/seta_virar.png";
export default function FlashAnswer(props) {
const [revealed, setRevealed] = useState(false)
function answerReveal (){
  setRevealed(true);
}

function attCont (clicked){
  props.setCont(props.cont + 1);
  props.setAnswered(true);
  props.setColor(clicked);
}

  return (
    <div>
        <Answer>
          <p data-test="flashcard-text">{!revealed ? props.question : props.answer}</p>
          {!revealed ? <img data-test="turn-btn" onClick={answerReveal} src={seta_virar} alt=""/> : ""}
          
          {!revealed ? "" :

          <ContainerButtons>
          <Button onClick={() => attCont("a")} color="#FF3030">Não lembrei</Button>
          <Button onClick={() => attCont("b")} color="#FF922E">Quase não lembrei</Button>
          <Button onClick={() => attCont("c")} color="#2FBE34">Zap!</Button>
          </ContainerButtons>
      }
        </Answer>

        
    </div>
  );

}


const Answer = styled.div`
  width: 300px;
  height: 131px;
  background-color: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;


  p {
    font-family: "Recursive", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 16px;
    color: #333333;
    margin-left: 15px;
    margin-top: 18px;
  }

  img {
    width: 20px;
    height: 23px;
    margin-right: 15px;
    position: relative;
    bottom: 8px;
    left: 266px;

  }
`;

const Button = styled.div `
  @import url('https://fonts.googleapis.com/css2?family=Recursive&display=swap');
    width: 86px;
    height: 38px;
    border-radius: 5px;
    background-color: ${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    font-family: 'Recursive', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

`

const ContainerButtons = styled.div `
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`
