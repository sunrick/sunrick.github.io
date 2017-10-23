import React, { Component } from 'react'
import StandardPage from './StandardPage.js'
import Doggo from '../img/rickard-bjorn.png'
import { Columns, Column } from '../components.js'


class StandardWritingPage extends Component {
  render() {
    return(
      <StandardPage {...this.props}>
        <Columns>
          <Column width={[1, 1/2]}>
            {this.props.children}
          </Column>
          <Column width={[1, 1/2]}>
            <img style={{width: "100%", marginTop: "3rem"}} src={Doggo}/>
          </Column>
        </Columns>
      </StandardPage>
    )
  }
}

export default StandardWritingPage
