import React from 'react'
import { connect } from 'redux/react'
import { prepareRoute } from '../../lib/decorators'
import { loadAppConfig } from '../../actions'
import _ from 'lodash'

@prepareRoute(async function ({store, params}) {
  console.log('prepR', params)
  return await store.dispatch(loadAppConfig(params.appName))
})
@connect(state => ({config: state.currentAppConfig}))
class Config {

  // getInitialState: function() {
  //   return AppsStore.getState()
  // },
  //
  // componentDidMount: function() {
  //   console.log('CDM', this.props)
  //   AppsStore.listen(this.onChange)
  //   AppsStore.getAppConfig(this.props.params.appName)
  // },
  //
  // componentWillUnmount: function () {
  //   AppsStore.unlisten(this.onChange)
  // },
  //
  // onChange: function(state) {
  //   this.setState(state)
  // },
  // -------------------------------------

  render () {
    console.log('AppConfig', this.props, this.state)
    //const config = this.state.appConfig
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
      <div>{content}
      </div>
    )
  }
}

module.exports = Config
