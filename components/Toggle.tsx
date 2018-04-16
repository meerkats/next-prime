import { inject, observer } from 'mobx-react'
import { Checkbox } from 'primereact/components/checkbox/Checkbox'
import 'primereact/components/checkbox/Checkbox.css'
import React, { Fragment } from 'react'
import { App } from '../stores/app'

interface IToggleProps {
  AppStore?: App
  label?: string
}

@inject('AppStore')
@observer
class Toggle extends React.Component<IToggleProps, {}> {
  public render() {
    const { label, AppStore } = this.props
    return (
      <Fragment>
        <Checkbox inputId="toggleTest" onChange={this.handleChangeToggle} checked={AppStore.someFlag} />
        <label htmlFor="toggleTest">{label}</label>
      </Fragment>
    )
  }

  private handleChangeToggle = () => {
    this.props.AppStore.toggleFlag()
  }
}

export { Toggle }
