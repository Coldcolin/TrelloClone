import React from 'react'
import styled from 'styled-components'
import image from './Images/view.svg'

const FourthPage = () => {
    return (
        <Container>
            <Wrapper>
                <RightPart src={image}/>
                <LeftPart>
                    <Title>CHOOSE A VIEW</Title>
                    <BigWord>The board is just beginning</BigWord>
                    <SmallWord>Lists and cards are the building blocks of organizing work Trello board. Grow from there with task assignments, time, productivity metrics, calendars, and more.</SmallWord>
                </LeftPart>
            </Wrapper>
        </Container>
    )
}

export default FourthPage

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
    margin-left: 200px;
`
const LeftPart = styled.div`
    width: 500px;
    height: 400px;
    margin-right: 200px;
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

