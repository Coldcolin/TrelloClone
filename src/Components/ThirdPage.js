import React from 'react'
import styled from 'styled-components'

const ThirdPage = () => {
    return (
        <Container>
            <Wrapper>
                <BigWord>Features to help your team succeed</BigWord>
                <SmallWord>Powering a productive team means using a powerful tool(and plenty of snacks). From meetings and projects to events and goal setting. Trello's intuitive features give any team the ability to quickly set up and customize workflows for just about anything.</SmallWord>
            </Wrapper>
        </Container>
    )
}

export default ThirdPage

const Container = styled.div`
    margin-top: 300px;
    width: 100%;
    height: 50vh;
`
const Wrapper = styled.div`
    height: 50vh;
    display: flex;
    flex-direction: column;
    width: 50%;
`
const BigWord = styled.div`
    font-size: 40px;
    font-family: poppins;
    font-weight: 600;
    line-height: 56px;
    color: #091e42;
    margin-left: 70px;
`
const SmallWord = styled.div`
    width: 100%;
    font-size: 23px;
    font-family: poppins;
    line-height: 32px;
    color: #091e42;
    margin-left: 70px;
`
