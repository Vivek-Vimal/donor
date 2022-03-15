import React from 'react'
import styled from 'styled-components';
import theme from 'styled-theming';
import Tilt from 'react-parallax-tilt';
import { H, T } from '../../Page/Page2/Page2'
import { Line, Circle } from 'rc-progress';

export const backgroundColor = theme("theme", {
    light: "#000000",
    dark: "#E5E5E5",
  });  

  export const bColor = theme("theme", {
    light: "linear-gradient(to right, #36d1dc, #5b86e5)",
    dark: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
  });  

const FactionCard = (props) => {
    const Box= styled(Tilt)`
        
        width: 25rem;   
       background-color: #FFFFFF;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin: 2rem 0 0 0;
        justify-self: center;
   
        @media only screen and (max-width: 500px) {
            width: 98%;
            
            
        }
    `;
    const Upper = styled.div`
        height: 18rem;
        width: 100%;
        `;

    const Lower = styled.div`
       
        padding: 0 1rem;
    `;

    const StyledLine = styled(Line)`
    width: 100%;
    margin: -1rem 0 1rem 0;
   

    @media only screen and (max-width: 510px) {
        width: 99%;
}
`
const Ts = styled(T)`
    font-size: 1rem;
    font-weight: bold;
`
const Hs = styled(H)`
    font-size: 1.5rem;
    font-weight: bold;
`

    return (
        <Box>
            <Upper>
                <img src={`${props.img ? props.img : ""}`} alt="" style={{width:"100%",height:"100%"}} />
            </Upper>
            <Lower>
                <Ts style={{textAlign:"left",
                   margin:"2rem 0 1rem 0", color:'rgba(2, 169, 92, 1)'
                   }}>{`${props.name ? props.name : "Save The Children Fund Save The Children"}`}</Ts>
                <Ts style={{textAlign:"left", color:'rgba(0, 29, 35, 1)'}}>{`${props.details ? props.details : "Fundraising For The People And Causes "}`}</Ts>
                <Hs style={{color:'rgba(133, 129, 129, 1)'}}>
                    {`${props.site ? props.site : "Donor.org.uk"}`}
                </Hs>
                <T style={{color:'rgba(133, 129, 129'}}>
                {`${props.time ? props.time : "Last donation 3m ago"}`}
                </T>
                <StyledLine 
                      style={{}}
                            percent="50" strokeWidth="1.9"
                            strokeColor="#02A95C" trailColor="#DBDBDB" 
                            // gapPosition="2rem 2rem 1rem 1rem"
                          
                    /> 
                <H style={{color:'rgba(0, 0, 0, 1)',fontSize:'1.4rem'}}>
                                            £83,003 raised                    
                </H>
            </Lower>
        </Box>
    )
}

export default FactionCard
