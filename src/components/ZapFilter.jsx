import ZapTitle from "./ZapTitle";
import ZapCounter from "./ZapCounter";
import styled from "styled-components";
import CardRow from "./CardRow"

export default function ZapFilter() {
  return (
    <>
      <Main>
        <ZapTitle />
        <CardRow />
        <ZapCounter />
      </Main>
    </>
  );
}

const Main = styled.div`
  width: 100%;
  height: 800px;
  background-color: #fb6b6b;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;



