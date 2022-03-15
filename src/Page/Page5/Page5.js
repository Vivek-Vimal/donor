import React from 'react'
import styled from 'styled-components'
// import img from '../../components/Navbar/logo.png'
import Tilt from 'react-parallax-tilt';
import bg from './bg.jpg'
import theme from "styled-theming";
import tank from './king.png'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SiHomeassistant } from 'react-icons/si';
import { IoIosPodium } from 'react-icons/io';
import { SiAzuredataexplorer } from 'react-icons/si';
import { SiZig } from 'react-icons/si'
import { T } from '../Page2/Page2'

export const backgroundColor = theme("theme", {
    light: "#000000",
    dark: "#E5E5E5",
  });  

const Sec = styled.section`
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3rem  0;
    background-color:  #000000;
    background-repeat: no-repeat;
    background-image: url(${tank});
    background-size: 50% 70%;
    background-position: right top !important;
  
    @media only screen and (max-width: 768px) {
        width: 100%;
        padding: 1rem 0 2rem 0;
        flex-direction: column;
        justify-content: space-around;
      }
`;

const Left = styled.div`
        margin-right: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
     
    @media only screen and (max-width: 768px) {
        margin-right: 0;
        width: 100%;
        padding: 0 1rem;
        height: auto;
      }
`;

const Right = styled.div`
      margin-left: 2rem;
      @media only screen and (max-width: 768px) {
        width: 100%;
        padding: 0 1rem;
        height: auto;
        margin-left: 0;
      }
`;



const Page5 = () => {
  
    return (
        <Sec id="learn">
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#e69500', color: '#FFF' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    // date="Phase 01"
                    iconStyle={{ background: '#000', color: '#fff' }}
                    icon={<SiHomeassistant />}
                >
                    {/* <h3 className="vertical-timeline-element-title">0%</h3> */}
                    <h4 style={{fontSize:"1.4rem"}} className="vertical-timeline-element-subtitle">Our way of thanking the community</h4>
                    <T>
                    With financial inequity crippling the masses, poverty, hunger and injustice are nowhere near curbed the way they should be! As King Solomon continues to assume its own space in the metaverse, we are made aware of the need to act now. Blockchain assets have the power to change the world, and of course, change starts at home. Safe to say, King Solomon is not without purpose. We are driven by a passion to achieve financial prosperity and share the success with those in need. After all, it’s the community that matters above all else. We’re eager to follow in the footsteps of a ruler that cared for his people and not just about mindless conquests. Living up to its name, our NFT project will be actively donating to these charity organizations such as WWO, UNICEF, Feeding America and ST. Judes Children Hospital! Secondary offerings – simply put, a large portion of monetary gains – will be donated to reliable entities that can make a positive difference in a person’s life.
                    </T>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#e69500', color: '#FFF' }}
                    // date="Phase 02"
                    iconStyle={{ background: 'rgba(237, 73, 74, 1)', color: '#fff' }}
                    icon={<IoIosPodium />}
                >
                    <h3 className="vertical-timeline-element-title"></h3>
                    <h4 style={{fontSize:"1.4rem"}} className="vertical-timeline-element-subtitle">Backed by a network of powerful NFT Partners</h4>
                    <T>
                    Worthy NFTS in the metaverse aren’t stand-alone projects with no alliances. That’s not quiet befitting for a ruler ambitious enough to establish a strong dynasty, now, is it? Verily, we will move forward, despite the challenges, boosted by the dedication of our holders and the support of our partners.

                    </T>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#e69500', color: '#FFF' }}
                    // date="Phase 03"
                    iconStyle={{ background: 'rgba(237, 73, 74, 1)', color: '#fff' }}
                    icon={<SiAzuredataexplorer />}
                >
                    <h3 className="vertical-timeline-element-title"></h3>
                    <h4 style={{fontSize:"1.4rem"}} className="vertical-timeline-element-subtitle">Limitless staking opportunities with $WINE token</h4>
                    <T>
                    Religion doesn’t just have holistic benefits; it can also increase your savings and expand your bank account! As a crypto enthusiast, you will be able to stake your NFT for the religious wonder token and maximize earnings like never before. Holders seek better than market returns, and that’s no secret. Rest assured, what we have in store will take you by pleasant surprise. Investors will be eligible for up to 10% yearly gains on their staked NFT!

                    </T>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#e69500', color: '#FFF' }}
                    // date="Phase 04"
                    iconStyle={{ background: '#000000', color: '#fff' }}
                    icon={<SiZig />}
                >
                    <h3 className="vertical-timeline-element-title"></h3>
                    <h4 style={{fontSize:"1.4rem"}} className="vertical-timeline-element-subtitle">Treading the future of NFT will zero qualms</h4>
                    <T>
                    The future, as unprecedented as it is, holds immense rewards for those who remain prepared. Rest assured, King Solomon is based on ample planning, resource resilience and worthy partnerships that improve its future outlook by a large margin. Unlike all those NFTS floating around, ours doesn’t just offer hollow claims, it proposes real and measurable results.

                    </T>
                </VerticalTimelineElement>
                {/* <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#e69500', color: '#FFF' }}
                    date="Phase 05"
                    iconStyle={{ background: 'rgba(237, 73, 74, 1)', color: '#fff' }}
                    icon={<SiZig />}
                >
                    <h3 className="vertical-timeline-element-title"></h3>
                    <h4 style={{fontSize:"1.4rem"}} className="vertical-timeline-element-subtitle">Phase 05</h4>
                    <T>
                    D.A.D Online sneak peeks and Alpha access whitelists. While our team holds the Alpha access lottery, we will start the $PCORE staking for governance rights. Revealing more aspects of the king as development progresses to its final stage before D.A.D Online goes public.
                    </T>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#e69500', color: '#FFF' }}
                    date="Phase 06                   "
                    iconStyle={{ background: '#000', color: '#fff' }}
                    icon={<SiZig />}
                >
                    <h3 className="vertical-timeline-element-title"></h3>
                    <h4 style={{fontSize:"1.4rem"}} className="vertical-timeline-element-subtitle">Phase 06</h4>
                    <T>
                    The start of D.A.D Online beta, marketplace, and second-generation Plasma Energy Core minting. In conjunction with the reveal of D.A.D Metaverse, comprehensive Serum usage guide and examples of Avatars that have already used the Serum.

                    </T>
                </VerticalTimelineElement> */}
              </VerticalTimeline>
        </Sec>
    )
}

export default Page5
