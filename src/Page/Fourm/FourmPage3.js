import React from 'react'
import './Wwe.css'
import styled from 'styled-components';
import { motion } from 'framer-motion'
import { Button } from '../../components/Navbar/Navbar';
import logo from '../../components/Navbar/logo.svg'
//import { H } from '../Page2/Page2';
import { IoMdArrowRoundBack } from 'react-icons/io';
import WideBox from './components/WideBox';
import image from './components/img.png'

const Sec = styled.section`
    min-height: 40rem;
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
    margin-bottom: 2rem;
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
    margin: 0 12%;
    

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
const Input = styled.input`
    
`
const InputContainer = styled.div`
    border: 1px solid rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 25rem;
    border-radius: 0.75rem;
`


const FourmPage3 = () => {
    return (
        <Sec>
           
                    <Left>
                        <img src={logo} alt='' style={{width:'5rem',height:'5rem'}} />
                        <Margin>
                            <T>3 of 4</T>
                            <H >
                            Add a photo/video
                            </H>
                            <T> Please ensure the photo/video is clear and bright so that people will look at your fundraiser</T>
                        </Margin>
                    </Left>
                    
                    <Right>
                        <MarginLeft>
                          

                            <InputContainer>
                                <Input type="image" src='https://www.pngkit.com/png/full/129-1298005_png-file-upload-image-icon-png.png' alt="" className="input1" style={{height:'3rem',width:'3.5rem'}} />
                                <div style={{margin:'1.5rem 0 0 0'}}>Drag or Upload the photo/video here</div>
                            </InputContainer>
                               
                            
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

export default FourmPage3
