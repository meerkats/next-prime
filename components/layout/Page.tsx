import { Provider } from "mobx-react"
import React from "react"
import { App } from "../../stores/app"

const AppStore = new App()

interface IPageProps {
  children: (state: any) => any
}

interface IPageState {
  foo: string
}

class Page extends React.Component<IPageProps, IPageState> {
  public state: IPageState = { foo: "bar" }

  public render() {
    return (
      <Provider AppStore={AppStore}>{this.props.children(this.state)}</Provider>
    )
  }
}

export { Page, IPageState }
