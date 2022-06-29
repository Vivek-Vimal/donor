import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion'
import './Css.css'
import { Button } from '../../components/Navbar/Navbar';
import logo from './logo.png'

const Sec = styled.section`
    min-height: 100vh;
    width: 100%;
    display: flex;
    // flex-direction: column;
       align-items: center;
       justify-content: center;
       background-color: rgba(249, 232, 202, 1);
    @media only screen and (max-width: 768px) {
        min-height: 100vh;
        width: 100%;
        padding: 2rem 0;
        flex-direction: column;
        justify-content: space-around;
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

const Img = styled(motion.div)`
        width: 30rem;
        border-radius: 1rem;
    @media only screen and (max-width: 768px) {
        margin-right: 0;
        width: 100%;
        padding: 0 1rem;
      }
`;


const T = styled.p`
    color: #FFF;
    font-weight: 500;
    font-size: 1.2rem;
    margin-bottom: 2rem;
    text-align: center;
    width: 20rem;
    
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;
        
      }
`;

const Left = styled.div`
        width: 35%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        background-color: rgba(2, 169, 92, 1);

        //   @media only screen and (max-width: 1100px) {
        //     width: 50%;
        // }
   

    @media only screen and (max-width: 998px) {
     
        width: 100%;
        padding: 1rem  0;
      
       
      }
`;

const Right = styled.div`
        display: flex;
        justify-content: center;
        flex-direction: column;
      align-items: center;
        width: 60%;
   
        @media only screen and (max-width: 998px) {
     
            width: 100%;
            margin: 0 0 4rem 0;
          
           
          }
     
`;

const Box = styled.div`
    display: flex;
    width: 95%;
    height: 30rem;
    background-color: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

    @media only screen and (max-width: 998px) {
        
       flex-direction: column;
       min-height: 30rem;
       align-items: center;
       justify-content: space-between;

    }
`

const Line = styled.div`
    width: 20rem;
    height: 1px;
    background: rgba(0,0,0,0.2);
`


const Page6a = () => {
    return (
        <Sec>
            <Width>
                <Box>
                    <Left>
                        <img src={logo} alt='' style={{width:'10rem',height:'9rem'}} />
                        <T>
                            Thousands of fundraisers met their goal amounts using DONOR platform
                        </T>
                    </Left>
                    
                    <Right>
                        <div>
                            <input type="Password" placeholder="Password"  className="input" style={{height:"2rem",width:"10rem"}} />
                            <Line />
                        </div>
                        <Button style={{borderRadius:'0.75rem',minWidth:'12rem',margin:'2rem 0 0 0'}}>
                            Continue
                        </Button>
                    </Right>
                </Box>
            </Width>
        </Sec>
    )
}

export default Page6a
