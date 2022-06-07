import React,{ useState, useEffect} from 'react'
import styled from 'styled-components'
import './Bg.css'
import { motion } from 'framer-motion'
import img from './support.svg'
import { useSelector, useDispatch } from "react-redux";
import theme from "styled-theming";
import { BsBoxArrowUp } from 'react-icons/bs';
import { Link, animateScroll as scroll } from "react-scroll";
import { Button } from '../../components/Navbar/Navbar';

// const iconColor = theme("theme", {
//     light: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
//     dark: "linear-gradient(to right, #fc00ff, #00dbde)",
//   });  


const HomePage = styled.section`
  display: flex;
  //flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  min-height: 100vh;
  width: 100%;

 background-color: rgba(249, 232, 202, 1);

@media only screen and (max-width: 768px) {
 
    width: 100%;
   
    background-size: auto 100%;
    flex-direction: column;
}`

const Width = styled.div`
      width: 1300px;
      display: flex;
      //  padding: 3rem 0 0 0;
        align-items: center;
        justify-content: space-between;
  
    @media only screen and (max-width: 1400px) {
        width: 90%;
    }
    @media only screen and (max-width: 1100px) {
        flex-direction: column;
       margin: 7rem  0 0 0;
    }

    @media only screen and (max-width: 510px) {
      width: 98%;
      //margin: 4rem  0 0 0;
  }
`

const Left = styled(motion.div)`
        width: 55%;
     // background: red;

          @media only screen and (max-width: 1100px) {
            width: 50%;
        }
        @media only screen and (max-width: 998px) {
            width: 85%;
        }

    @media only screen and (max-width: 768px) {
     
        width: 85%;
      
       
      }
`;

const Right = styled.div`
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 40%;
        height: 45rem;


          @media only screen and (max-width: 1100px) {
            width: 50%;
            margin: 3rem  0 0 0;
            height: auto;
        }
        @media only screen and (max-width: 998px) {
            width: 65%;
           
        }

      @media only screen and (max-width: 768px) {
        width: 25rem; 
        
      }

      @media only screen and (max-width: 768px) {
        width: 90%; 
        
      }
`;

const Ht = styled.h1`
    color: #000000;
    font-size: 4.5rem;
    margin-bottom: 2rem;
    text-align: left;
    font-family: 'PT Serif', serif !important;
    line-height: 1;

    @media only screen and (max-width: 1300px) {
      font-size: 4rem;
    }

    @media only screen and (max-width: 1300px) {
      font-size: 3rem;
    }

    @media only screen and (max-width: 1100px) {
      font-size: 2.5rem;
    }

    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1.5rem;
        font-weight: bold;
      }
`;

const T = styled.p`
    
    font-weight: 500;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    text-align: left;
   // font-family: 'Nunito Sans', sans-serif;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;
       
      }
`;

const ButtonContainer = styled.div`
      display: flex;
        justify-content: center;
        
        justify-content: space-between;
     width: 22rem;
     margin: 3rem 0 0 0;
     @media only screen and (max-width: 768px) {
      width: 98%;
      flex-direction: column;
    }
`

const ShowButton = styled(Link)`
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    background-color: rgba(2, 169, 92, 1); //
    color: #FFF ;
    font-weight: bold;
    cursor: pointer;
    position: fixed;
    height: 4rem;
    width: 3rem;
    border-radius: 0.5rem;
    transition:  0.5s linear;
    right: 3rem ;
    bottom: 10rem;
    display: grid;
    place-items: center;
    z-index: 7;
    @media only screen and (max-width: 768px) {
      right: 2rem ;
    bottom: 5rem;
    }
    
`
const ButtonR = styled(Button)`
  margin: 0 0 0 1rem;
  box-shadow: none;
  color: rgba(0, 29, 35, 1);
  background: transparent;
  border: 2px solid rgba(176, 163, 144, 1);
  @media only screen and (max-width: 768px) {
    margin: 1rem 0 0 0;
  }
`

const Home = () => {

    const darkThemeEnabled = useSelector((state) => state.preferences.darkThemeEnabled);
    const dispatch = useDispatch();
    
    const [ showButton, setShowButton ] = useState(false)

    const showButtonTop = () => {
      // console.log(window.scrollY)
      if (window.scrollY >= 600) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }
  
    useEffect(() => {
      showButtonTop()
      // adding the event when scroll change background
      window.addEventListener("scroll", showButtonTop)
    })  


    return (
        <HomePage id="home">

          
          <Width>
              <Left>
                <Ht>Support the <br/> cause thats close <div style={{color:'rgba(2, 169, 92, 1)',fontFamily:'PT Serif'}}> to your heart</div> </Ht>
                <T> <span style={{color:'rgba(2, 169, 92, 1)'}}>People-powered philanthropy</span> bestowing earnings while connecting donors of <span style={{color:'rgba(2, 169, 92, 1)'}}>cryptocurrencies</span> with grassroot not-for-profit fundraising <span style={{color:'rgba(2, 169, 92, 1)'}} >around the world</span></T>
                <ButtonContainer>
                  <Button style={{padding:'0 1rem',minWidth:'11rem'}}>
                    <a href='http://donor-vaults.s3-website-us-west-2.amazonaws.com/#/avax'
                      style={{color:'#FFF',textDecoration:'none'}}
                    >Govern & Earn</a>
                  </Button>
                  <ButtonR>
                    Philanthropy
                  </ButtonR>
                </ButtonContainer>
              </Left>
            
              <Right whileHover={{ scale: 1.1,boxShadow:"0 0 25px #ff7b00"}}>
                   <img src={img} alt='' style={{width:'100%',height:'100%'}} />
              </Right>

          </Width>
           

          { showButton ? 
          
            <ShowButton
              type="button"
              to="home" spy={true} smooth={true}
            >
              <BsBoxArrowUp size="2rem"/>
            </ShowButton> :
            
            null
          }
            
            
        </HomePage>
    )
}

export default Home
