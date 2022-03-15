import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion'
import i1 from './1.png'
import i2 from './2.png'
import i3 from './3.png'
import i4 from './4.png'
// import i5 from './5.png'

const Sec = styled.section`
    min-height: 100vh;
    width: 100%;
    display: grid;
    place-items: center;
    padding: 0 10% 4rem 10%;
    background-color: #000;
    @media only screen and (max-width: 768px) {
        min-height: 100vh;
        width: 100%;
        padding: 2rem 0;
        flex-direction: column;
        justify-content: space-around;
      }
`;

const Img = styled(motion.div)`
        width: 30rem;
        border-radius: 1rem;
    @media only screen and (max-width: 768px) {
        margin-right: 0;
        width: 100%;
        padding: 0 1rem;
      }
`;


const Para = styled.div`
      width: 50%;
      @media only screen and (max-width: 768px) {
        width: 100%;
      }
`;

const T = styled.p`
    color: #E5E5E5;
    font-weight: 500;
    font-size: 1.2rem;
    margin-bottom: 2rem;
    font-family: 'Montserrat', sans-serif ;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;
        text-align: center;
      }
`;

const Tr = styled.p`
    color: #E5E5E5;
    font-weight: 500;
    font-size: 1.2rem;
    margin-bottom: 2rem;
    text-align: right;
    font-family: 'Montserrat', sans-serif ;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;
        text-align: center;
      }
`;

const H = styled.h1`
    color: #F3B61F;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
    font-family: 'Montserrat', sans-serif ;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1.2rem;
        font-weight: bold;
        text-align: center;
      }
`;

const Hr = styled.h1`
    color: #F3B61F;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
    text-align: right;
    font-family: 'Montserrat', sans-serif ;
    @media only screen and (max-width:768px) {
        font-weight: 510;
        font-size: 1.2rem;
        font-weight: bold;
        text-align: center;
      }
`;

const A = styled.a`
    color:#A882DD;
    cursor:pointer;
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1.2rem;
        font-weight: bold;
        text-align: center;
      }
`;

const Ht = styled.h1`
    color: #E5E5E5;
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 2rem;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1.5rem;
        font-weight: bold;
      }
`;

const Row = styled.div`
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 1rem 0;
      @media only screen and (max-width: 768px) {
        flex-direction: column;
        padding: 0 1rem;
      }
`;

const RowReverse = styled.div`
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 2rem 0;
      @media only screen and (max-width: 768px) {
        flex-direction: column-reverse;
        padding: 0 1rem;
      }
`;

const Page6a = () => {
    return (
        <Sec>
            <Ht>About Us </Ht>
            <Row>
                <Img
                    whileHover={{ scale: 1.1,boxShadow:"0 0 25px #ff7b00"}}
                >
                    <img src={i1} alt="" style={{ width: "100%", height: "100%", borderRadius:"1rem" }} />\
                </Img>
                <Para>
                    <Hr style={{fontFamily: 'Orbitron'}}>Our Advantage</Hr>
                    <Tr>Based on one of the top cryptocurrencies, Polygon – Ethereum, King Solomon enjoys a vigorous foundation just as the one enjoyed by the real Israeli ruler! We believe in our community’s peace of mind, and thus, chose the most resilient token out there. To top it off, our project traces postmodern success from a unique plan that integrates holder benefits without compromise.</Tr>
                </Para>
            </Row>
            <RowReverse>
                <Para>
                    <H>King Solomon – The only NFT you need</H>
                    <T>
                        As the metaverse continues to expand due to the surge in new NFTS every day, King Solomon is one of the new players bound to be recognized by whales, amateurs and professionals alike. Our project thrives off of brilliant support enriched with admirable growth prospects that never fail to impress. Instead of making holders wait on the side lines for slow earnings that might never come, we’re bringing you center stage, right in the middle of the decentralized ecosystem where everyone can be the winner. So, whether you’re a cryptocurrency enthusiast or someone who’s been in the game for a long time, King Solomon will set new benchmarks in the NFT realm and claim its position as the only ruler in space.
                    </T>
                </Para>
                <Img
                    whileHover={{ scale: 1.1,boxShadow:"0 0 25px #ff7b00"}}
                >
                    <img src={i2} alt="" style={{ width: "100%", height: "100%", borderRadius:"1rem" }} />\
                </Img>
            </RowReverse>
            <Row>
                <Img
                    whileHover={{ scale: 1.1,boxShadow:"0 0 25px #ff7b00"}}
                >
                    <img src={i3} alt="" style={{ width: "100%", height: "100%", borderRadius:"1rem" }} />\
                </Img>
                <Para>
                    <Hr>Navigate the revolution with us</Hr>
                    <Tr>
                        Side with a true king who never hesitates to live up to his promises! When it comes to NFTs, we guarantee it doesn’t get better than this! Not only are we highly familiarized with the quirks of blockchain but understand it to the finest of details. Our fair means and effective tokenomics derive from technically robust strategies deployed by creators who know exactly what they’re doing. As our holders look to the future, they’ll be able to immerse in a pool of opportunity, reward, and royalties that never stop coming their way. This is, in part, ensured by a smart contract and secondary market sales bound to skyrocket the project’s value in a short time.
                    </Tr>
                </Para>
            </Row>

            
            <RowReverse>
                <Para>
                    <H>Our journey to the top</H>
                    <T>Reminiscent of King Solomon’s approach to winning over the community through targeted campaigns, we will spearhead our project with hefty promotions that speak to the eager investor and answer all their pressing questions. This will be tied to whitelist airdrops for our early adopters to get a taste of the NFT revolution headed their way. Moreover, a random NFT airdrop will be underway, right before mint day! This giveaway, featuring over 10 NFTs, will serve an unplanned list of winners chosen by our automated algorithm to ensure fair distribution.</T>
                </Para>
                <Img
                    whileHover={{ scale: 1.1,boxShadow:"0 0 25px #ff7b00"}}
                >
                    <img src={i4} alt="" style={{ width: "100%", height: "100%", borderRadius:"1rem" }} />\
                </Img>
            </RowReverse>
            
            <Hr style={{textAlign:"center",maxWidth:"1300px"}}>Brace yourself for the epic launch of our amazing MINT 8777 images! These will intrigue you at first glance with their unique visually stimulating aura. </Hr>
        </Sec>
    )
}

export default Page6a
