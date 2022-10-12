import React from "react"
import styled from "styled-components"

const StyledBackgroundImage = styled.div`
    height: 100vh;
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        z-index: 1;
        position: fixed;
    }
`

const BackgroundImage = ({ imageUrl }) => {
    return (
        <StyledBackgroundImage>
            <img src={imageUrl}/>
        </StyledBackgroundImage>
    )
}

export default BackgroundImage