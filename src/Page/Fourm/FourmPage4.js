import React from 'react'
import './Wwe.css'
import styled from 'styled-components';
import { motion } from 'framer-motion'
import { Button } from '../../components/Navbar/Navbar';
import logo from '../../components/Navbar/logo.svg'
//import { H } from '../Page2/Page2';
import { IoMdArrowRoundBack } from 'react-icons/io';
import WideBox from './components/WideBox';

const Sec = styled.section`
    min-height: 50rem;
    width: 100%;
    display: flex;
    padding: 4rem 0;
    // flex-direction: column;
      // align-items: center;
       justify-content: center;
       background-color: rgba(249, 232, 202, 1);
    @media only screen and (max-width: 1100px) {
        
        flex-direction: column;
        
      }
`;

const Width = styled.div`
      width: 1300px;
      display: flex;
     // flex-direction: column;
        align-items: center;
        justify-content: center;
    
    @media only screen and (max-width: 1400px) {
        width: 95%;
    }
    @media only screen and (max-width: 1100px) {
        flex-direction: column;
    }
`

const H = styled.h1`
    color: #000;
    font-size: 2rem;
    font-weight: light;
    margin-bottom: 2rem;
    text-align: left !important;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1.2rem;
        font-weight: bold;
      }
`;


const T = styled.p`
    color: #000;
    font-weight: 500;
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
   // text-align: center;
    //width: 20rem;

    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;
        
      }
`;

const Left = styled.div`
        width: 40%;
        display: flex;
        //justify-content: center;
        flex-direction: column;
        padding: 0 2rem;
        margin: 5rem 0 0 0;
     
        @media only screen and (max-width: 1100px) {
            width: 100%;
        }

`;

const Right = styled.div`
        display: flex;
        justify-content: space-between;
        flex-direction: column;
     // align-items: center;
        width: 60%;
        padding: 5rem 0 3rem 0;
      border-radius: 2rem 0 0 0;
      background-color: rgba(255,255,255,0.9);
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

        @media only screen and (max-width: 1100px) {
            width: 100%;
            margin: 3rem 0 0 0;
        }

`;

const Line = styled.div`
    width: 100%;
    height: 1px;
    background: rgba(0,0,0,0.2);
    margin: 3rem 0 0 0;
`
const Margin = styled.div`
    margin: 4rem 0 0 0;

    @media only screen and (max-width: 1100px) {
        
        margin: 3rem 0 0 0;
    }

`
const MarginLeft = styled.div`
    margin: 0 2rem 0 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
   // align-items: center;

    @media only screen and (max-width: 1100px) {
        
        margin: 0 1rem;
    }
`

const Grid = styled.div`
    display: flex;
    flex-direction: column;

    width: 998px;
    margin: 3rem 0 0 0;
   

 
      @media only screen and (max-width: 1800px) {
        width: 100%;
     
    }

    @media only screen and (max-width: 768px) {
        width: 100%;
       
    }
   
`
const Flex = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: 2rem 0 0 0;
`

const FourmPage4 = () => {
    return (
        <Sec>
           
                    <Left>
                        <img src={logo} alt='' style={{width:'5rem',height:'5rem'}} />
                        <Margin>
                            <T>4 of 4</T>
                            <H >
                            Explain us the purpose of your fundraising
                            </H>
                            <T>Introduce yourself and about the purpose</T>
                            <T>Describe why you are concerned and importance of funding</T>
                            <T>Detail how the funds will be utilized</T>
                        </Margin>
                    </Left>
                    
                    <Right>
                        <MarginLeft>
                            <T style={{margin:'0 0 0 0',fontSize:'1.6rem',color:'rgba(0,0,0,0.9)'}}>
                            Name your fundraiser</T>
   
                       
                                <input type="Text" placeholder="Donate to help"  className="input1" style={{height:"3.75rem",width:"10rem",border:'1px solid rgba(0,0,0,0.2)',borderRadius:'0.75rem',width:'60%',margin:'2rem 0 0 0'}} />
                                
                         
                           
                            <div style={{margin:'2rem 0 0 0'}}>
                            <T style={{margin:'0 0 0 0',fontSize:'1.6rem',color:'rgba(0,0,0,0.9)'}}>
                            Details on your fundraising</T>
   
                       
                                <input type="Text" placeholder="Your goal amount"  className="input1" style={{height:"3.75rem",width:"10rem",border:'1px solid rgba(0,0,0,0.2)',borderRadius:'0.75rem',width:'60%',margin:'2rem 0 0 0'}} />
                            </div>
                        </MarginLeft>
                        <div >
                            <Line />
                            <div style={{width:'100%',display:'flex',alignItems:'center', justifyContent:'space-between',margin:'2rem 0 0 0'}}>
                                <IoMdArrowRoundBack  style={{margin:'0 0 0 2rem',fontSize:'2rem'}}/>
                                <Button style={{width:'10rem',borderRadius:'1rem',margin:'0 2rem 0 0'}}>
                                    Next
                                </Button>
                            </div>
                        </div>
                    </Right>

                   
             
        </Sec>
    )
}

export default FourmPage4
