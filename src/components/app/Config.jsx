import React from 'react'
import { connect } from 'react-redux'
import { prepareRoute } from '../../lib/decorators'
import { loadAppConfig } from '../../actions'
import _ from 'lodash'

@prepareRoute(async function ({store, params}) {
  console.log('prepR', params)
  return await store.dispatch(loadAppConfig(params.appName))
})
@connect(state => ({config: state.currentAppConfig}))
class Config {

  render () {
    const { config } = this.props
    let content = null
    if (config) {
      content = (
        <table>
          <tbody>
            {Object.keys(config).map(k => (<tr key={k}><td>{k}</td><td>{config[k]}</td></tr>))}
          </tbody>
        </table>

      )
    } else {
      content = "Loadin'"
    }
    return (
      <div>{content}</div>
    )
  }
}

module.exports = Config
