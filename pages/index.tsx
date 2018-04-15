import React from 'react'
import styled from 'styled-components'
import { Button } from 'primereact/components/button/Button'
import { Slider } from 'primereact/components/slider/Slider'

import '../styles'
import 'primereact/components/button/Button.css'
import 'primereact/components/slider/Slider.css'

const H1 = styled.h1`
  font-family: 'Helvetica Neue';
`

export default () => (
  <div>
    <H1>Header :)</H1>
    <Slider style={{ width: 400 }} />
    <img src="/static/images/gabriel45.jpg" width={200} alt="" />
    <Button>Click me!</Button>
  </div>
)
