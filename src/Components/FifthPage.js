import React from 'react'
import styled from 'styled-components'
import image from './Images/card-back.svg'

const FifthPage = () => {
    return (
        <Container>
            <Wrapper>
                <LeftPart>
                    <Title>DIVE INTO THE DETAILS</Title>
                    <BigWord>Cards contain everything you need</BigWord>
                    <SmallWord>Trello cards are your portal to more organized work—where every single part of your task can be managed, tracked, and shared with teammates. Open any card to uncover an ecosystem of checklists, due dates, attachments, conversations, and more.</SmallWord>
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

