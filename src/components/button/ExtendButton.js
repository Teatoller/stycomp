import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const LimeButton = styled(Button)`
  color: lime;
  border-color: lime;
`;

export const ExtendButton = () => {
    return (
        <>
            <h3>Extend styles</h3>
            <Button>Normal Button</Button>
            <LimeButton>Lime Button</LimeButton>
        </>
    )
}
export default ExtendButton