import React from "react"
import BackgroundImage from "./BackgroundImage"
import Section from "./Section"
import styled from "styled-components"

const StyledContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 2;
    overflowY: auto;
`

const ContentWrapper = ({ imageUrl }) => {
    const testQuote = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus id interdum velit laoreet id donec. Vivamus at augue eget arcu dictum varius duis at. Id aliquet lectus proin nibh. Sit amet mauris commodo quis. Est sit amet facilisis magna etiam tempor orci eu lobortis. Nec ullamcorper sit amet risus nullam eget felis eget nunc. Pretium viverra suspendisse potenti nullam ac. A lacus vestibulum sed arcu."

    return (
        <StyledContentWrapper>
            <Section quote={testQuote}/>
            <Section quote={testQuote}/>
            <Section quote={testQuote}/>
        </StyledContentWrapper>   
    )
}

export default ContentWrapper