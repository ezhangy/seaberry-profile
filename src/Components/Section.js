import React from "react"
import { useState } from "react"
import styled from "styled-components"

const StyledQuoteBox = styled.div`
    margin: 15% 25%;
    border: 2px solid white;
    background-color: white;
    padding: 2%;
`

const StyledSection = styled.div`
`

const QuoteBox = ({ quote })  => {
    return (
        <StyledQuoteBox>
            {quote}   
        </StyledQuoteBox>
    )
}

const Section = ({ quote, imageUrl }) => {
    return (
        <StyledSection>
            <QuoteBox quote={quote}/>
        </StyledSection>
    )
}

export default Section