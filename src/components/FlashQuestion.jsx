import { useState } from "react";
import styled from "styled-components";
import seta_play from "../assets/seta_play.png";
import icone_certo from "../assets/icone_certo.png";
import icone_quase from "../assets/icone_quase.png";
import icone_erro from "../assets/icone_erro.png";
export default function FlashQuestion(props) {
  return (
    <Quest color={props.color}>
      <p>Pergunta {props.id}</p>
      <img
        onClick={props.startedZap}
        src={
          props.color == "#2FBE34"
            ? icone_certo
            : props.color == "#FF922E"
            ? icone_quase
            : props.color == "#FF3030"
            ? icone_erro
            : seta_play
        }
        alt={seta_play}
      />
    </Quest>
  );
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
    color: ${(props) => (props.color ? props.color : "#333333")};
    text-decoration: ${(props) => (props.color ? "line-through" : "")};
    margin-left: 15px;
  }

  img {
    width: 20px;
    height: 23px;
    margin-right: 15px;
  }
`;
