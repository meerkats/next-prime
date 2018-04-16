import { observable } from 'mobx'

class App {
  @observable public someFlag = false
}

const AppStore = new App()

export { AppStore }
