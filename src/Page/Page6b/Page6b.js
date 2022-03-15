import React,{useState} from 'react'
import './Content.css'
import styled from 'styled-components'
import { FaAngleDown } from 'react-icons/fa';
import { H } from '../Page2/Page2'

const Sec = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden !important;
    background-image: radial-gradient(circle, #000000, #0d0d0d, #161617, #1d1d1e, #232526);
    background-size: 100% auto;
    background-repeat: no-repeat;
    flex-direction: column;
    paading: 0 0 3rem 0;
    @media only screen and (max-width: 768px) {
        min-height: 60rem;
        background-size: auto 100% !important;
        width: 100%;
        padding: 1rem 0.5rem 1rem 0.5rem;
        flex-direction: column;
    }

`

const Left = styled.div`
        width: 40vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    @media only screen and (max-width: 768px) {
        margin-right: 0;
        width: 100%;
        padding: 0 1rem;
      }
`;

const Right = styled.div`
      width: 40vw;
      display: flex;
        flex-direction: column;
        justify-content: space-between;
      @media only screen and (max-width: 768px) {
        width: 100%;
        padding: 0 1rem;
      }
`;

const T = styled.p`
    color:  #000000;
    font-weight: 500;
    font-size: 1.5rem;
 
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;
      }
`;

const Hp = styled.h1`
    color:  #000;
    font-size: 2.5rem;
    font-weight: bold;
    
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1.2rem;
        font-weight: bold;
      }
`;

const Box = styled.div`
    color: #FFFFFF;
    background:linear-gradient(to right, #f2994a, #f2c94c)  ;
    width: 1200px;
    font-size: 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 1.2rem;
    justify-content: space-between;
    padding: 1.5rem 1.5rem;
    margin: 1rem 0;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    @media only screen and (max-width: 1500px) {
      width: 95%;
    }
    @media only screen and (max-width: 768px) {
        width: 95%;
      }
`;

const Content = styled.div`
      //  background:linear-gradient(to top, #0f2027, #203a43, #2c5364)   ;
       width: 100%;
       padding: 1rem 2rem ;
       font-size: 1.3rem;
       color: #E5E5E%;
       @media only screen and (max-width: 768px) {
        padding: 1rem;
        font-size: 1rem;
      }
`
const Upper = styled.div`
display: flex;
align-items: center;
      border-radius: 1rem;
    justify-content: space-between;
    padding: 0.5rem 1.5rem;
    width: 100%;
`
const Width  = styled.div`
    width: 1600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    @media only screen and (max-width: 1700px) {
        width: 93%;
        justify-content: space-between;
    }
    @media only screen and (max-width: 1400px) {
        width: 96%;
        justify-content: space-between;
    }
    @media only screen and (max-width: 1000px) {
        width: 99%;
       
    }
    @media only screen and (max-width: 800px) {
        width: 99%;
        flex-direction: column;
        margin: 10rem  0 0 0;
    }
    @media only screen and (max-width: 600px) {
        width: 99%;
        
        margin: 5rem  0 0 0;
    }
`
const Image = styled.div`
      width: 20rem;
      position: relative;
      display: flex;
      
      align-items: center;
      justify-content: center;
`

const Page6b = () => {

  const [ open1, setOpen1 ] = useState(false);
  const [ open2, setOpen2 ] = useState(false);
  const [ open3, setOpen3 ] = useState(false);
  const [ open4, setOpen4 ] = useState(false);
  const [ open5, setOpen5 ] = useState(false);

    return (
        <Sec id="roadmap">
            <Width>
             
                <H>
                  FAQ
                </H>
               
             <Box>

                <Upper>
                  <T>Why Should I mint King Solomon?</T>
                  <FaAngleDown color="#000000" onClick={ () => open1 ? setOpen1(false) : setOpen1(true)} style={{cursor:"pointer"}} />
                </Upper>

                <Content className={ open1 ? "show" : "hide" } >
                Minting King Solomon can open your doors to a world of opportunities. We’re offering a 1:1 Gifted NFT at 50% per project sold for Holders from Mint. This is in addition to the 25% royalties holders will receive!
                </Content>

            </Box>
            <Box>

                <Upper>
                  <T>Which cryptocurrency can I buy King Solomon against?</T>
                  <FaAngleDown color="#000000" onClick={ () => open2 ? setOpen2(false) : setOpen2(true)} style={{cursor:"pointer"}} />
                </Upper>

                <Content className={ open2 ? "show" : "hide" } >

                King Solomon is based on the ETH network and can be bought in a pair with ETH (add more such as USDT etc.)
                </Content>

            </Box>
            <Box>

                <Upper>
                  <T>What exchanges is King Solomon available on?</T>
                  <FaAngleDown color="#000000" onClick={ () => open3 ? setOpen3(false) : setOpen3(true)} style={{cursor:"pointer"}} />
                </Upper>

                <Content className={ open3 ? "show" : "hide" } >
                The King Solomon token will be available for trading on (add exchanges like Binance Kucoin etc.)
                </Content>

            </Box>

            <Box>

                <Upper>
                  <T>Is there a Discord server I could join?</T>
                  <FaAngleDown color="#000" onClick={ () => open4 ? setOpen4(false) : setOpen4(true)} style={{cursor:"pointer"}} />
                </Upper>

                <Content className={ open4 ? "show" : "hide" } >
                    Option 1: King Solomon has a discord channel called (add handle) that everyone can join.
                    <div style={{margin:"1rem 0",  fontFamily: "Courier New"}}>
                    Option 2: King Solomon has a discord channel called (add handle) that only exclusive members can join.
                    </div>
                    Option 3: King Solomon does not have a discord channel as of yet. Stay tuned for more updates!  
                </Content>

            </Box>
            <Box>

                <Upper>
                  <T>Will there be an IPO for King Solomon on Open Sea?</T>
                  <FaAngleDown color="#000" onClick={ () => open5 ? setOpen5(false) : setOpen5(true)} style={{cursor:"pointer"}} />
                </Upper>

                <Content className={ open5 ? "show" : "hide" } >
                Yes! The IPO launch is scheduled for (add date)
                </Content>

            </Box>
            
          </Width>
        </Sec>
    )
}

export default Page6b
