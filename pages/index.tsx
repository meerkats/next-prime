import { observer } from 'mobx-react'
import { Button } from 'primereact/components/button/Button'
import 'primereact/components/button/Button.css'
import { Slider } from 'primereact/components/slider/Slider'
import 'primereact/components/slider/Slider.css'
import React from 'react'
import styled from 'styled-components'
import { AppStore } from '../stores/app'

import '../styles'

const H1 = styled.h1`
  font-family: 'Helvetica Neue';
`

const handleChangeCheckbox = () => {
  AppStore.someFlag = !AppStore.someFlag
}

export default observer(() => (
  <div>
    <H1>Header :)</H1>
    <Slider style={{ width: 400 }} />
    <input type="checkbox" name="testFlag" id="testFlag" onChange={handleChangeCheckbox} />
    <h2>The checkbox is {AppStore.someFlag ? 'checked' : 'unchecked'}.</h2>
    <img src="/static/images/gabriel45.jpg" width={200} alt="" />
    <Button>Click me!</Button>
  </div>
))
