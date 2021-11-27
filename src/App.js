import React, {useState} from 'react'
import styled from 'styled-components'
import HeaderNav from './Components/HeaderNav'
import TopPage from './Components/TopPage'
import SecondPage from './Components/SecondPage'
import ThirdPage from './Components/ThirdPage'
import FourthPage from './Components/FourthPage'
import FifthPage from './Components/FifthPage'
import SixthPage from './Components/SixthPage'
import SeventhPage from './Components/SeventhPage'
import EightPage from './Components/EightPage'
import Footer from './Components/Footer'

function App() {
  const [cont, setCont] = useState(false)

  const showOff = () =>{
      if(window.scrollY >= 68){
          setCont(true)
      } else {
          setCont(false)
      }
  }
  window.addEventListener('scroll', showOff)

  return (
    <Container>
      <Wrapper>
        <HeaderNav bs={cont? 'bs': ''}/>
        <TopPage/>
        <SecondPage/>
        <ThirdPage/>
        <FourthPage/>
        <FifthPage/>
        <SixthPage/>
        <SeventhPage/>
        <EightPage/>
        <Footer/>
      </Wrapper>
    </Container>
  );
}

export default App;

const Container = styled.div``
const Wrapper = styled.div``