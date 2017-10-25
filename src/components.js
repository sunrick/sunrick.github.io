import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from './components/Logo.js'
import Back from './components/Back.js'

const sizes = {
  giant: 1170,
  desktop: 1040,
  tablet: 768,
  phone: 480
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


const FluidContainer = styled.div`
  overflow: auto;
  padding: 0 3rem;
  ${media.tablet`
    padding: 0;
  `}
`

const Columns = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Column = styled.div`
  width: 50%;
  padding: ${() => `props.padding || 0 3rem`};
  ${media.tablet`
    width: 100%;
    padding: 0;
  `}
`

const Buttons = styled.div``

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

const Box = styled.div`
  background-color: #FFDC50 !important;
  border: 3px solid #272727;
  padding: 0rem 1rem;
  border-radius: 5px;
  ${media.tablet`
    border-left: 0;
    border-right: 0;
    border-radius: 0;
  `}
`

export {
  Buttons, Button, RouterButton,
  Columns, Column, FluidContainer,
  Logo, media, Back, Box
}
