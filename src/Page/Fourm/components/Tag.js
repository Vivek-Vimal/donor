import React from 'react'
import styled from 'styled-components'

const Tag = (props) => {

    const StyledtTag = styled.div`
        border-radius: 2rem;
        border: 2px solid rgba(2,169,92,1);
        padding: 1rem 1.5rem;
        font-size: 1.75rem;
        color: rgba(0,0,0,0.7);
        display: grid;
        place-items: center;
    `

  return (
    <StyledtTag>
        {props.Text ? props.Text : 'Animal'}
    </StyledtTag>
  )
}

export default Tag