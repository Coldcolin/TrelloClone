import React from 'react'
import styled from 'styled-components'
import image from './Images/atlassian-logo-gray-small.svg'

const Footer = () => {
    return (
       <Container>
           <Wrapper>
               <Links>
                   <Link>Templates</Link>
                   <Link>Pricing</Link>
                   <Link>Apps</Link>
                   <Link>Jobs</Link>
                   <Link>Blog</Link>
                   <Link>Developers</Link>
                   <Link>About</Link>
                   <Link>Help</Link>
                   <Link>Legal</Link>
                   <Link>Cookie Setting</Link>
                   <Link>Privacy</Link>
               </Links>
               <Image>
                   <img src={image} alt=""/>
               </Image>
               <Copy>(C) Copyright 2021. All rights reserved.</Copy>
           </Wrapper>
       </Container>
    )
}

export default Footer

const Container = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content:center;
`
const Wrapper = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Links = styled.div`
    width: 100%;
    display: flex;
    justify-content:space-between;
`
const Image = styled.div`
    width: 200px;
    height: 70px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 200px;
        height: 70px;
        object-fit: contain;
    }
`
const Copy = styled.div``
const Link = styled.div`
    text-decoration: underline;
    color: grey;
    font-family: poppins;
`