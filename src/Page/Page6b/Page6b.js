import React,{useState} from 'react'
import './Content.css'
import styled from 'styled-components'
import { FaAngleDown } from 'react-icons/fa';
import img from './correct.png'
import { Button } from '../../components/Navbar/Navbar';

const Sec = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden !important;
    background-color: rgba(249, 232, 202, 1);
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
const H = styled.h1`
  color: #000;
  font-size: 2rem;
  font-weight: 400;
  margin: 1.5rem 0 0 0;


@media only screen and (max-width: 768px) {
    font-weight: 510;
    font-size: 1.2rem;
    //font-weight: bold;
  }
`;


const T = styled.p`
    color: grey;
    font-weight: 500;
    font-size: 1.4rem;
    margin: 0.5rem 0 1.5rem 0;
    text-align: center;
 
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;
      }
`;


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


const Page6b = () => {

    return (
        <Sec id="roadmap">
          <Width>
            <img src={img} alt='' style={{height:'5rem',width:'5rem'}} />
            <H>Registration completed successfully</H>
            <T>You can now start a fundraiser on DONOR platform</T>
            <Button style={{borderRadius:'0.5rem',width:'6rem'}}>
              OK
            </Button>

          </Width>
        </Sec>
    )
}

export default Page6b
