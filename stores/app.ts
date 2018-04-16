import { action, observable } from 'mobx'

class App {
  @observable public someFlag = false

  @action
  public toggleFlag() {
    this.someFlag = !this.someFlag
  }
}

// const AppStore = new App()

export { App }
