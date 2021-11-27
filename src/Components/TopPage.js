import React from 'react'
import styled from 'styled-components'
import hero from './Images/hero.png'

const TopPage = () => {
    return (
        <Container>
            <Wrapper>
                <LeftPart>
                    <BigWord>Trello helps teams move work forward.</BigWord>
                    <SmallWord>Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique—accomplish it all with Trello.</SmallWord>
                    <Enter>
                    <Email placeholder="Email"/>
                    <SignUp>SignUp-it's free!</SignUp>
                    </Enter>
                </LeftPart>
                <RightPart>
                    <img src={hero} alt=""/>
                </RightPart>
            </Wrapper>
        </Container>
    )
}

export default TopPage

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(to bottom,#ECE9FF, white);
    @media (min-width: 320px) and (max-width: 768px){
        width: 100%auto;
    }
`

const Wrapper = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (min-width: 320px) and (max-width: 768px){
        
    }
`
const LeftPart = styled.div`
    width: 650px;
    height: 400px;
    margin-left: 200px;
    margin-top: 250px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    @media (min-width: 320px) and (max-width: 768px){
        margin-left: 10px;
        margin-top: 100px;
        align-items: center;
    }
`
const RightPart = styled.div`
    width: 500px;
    height: 580px;
    margin-top: 200px;
    margin-right: 90px;

    img{
        width: 500px;
        height: 600px;
        object-fit: contain;
    }
    @media (min-width: 320px) and (max-width: 1194px){
        display: none;
    }
`
const BigWord = styled.div`
    font-size: 40px;
    line-height: 60px;
    color: #091e42;
    font-weight: 600;
    font-family: poppins;
    @media (min-width: 320px) and (max-width: 768px){
        font-size: 30px;
        line-height: 40px;
        font-weight: 600;
        text-align: center;
        }

`
const SmallWord = styled.div`
    font-size: 18px;
    font-family: poppins;
    line-height: 30px;
    font-weight: 400;
    color: #091e42;
    @media (min-width: 320px) and (max-width: 768px){
        font-size: 19px;
        line-height: 32px;
        font-weight: 500;
        text-align: center;
        width: 95%;
    }
`
const Email = styled.input`
    width: 320px;
    height: 40px;
    border: 1px solid rgba(0,0,0, 0.3);
    border-radius: 7px;
    margin-right: 20px;
    font-size: 20px;
    line-height: 30px;
    font-weight: 400px;
    font-family: poppins;
    padding-left: 10px;
    @media (min-width: 320px) and (max-width: 768px){
        display: none;
    }
`
const SignUp = styled.button`
    width: 250px;
    height: 45px;
    border: 1px solid grey;
    background-color: rgb(0,101,255);
    border-radius: 7px;
    font-size: 20px;
    line-height: 30px;
    font-weight: 400px;
    font-family: poppins;
    color: white;
    @media (min-width: 320px) and (max-width: 768px){
        display: flex;
        justify-content: center;
        align-items: center;
        width: 350px;
    }
`
const Enter =styled.div`
    display: flex;
    margin-top: 50px;
    margin-left: 0;
    align-items: center;
    @media (min-width: 320px) and (max-width: 768px){
        
    }
`