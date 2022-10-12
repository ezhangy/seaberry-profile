import { useState, useEffect } from "react"
import styled from "styled-components"
import { useRef } from 'react'
import './App.css'
import ContentWrapper from "./Components/ContentWrapper"
import BackgroundImage from "./Components/BackgroundImage"
import TitleCard from "./Components/TitleCard"
import useWindowDimensions from "./Hooks/DimensionHook"


const App = () => {
  const { height, width } = useWindowDimensions();
  const [imageCounter, setImageCounter] = useState()
  const [scrollTop, setScrollTop] = useState(0)
  const mainImageArr = [
      require("./images/studio_med.jpg"),
      require("./images/studio_med.jpg"),
      require("./images/studio_med.jpg"),
      require("./images/books.jpg"), 
      require("./images/painting_drafts.jpg"), 
      require("./images/painting_drafts.jpg"),
      require("./images/two_paintings_wall.jpg"),
      require("./images/disco_ball.jpg"),
      require("./images/disco_ball.jpg")
    ]
  
  useEffect(() => {
    const handleScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop)
    }
    window.addEventListener("scroll", handleScroll)

    const offset = height * 0
    const index = Math.floor((scrollTop + offset) / height)
    setImageCounter(index)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrollTop])


  useEffect(() => {
    console.log("image changed!")
  }, [imageCounter])

  return (
    <>
      {/* <TitleCard title={title}/> */}
      <ContentWrapper/>
      <BackgroundImage parentIndex={imageCounter} images={mainImageArr}/>
    </>
  )
}

export default App