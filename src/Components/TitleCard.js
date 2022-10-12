import React from "react"
import styled from "styled-components"

const StyledTitleCard = styled.div`
    display: flex;
    margin: 0;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 100vh;
    z-index: 3;
    background-color: purple;
    h1 {
        font-family: futura, sans-serif;
        line-height: 180%;
        font-size: 68px;
        text-align: center;
    }
`
const TitleCard = ( {title} ) => {
    return (
        <StyledTitleCard>
            <h1>{title}</h1>
        </StyledTitleCard>
    )
}

export default TitleCard