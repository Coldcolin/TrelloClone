import React from 'react'
import styled from 'styled-components'
import image from './Images/board.png'
import images from './Images/icons8_right_48px.png'

const SecondPage = () => {
    return (
        <Container>
            <Wrapper>
                <BigWord>It's more than work.It's a way of working together.</BigWord>
                <SmallWord>Start with a Trello Board, lists, and cards. Customize and expand with more features as your teamwork grows. Manage projects, organize tasks, and build team spirit-all in one place</SmallWord>
                <Button>Start doing
                    <img src={images} alt=""/>
                </Button>
                <Image>
                    <img src={image} alt=""/>
                </Image>
                <Paragraph>Join over 1,000,000 teams worldwide that are using Trello to get more done</Paragraph>
            </Wrapper>
        </Container>
    )
}

export default SecondPage

const Container = styled.div`
    width: 100%;
    height: 150vh;
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 320px) and (max-width: 768px){
        margin-top: -250px;
    }
`
const BigWord = styled.div`
    font-size: 40px;
    font-family: poppins;
    font-weight: 600;
    line-height: 56px;
    color: #091e42;
    margin-top: 100px;

    @media (min-width: 320px) and (max-width: 768px){
        font-size: 22px;
        line-height: 30px;
        font-weight: 600;
        text-align: center;
    }
`
const SmallWord = styled.div`
    width: 70%;
    font-size: 23px;
    font-family: poppins;
    line-height: 32px;
    color: #091e42;
    text-align: center;

    @media (min-width: 320px) and (max-width: 768px){
        font-size: 19px;
        line-height: 32px;
        font-weight: 500;
        text-align: center;
        width: 95%;
    }
`
const Button = styled.div`
    width: 170px;
    height: 40px;
    border: 3px solid rgb(0,101,255);
    border-radius: 5px;
    color: rgb(0,101,255);
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 23px;
    font-family: poppins;
    line-height: 32px;

    img{
        width: 20px;
        height: 20px;
        margin: 10px;
        object-fit: contain;
    }
`
const Image =styled.div`
    width: 80%;
    height: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;

    img{
        width: 100%;
        height: 900px;
        object-fit: cover;
    }
    @media (min-width: 320px) and (max-width: 1194px){
        
        img{
            display: none;
        }
    }
`
const Paragraph = styled.div`
    width: 70%;
    font-size: 23px;
    font-family: poppins;
    line-height: 32px;
    color: #091e42;
    text-align: center;

    @media (min-width: 320px) and (max-width: 1194px){
        display: none;
    }
`