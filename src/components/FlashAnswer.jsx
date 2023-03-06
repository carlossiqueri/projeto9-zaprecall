import styled from "styled-components";
import { useState } from "react";
import seta_virar from "../assets/seta_virar.png";
export default function FlashAnswer(props) {
const [revealed, setRevealed] = useState(false)
function answerReveal (){
  setRevealed(true);
}
  return (
    <div>
        <Answer>
          <p>{!revealed ? props.question : props.answer}</p>
          <img onClick={answerReveal} src={seta_virar} alt=""/>
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
  justify-content: space-between;
  align-items: center;

  p {
    font-family: "Recursive", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 16px;
    color: #333333;
    margin-left: 15px;
  }

  img {
    width: 20px;
    height: 23px;
    margin-right: 15px;
    position: relative;
    top: 45px;
    right: 5px;
  }
`;
