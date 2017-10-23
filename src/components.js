import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'
import { Link } from 'react-router-dom'
import Logo from './components/Logo.js'


const FluidContainer = (props) => (
  <Box
    {...props}
    px={[3,4]}
  />
)

const Columns = (props) => (
  <Flex
    {...props}
    mx={-1}
  />
)

const Column = (props) => (
  <Box
    {...props}
    px={1}
  />
)

const Labels = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: -0.5rem;
  > * {
    margin-right: 0.5rem;
  }
`

const Label = styled.div`
  border: 2px solid #000;
  border-radius: 5px;
  padding: 0.5rem 0.75rem;
  background-color: transparent;
  color: #000;
  text-decoration: none;
  font-size: 0.8em;
  margin-bottom: 0.5rem;
`

const Buttons = styled.div`
`
const Button = styled.a`
  display: block;
  margin-bottom: 0.5rem;
  border: 3px solid #000;
  border-radius: 5px;
  padding: 0.75rem 1rem;
  background-color: transparent;
  color: #000;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    background-color: #000;
    color: #fff;
  }
`

const RouterButton = styled(Link)`
  display:block;
  margin-bottom: 0.5rem;
  border: 3px solid #000;
  border-radius: 5px;
  padding: 0.75rem 1rem;
  background-color: transparent;
  color: #000;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    background-color: #000;
    color: #fff;
  }
`

export {
  Buttons, Button, RouterButton,
  Columns, Column, FluidContainer,
  Logo, Labels, Label
}
