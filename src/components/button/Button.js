import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const Buton = () => {
    return (
        <>
        <h3>Adapting styles base on props</h3>
            <Button>Normal</Button>
            <Button primary>Primary</Button>
        </>
    )
}
export default Buton
