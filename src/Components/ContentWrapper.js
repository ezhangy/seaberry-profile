import React from "react"
import BackgroundImage from "./BackgroundImage"
import { TitleCard, QuoteBox, IntroBox, SectionWrapper } from "./Section"
import styled from "styled-components"
import '../App.css'

const StyledContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 2;
    overflowY: auto;
`

const ContentWrapper = () => {
    const title = "Entangling Worlds: An Interview with Jordan Seaberry"

    const quote1 = {
        question: (
            <div className="question"> 
                <p>You said that the fires of the future are going to be put out by the tools today, and that these tools are things that artists name and are able to hand to one another. I wanted to ask you more about what you think these tools are, and how you think art can be a site of resistance. What role does art have to play?</p>
            </div>), 

        answer: (
            <div className="answer"> 
                <p>For me, politics is central to our humanity, because it is definitionally the way that we relate to each other. It's the the way that we choose to build relationships with each other. And that means we can choose to have relationships based on retribution and competition. Or we can choose to have relationships based on solidarity and cooperation.</p>

                <p className="answer">Artists have a major role in demonstrating that not only are these solidarity economies, cooperatives, and alternative ways of thinking about your own identity—not only are those possible—but those can manifest today. And they lead directly into political organizing. Art, for me, is like the perfect gateway drug from thinking critically into acting critically.</p>
            </div>)
    }
    const quote2 = {
        question: (
            <div className="question">
                <p>In your exhibition, <i>But Mostly We Waited for Spring, When There Could be Gardens</i>, you painted important people in your life, drawing inspiration frrom Works Progress Administration (WPA) photographs. Do you feel it’s important to make people you have a personal connection with the subjects of your paintings?</p>
            </div>
        ),
        answer: (
            <div className="answer">
                <p>This is the first time that you can draw a direct line between the individual in the real world and the painting. Some of that is following the lead of some of the incredible artists who have really inspired me in the past few years—particularly Sadie Barnette and Jennifer Packer—who just have demonstrated the political power of championing the folks in your own life. Of planting the flag and saying emphatically that they matter, because I matter, because you matter—and for me, it actually was a really profound transformation.</p>
                <p> A lot of my past work involves specific characters. There's a character Momentum that I paint a lot, who is originally sampled from a Kerry James Marshall painting, and who then became this fictionalized character who is reincarnated at moments of revolt. Physically he can see revolutionary atmosphere. So the colors of the sky and the ground in the water are all really unusual, because we're seeing through his eyes this moment of revolt.</p>

                <p>Ideas like that have always fixate and have always fascinated me. This is the first time that I've really married this interest in compressing the history alongside the people who have really shaped me.</p>
            </div>
    )}

    const quote3 = {
        question: (
            <div className="question">
                <p>You've spent a lot of time in both the art world and in grassroots organizing, and I imagine those to be very different spaces with different ways of navigating through them. Is there anything that jars you as you move between them? What do you bring with you when you cross between these worlds?</p>
            </div>
        ),
        answer: (
            <div className="answer">
                <p>Crossing those boundaries is, I think, the central part of my practice. It is important for me to exist in both: I don't consider myself in more of one than the other. And if I do, I try to balance it out. Because for me, that blurring is the practice. </p>

                <p>I had a professor in undergrad who said something that I have never forgotten, Daniel Bozhkov, who said: n artist is not someone who paints or sculpt or sews. An artist is someone who blurs the line, blurs the distinction between fields. For me, it's less about whether you know, you paint or don't paint. It’s much more about what are you able to infiltrate using your art? What field? Are you able to infiltrate the world of microbiology and infect it with a little artistic creativity? Are you able to get into the world of psychology and sports, law?</p>

                <p>For me, it's really about artistic infiltration, and being able to carry over the politics of relationships that organizing has taught me, into the art world. And also pull along the storytelling, the emphasis on humanity that art has taught me, into the organizing world. So for me, that lifelong practice is actually that blurring of those lines and pulling those worlds a little bit closer together.</p>
            </div>
        )
    }

    const introText = (
        <div>
            <p>Jordan Seaberry is an artist and community organizer based in Providence, Rhode Island. He is co-director of the non-profit organization <i>US Department of Arts and Culture</i>, and serves as Chair of the Providence Elections Board. His art has recently
            been shown at two solo exhibitions: <i>But Mostly We Waited for Spring, When There Could Be Gardens</i> at Steven Zevitas Gallery, and <i>To See
            Is To Forget</i> at Dowling Walsh Gallery. 
            </p>
        </div>
    )


    return (
        <StyledContentWrapper>
            <TitleCard title={title}/>
            <IntroBox text={introText}/>
            <SectionWrapper/>
            <QuoteBox quote={quote1}/>
            <QuoteBox quote={quote2}/>
            <SectionWrapper/>
            <QuoteBox quote={quote3}/>
            <SectionWrapper/>
            <SectionWrapper/>
        </StyledContentWrapper>   
    )
}

export default ContentWrapper