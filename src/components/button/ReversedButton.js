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
`;

const RvrsdButton = props => <Button {...props} children={props.children.split('').reverse()} />

export const ReversedButton = () => {
    return (
        <>
        <h3>Extend styles on component with "as" polymorhism</h3>
            <Button>Normal Pointer</Button>
            <Button as={RvrsdButton}>Custom Pointer</Button>
        </>
    )
}
export default ReversedButton