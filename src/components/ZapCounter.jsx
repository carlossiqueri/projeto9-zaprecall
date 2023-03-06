import styled from "styled-components"
import zaps from "../zaps"
export default function ZapCounter (){
    return (
        <Counter>
            <p>0/{zaps.length} CONCLUÍDOS</p>
        </Counter>
    )
}

const Counter = styled.div `
@import url('https://fonts.googleapis.com/css2?family=Recursive&display=swap');
display: flex;
justify-content: center;
height: 70px;
width: 100%;
position: fixed;
bottom: 0;
z-index: 3;

p{
    margin-top: 15px;
    color: #333333;
    font-weight: 400;
    font-size: 18px;
    font-family: 'Recursive', sans-serif;
}
`