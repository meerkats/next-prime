import { Button } from 'primereact/components/button/Button'
import 'primereact/components/button/Button.css'
import { Slider } from 'primereact/components/slider/Slider'
import 'primereact/components/slider/Slider.css'
import React, { Fragment } from 'react'
import styled from 'styled-components'
import { IPageState, Page } from '../components/layout/Page'
import { Toggle } from '../components/Toggle'

import '../styles'

const H1 = styled.h1`
  font-family: 'Helvetica Neue';
`

export default () => (
  <Page>
    {({ foo }: IPageState) => (
      <Fragment>
        <H1>Header {foo} :)</H1>
        <Slider style={{ width: 400 }} />
        <img src="/static/images/gabriel45.jpg" width={200} alt="" />
        <Button>Click me!</Button>
        <div>
          <Toggle label="Linked checkbox 1" />
          <Toggle label="Linked checkbox 2" />
          <Toggle label="Linked checkbox 3" />
        </div>
      </Fragment>
    )}
  </Page>
)
