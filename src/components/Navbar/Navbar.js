import React,{useState, useEffect, useRef } from 'react'
import './Navbar.css';
import logo from './logo.svg';
import mlogo from './logo.svg';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Burger, Menu } from './components';
import FocusLock from 'react-focus-lock';
import { Link, animateScroll as scroll } from "react-scroll";
import theme from "styled-theming";
import { useSelector, useDispatch } from "react-redux";
import dis from './Discord.png';
import med from './Medium.png'
import twi from './Twitter.png';



export const backgroundColor = theme("theme", {
  light: "#000000",
  dark: "#E5E5E5",
});  

export const Link1 = styled(Link)`
  display: flex;
  margin: 0 0 0 8vw;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  font-size: 2.4rem;
  font-family: 'Roboto Condensed', sans-serif;
  @-webkit-keyframes hvr-pulse {
    25% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    75% {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
  }
  @keyframes hvr-pulse {
    25% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    75% {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
  }
 
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  
  &:hover, &:focus, &:active {
    -webkit-animation-name: hvr-pulse;
    animation-name: hvr-pulse;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }
}

@media only screen and (max-width: 1600px) {
  margin: 0 0 0 2rem;
}

@media only screen and (max-width: 768px) {
  font-size: 1.8rem;
}


`;

const Link2 = styled(Link)`
  display: flex;
  margin: 0;
  align-items: center;
  text-decoration: none;
  color: #FFF !important;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    
  }

`;

const Mobile = styled.div`
  display: none;
  @media only screen and (max-width: 1200px) {
    display: block;
  }`

const PC = styled.div`
display: block;
@media only screen and (max-width: 1200px) {
  display: none;
}`

export const Button = styled(motion.button)`
  background-color: rgba(2, 169, 92, 1);
  border: none;
  border-radius: 2rem;
  padding: 0 1rem;
  color: #FFF;
  font-size: 1.2rem;
  height: 3.5rem;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`

export const IconContainer = styled.div`
  
  margin-right: 8vw;
  @media only screen and (max-width: 1600px) {
    margin: 0 6rem 0 0;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
 
`
export const Image = styled(motion.img)`
  cursor: pointer;
`

const Navbar = () => {

  const darkThemeEnabled = useSelector((state) => state.preferences.darkThemeEnabled);


  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

const [navbar, setNavbar] = useState(false)

const changeBackground = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 50) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })  

    return (
        <nav className={navbar ?  "navActiveLight": "nav"} >

         
            <Link1 to="home" spy={true} smooth={true} ><img src={logo} alt="Logo" className={navbar ? "LogoActive" : "Logo"} /> Donor</Link1>
          
          {/* <Mobile>
            <Link1 to="home" spy={true} smooth={true} style={{marginRight:"0"}} ><img src={mlogo} alt="mlogo" className="LogoB"/></Link1>
          </Mobile> */}
          <PC>
            <ul className="list">
                <Link2 to="" spy={true} smooth={true} offset={-80}>Earn</Link2>
                <Link2 to="" spy={true} smooth={true} offset={-80}>Donate</Link2>
                <Link2 to="" spy={true} smooth={true} offset={-80}>Fundraise for</Link2> 
                <Link2 to="" spy={true} smooth={true} offset={-80}>Docs</Link2>
                <Link2 to="" spy={true} smooth={true} offset={-80}>How It Works</Link2> 
            </ul> 
          </PC>

          
          <div style={{display:'flex'}}>
            <IconContainer>
              <Button 
                  type="button"
                  whileHover={{ scale: 1.1,boxShadow:"0 0 25px #ff7b00"}}
                  whileTap={{ scale: 0.7 }}
              >Connect Wallet</Button>
            </IconContainer> 
         
        
          <Mobile ref={node}>
            <FocusLock disabled={!open}>
              <Burger  open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
            </FocusLock>
          </Mobile>
        </div>

        </nav>   
    )
}

export default Navbar
