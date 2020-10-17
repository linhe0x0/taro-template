import { Component } from 'react'
import Taro from '@tarojs/taro'

import './app.scss'

class App extends Component {
  componentDidShow() {
    this.checkUpdate()
  }

  checkUpdate = () => {
    const updateManager = Taro.getUpdateManager()

    updateManager.onUpdateReady(() => {
      Taro.showModal({
        title: '更新提示',
        content: '新版本已经备好啦，是否立即应用？',
      })
        .then((result) => {
          if (result.confirm) {
            updateManager.applyUpdate()
          }
        })
        .catch(() => {})
    })
  }

  render() {
    return this.props.children
  }
}

export default App
