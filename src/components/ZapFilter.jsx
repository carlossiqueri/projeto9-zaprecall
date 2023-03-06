import ZapTitle from "./ZapTitle";
import ZapCounter from "./ZapCounter";
import styled from "styled-components";
import CardRow from "./CardRow"
import { useState } from "react";

export default function ZapFilter() {
const [cont, setCont] = useState(0);



  return (
      <Main>
        <ZapTitle />
        <CardRow data-test="flashcard" cont={cont} setCont={setCont}/>
        <ZapCounter cont={cont} setCont={setCont}/>
      </Main>

  );
}

const Main = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-y: auto;
  background-color: #fb6b6b;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;



