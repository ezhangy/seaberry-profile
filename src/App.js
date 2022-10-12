import { useState, useEffect } from "react"
import styled from "styled-components"
import { useRef } from 'react'
import './App.css'
import ContentWrapper from "./Components/ContentWrapper"
import BackgroundImage from "./Components/BackgroundImage"
import useWindowDimensions from "./Hooks/DimensionHook"


const App = () => {
  // const [mainImage, setMainImage] = useState(mainImageArr[0])
  const { height, width } = useWindowDimensions();
  const [imageCounter, setImageCounter] = useState(0)
  const [scrollTop, setScrollTop] = useState(0)
  const mainImageArr = [require("./images/studioTest1.jpeg"), require("./images/studioTest2.jpeg"), require("./images/studioTest1.jpeg")]

  const testQuote = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus id interdum velit laoreet id donec. Vivamus at augue eget arcu dictum varius duis at. Id aliquet lectus proin nibh. Sit amet mauris commodo quis. Est sit amet facilisis magna etiam tempor orci eu lobortis. Nec ullamcorper sit amet risus nullam eget felis eget nunc. Pretium viverra suspendisse potenti nullam ac. A lacus vestibulum sed arcu."
  
  useEffect(() => {
    const handleScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop)
    }
    window.addEventListener("scroll", handleScroll)

    const index = Math.floor(scrollTop / height)
    setImageCounter(index)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrollTop])

  return (
    <>
      <ContentWrapper/>
      <BackgroundImage imageUrl={mainImageArr[imageCounter]}/>
    </>
  )
}

export default App