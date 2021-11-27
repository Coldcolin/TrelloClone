import React from 'react'
import styled from 'styled-components'
import image from './Images/compass.svg'
import images from './Images/tag.svg'

const EightPage = () => {
    return (
       <Container>
           <Wrapper>
            <Line></Line>
            <Center>
                <LeftSide>
                    <img src={images} alt=""/>
                    <Inside>
                        <See>See Our pricing</See>
                        <Seeing>Whether You're a team of 2 or 2,000, there's a Trello tailor-made for your organizations.</Seeing>
                        <Button>Trello Pricing</Button>
                    </Inside>
                </LeftSide>
                <RightSide>
                <img src={image} alt=""/>
                    <Inside>
                        <See>See Our pricing</See>
                        <Seeing>Whether You're a team of 2 or 2,000, there's a Trello tailor-made for your organizations.</Seeing>
                        <Button>Trello Pricing</Button>
                    </Inside>
                </RightSide>
            </Center>
            <Line></Line>
           </Wrapper>
       </Container>
    )
}

export default EightPage

const Container = styled.div``
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Line = styled.div`
    width: 80%;
    height: 2px;
    background-color: black;
`
const Center = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
`
const LeftSide = styled.div`
    display: flex;
`
const RightSide = styled.div`
    display: flex;
`
const Inside = styled.div``
const See = styled.div`
    font-size: 20px;
    font-family: poppins;
`
const Seeing = styled.div``
const Button = styled.div``