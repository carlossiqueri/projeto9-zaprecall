import styled from "styled-components"
import { useState } from "react"
import seta_virar from "../assets/seta_virar.png"
export default function FlashAnswer (question){
    return (
        <div>
        <CardAnswer>
        <Answer>
        <p>{question}</p>
          <img  
          src={seta_virar} />
          </Answer>
    </CardAnswer>
        </div>
    )
}


const CardAnswer = styled.div `
@import url("https://fonts.googleapis.com/css2?family=Recursive:wght@400;700&display=swap");
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  top: 150px;
`

const Answer = styled.div `
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
`