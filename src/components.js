import React from 'react'
import styled, { css } from 'styled-components'
import { Flex, Box } from 'grid-styled'
import { Link } from 'react-router-dom'
import Logo from './components/Logo.js'
import Back from './components/Back.js'

const sizes = {
  giant: 1170,
  desktop: 960,
  tablet: 768,
  phone: 376
}

// iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

const FluidContainer = (props) => (
  <Box
    {...props}
    px={[3,4]}
  />
)

const FluidMobileContainer = (props) => (
  <Box
    {...props}
    px={[0,0,4]}
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
    px={[1,1,3]}
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
  border: 2px solid #272727;
  border-radius: 5px;
  padding: 0.5rem 0.75rem;
  background-color: transparent;
  color: #272727;
  text-decoration: none;
  font-size: 0.8em;
  margin-bottom: 0.5rem;
`

const Buttons = styled.div`
`
const Button = styled.a`
  display: block;
  margin-bottom: 0.5rem;
  border: 3px solid #272727;
  border-radius: 5px;
  padding: 0.75rem 1rem;
  background-color: #FFDC50;
  color: #272727;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    background-color: #272727;
    color: #fff;
    text-decoration: none !important;
  }
`

const RouterButton = styled(Link)`
  display:block;
  margin-bottom: 0.5rem;
  border: 3px solid #272727;
  border-radius: 5px;
  padding: 0.75rem 1rem;
  background-color: #FFDC50;
  color: #272727;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    background-color: #272727;
    color: #fff;
    text-decoration: none !important;
  }
`

const BBox = styled.div`
  background-color: #FFDC50 !important;
  border: 3px solid #272727;
  padding: 0rem 1rem;
  border-radius: 5px;
`

export {
  Buttons, Button, RouterButton,
  Columns, Column, FluidContainer,
  Logo, Labels, Label, media,
  FluidMobileContainer, Back,
  BBox
}
