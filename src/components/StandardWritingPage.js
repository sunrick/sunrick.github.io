import React, { Component } from 'react'
import StandardPage from './StandardPage.js'
import { Columns, Column } from '../components.js'


class StandardWritingPage extends Component {
  render() {
    return(
      <StandardPage {...this.props}>
        <Columns>
          <Column width={[1, 1/2]}>
            {this.props.children}
          </Column>
        </Columns>
      </StandardPage>
    )
  }
}

export default StandardWritingPage
