import styled from "styled-components";
import FlashCard from "./FlashCard"
import zaps from "../zaps"
export default function CardRow (){
    return (    
        <>
        {zaps.map((q) => {
            return(
            <FlashCard
            key={q.id} 
            id= {q.id} 
            />
            )
        })}
        </>
    )
}

