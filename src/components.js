import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'
import { Link } from 'react-router-dom'
import Button from './components/Button.js'
import FixedNavbar from './components/FixedNavbar.js'
import Logo from './components/Logo.js'
import StandardPage from './components/StandardPage.js'
import StandardWritingPage from './components/StandardWritingPage.js'


const FluidContainer = (props) => (
  <Box
    {...props}
    px={[2,4]}
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
  display: flex;
  align-items: flex-start;
  > a, button {
    margin-right: 0.5rem;
  }
  > p {
    margin-left: 0.5rem;
    margin-right: 1rem;
  }
`
const StyledButton = styled.a`
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

const StyledLink = styled(Link)`
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
const Nav = styled.div`
  padding-left: 3rem;
  padding-right: 3rem;
  padding-top: 2rem;
  padding-bottom: 1rem;
  height: 5rem;
  display: flex;
`

const FixedNav = Nav.extend`
  position: fixed;
  right: 0;
  top: 0
`

const NavLeft = styled.div``

const NavRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row-reverse;
`

export {
  Button, Buttons, StyledButton, StyledLink,
  Nav, FixedNav, NavRight, NavLeft,
  Columns, Column, FluidContainer,
  FixedNavbar, Logo, StandardPage,
  StandardWritingPage, Labels, Label
}
