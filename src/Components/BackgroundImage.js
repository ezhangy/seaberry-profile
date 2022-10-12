import React from "react"
import { useState, useEffect } from "react"
import { config, useTransition, animated } from "@react-spring/web"
import styled from "styled-components"


const StyledBackgroundImage = styled.div`
    height: 100vh;
    width: 100%;
    z-index: 1;
    position: fixed;
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        position: relative
    }
`

const BackgroundImage = ({ parentIndex, images }) => {
    const [imageIndex, setImageIndex] = useState(0)

    useEffect(() => {
        setImageIndex(parentIndex)
    }, [parentIndex])

    const transitions = useTransition(images[imageIndex], {
        from: { opacity: 0, position: "absolute" },
        enter: { opacity: 1 },
        leave: { opacity: 0},
        config: config.molasses
    })

    return transitions((styles, item) => 
        item &&
        <StyledBackgroundImage>
            <animated.img 
            style={styles}
            src={item}
        />
        </StyledBackgroundImage>
    )

    // return transitions.map(({ item, props, key }) => (
    //     <StyledBackgroundImage>
    //         <animated.img key={key} style={{...props}} src={images[item]}/>
    //     </StyledBackgroundImage>
    // ))

    // return transitions.map(({ item, props, key }) => (
    //     <animated.div
    //       key={key}
    //       style={{ ...props, backgroundImage: {item} }}
    //     />
    // ))

    // return transitions(({ styles }, item) => item &&
    //     <StyledBackgroundImage>
    //         <animated.img style={styles} src={images[item]}></animated.img>
    //     </StyledBackgroundImage>
    // )
}

export default BackgroundImage