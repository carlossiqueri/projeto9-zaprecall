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
align-items: center;
width: 100%;
height: 70px;
position: fixed;
bottom: 0px;
background-color: #FFFFFF;
p{
    color: #333333;
    font-weight: 400;
    font-size: 18px;
    font-family: 'Recursive', sans-serif;
}
`