import React from "react"
import { useState } from "react"
import styled from "styled-components"

const StyledTitleCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #6a4687;
    align-text: center;
    gap: 4%;
    opacity: 96%;
    backdrop-filter: blur(50px) saturate(200%);
    box-shadow: 0 20px 20px 10px #000a;
    color: #eac97e;
    h1, h2 {
        line-height: 150%;
        text-align: center;
        font-family: Garamond, serif;
    }
    h1 {   
        margin: 2% 10%;
        font-size: 80px;
        font-weight: bold;
    }
    h3 {
        font-size: 36px;
    }
`


const SectionWrapper = styled.div`
    height: 100vh;
`

const TitleCard = ({ title }) => {
    return (
        <StyledTitleCard>
            <h1>{title}</h1>
            <h2>by Lizzy Zhang</h2>
        </StyledTitleCard>  
    )
}

const IntroBox = ({ text }) => {
    return (
    <SectionWrapper>
        <StyledIntroBox>
            {text}
        </StyledIntroBox>
    </SectionWrapper>  
    )
}

const StyledQuoteBox = styled.div`
    margin: 20% 20%;
    border: 2px solid #f4f2ee;
    background-color: #f4f2ee;
    opacity: 0.90;
    padding: 0% 2%;

    .question {
        font-family: Futura, san-serif;
    }
    font-family: Georgia, serif;
`

const StyledIntroBox = styled(StyledQuoteBox)`
    margin: 20% 8%;
    border: 2px solid #6a4687;
    background-color: #6a4687;
    opacity: 98;
    color: #f4f2ee;
`

const QuoteBox = ({ quote })  => {
    return (
        <SectionWrapper>
            <StyledQuoteBox>
                {quote.question}
                {quote.answer}
            </StyledQuoteBox>
        </SectionWrapper> 
    )
}

export {TitleCard, IntroBox, SectionWrapper, QuoteBox}