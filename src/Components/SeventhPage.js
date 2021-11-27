import React from 'react'
import styled from 'styled-components'
import image from './Images/power-ups.png'

const FifthPage = () => {
    return (
        <Container>
            <Wrapper>
                <LeftPart>
                    <Title>POWER-UPS</Title>
                    <BigWord>Integrate top work tools</BigWord>
                    <SmallWord>Easily connect the apps your team already uses into your Trello workflow, or add a Power-Up that helps fine-tune one specific need. With hundreds of Power-Ups available, your team’s workflow wishes are covered.</SmallWord>
                </LeftPart>
                <RightPart src={image}/>
            </Wrapper>
        </Container>
    )
}

export default FifthPage

const Container = styled.div`
    width: 100%;
    height: 70vh;
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content:space-between;
`
const RightPart = styled.img`
    width: 500px;
    height: 400px;
    object-fit:contain;
    margin-right: 200px;
`
const LeftPart = styled.div`
    width: 500px;
    height: 400px;
    margin-left: 200px;
`
const BigWord = styled.div`
    font-size: 40px;
    font-family: poppins;
    font-weight: 600;
    line-height: 56px;
    color: #091e42;
`
const SmallWord = styled.div`
    width: 100%;
    font-size: 23px;
    font-family: poppins;
    line-height: 32px;
    color: grey;
`
const Title = styled.div``

