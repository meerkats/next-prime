import React from 'react'
import { Button } from 'primereact/components/button/Button'
import { Slider } from 'primereact/components/slider/Slider'

import '../styles'
import 'primereact/components/button/Button.css'
import 'primereact/components/slider/Slider.css'

export default () => (
  <div>
    <h1>Header :)</h1>
    <Slider style={{ width: 400 }} />
    <img src="/static/images/gabriel45.jpg" width={200} alt="" />
    <Button>Click me!</Button>
  </div>
)
