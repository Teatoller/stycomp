import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
  width: 18%;
`;

const LimeButton = styled(Button)`
  color: lime;
  border-color: lime;
`;

export const PolymorphicButton = () => {
    return (
        <>
            <h3>Extend styles with "as" polymorhism</h3>
            <Button>Normal Button</Button>
            <Button as="a" href="/">Link with Button styles</Button>
            <LimeButton as="a" href="/">Link with Lime Button styles</LimeButton>
        </>
    )
}
export default PolymorphicButton