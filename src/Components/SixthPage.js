import React from 'react'
import styled from 'styled-components'
import image from './Images/automation.png'

const SixthPage = () => {
    return (
        <Container>
            <Wrapper>
                <RightPart src={image}/>
                <LeftPart>
                    <Title>MEET YOUR NEW BUTLER</Title>
                    <BigWord>No-code automation</BigWord>
                    <SmallWord>Let the robots do the work—so your team can focus on work that matters. With Trello’s built-in automation, Butler, reduce the number of tedious tasks (and clicks) on your project board by harnessing the power of automation across your entire team.</SmallWord>
                </LeftPart>
            </Wrapper>
        </Container>
    )
}

export default SixthPage

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

