import { useState } from "react";
import styled from "styled-components";
import seta_play from "../assets/seta_play.png";
export default function FlashQuestion(props) {
    return (
        <Quest>
        <p>Pergunta {props.id}</p>
        <img onClick={props.startedZap} src={seta_play} alt={seta_play} /> 
        </Quest>
    )
}

const Quest = styled.div`
  width: 300px;
  height: 65px;
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
  }
`;
