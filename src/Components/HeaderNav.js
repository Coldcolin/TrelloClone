import React from 'react'
import styled from 'styled-components'
import img from './Images/Trello_logo.svg.png'

const HeaderNav = ({bs}) => {
    
    return (
        <Container bs={bs} >
            <Wrapper>
                <Right src={img} alt=""/>
                <Left>Log in
                <SignUp>Sign Up</SignUp>
                </Left>
            </Wrapper>
        </Container>

    )
}

export default HeaderNav

const Container = styled.div`
    width: 100%;
    height: 68px;
    background-color: transparent;
    position: fixed;
    box-shadow: ${({bs}) =>(bs? "4px 9px 46px -23px rgba(0,0,0,0.75)": "null")} ;
    
    @media (min-width: 320px) and (max-width: 768px){
        font-size: 12px;
    }
    
    /* -webkit-box-shadow: 4px 9px 46px -23px rgba(0,0,0,0.75);
    -moz-box-shadow: 4px 9px 46px -23px rgba(0,0,0,0.75); */
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Right = styled.img`
    width: 125px;
    height: 65px;
    margin: 10px 15px;
    object-fit: contain;
    @media (min-width: 320px) and (max-width: 768px){
        width: 105px;
        height: 50px;
    }
`
const Left = styled.div`
    width: 150px;
    height: 65px;
    margin: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgb(0,101,255);
    font-size: 18px;
    line-height: 26px;
    font-weight: 500;
    font-size: "Charlie text", san-serif;
    @media (min-width: 320px) and (max-width: 768px){
        font-size: 12px;
    }
`
const SignUp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 80px;
    height: 40px;
    background-color: rgb(0,101,255);
    color: white;
    font-size: 18px;
    line-height: 26px;
    font-weight: 500;
    font-size: "Charlie text", san-serif;
    @media (min-width: 320px) and (max-width: 768px){
        font-size: 12px;
        width: 60px;
        height: 30px;
    }
`