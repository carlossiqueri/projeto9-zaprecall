import styled from "styled-components";
import { useState } from "react";
import FlashQuestion from "./FlashQuestion";
import FlashAnswer from "./FlashAnswer";
export default function FlashCard(props) {
  const [started, setStarted] = useState(true);
  const [answered, setAnswered] = useState (false)
  const [color, setColor] = useState("")
  function startedZap() {
    setStarted(false);
  }

  return (
    <Card>

      {started || answered ?  (
        <FlashQuestion color={color === "c" ? "#2FBE34" : color === "b" ? "#FF922E" : color === "a" ? "#FF3030" : ""}
          id={props.id}
          question={props.question}
          answer={props.answer}
          startedZap={startedZap}
          started={started}
          setStarted={setStarted}
        />
      ) : (
        <FlashAnswer
          id={props.id}
          question={props.question}
          answer={props.answer}
          startedZap={startedZap}
          started={started}
          setStarted={setStarted}
          cont={props.cont} 
          setCont={props.setCont}  
          setAnswered={setAnswered}
          setColor = {setColor}
        />
)
}

    </Card>
  );
}

const Card = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Recursive:wght@400;700&display=swap");
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  top: 150px;
`;

