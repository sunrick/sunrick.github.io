import React, { Component } from 'react'
import styled from 'styled-components'
import FixedNavbar from '../FixedNavbar.js'
import StandardPage from '../StandardPage.js'
import { Columns, Column } from '../components.js'


class StandardWritingPage extends Component {
  render() {
    return(
      <StandardPage {...this.props}>
        <Columns>
          <Column width={1/2}>
            {this.props.children}
          </Column>
        </Columns>
      </StandardPage>
    )
  }
}

export default StandardWritingPage
