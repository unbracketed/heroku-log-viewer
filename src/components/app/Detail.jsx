import React from 'react'
import { connect } from 'redux/react'
import { prepareRoute } from '../../lib/decorators'
import { loadApp } from '../../actions'
import _ from 'lodash'

@prepareRoute(async function ({store, params}) {
  console.log('prepR', params)
  return await store.dispatch(loadApp(params.appName))
})
@connect(state => ({info: state.currentApp}))
class Detail {

  render () {
    const {
      info,
      params: { appName }
    } = this.props

    let content = null
    if (info) {
      content = (
        <table>
          <tbody>
            {Object.keys(info).map(k => (
              <tr key={k}>
                <td>{k}</td><td>{info[k]}</td>
              </tr>
            ))}
          </tbody>
        </table>

      )
    } else {
      content = "Loadin'"
    }
    return (
      <div>
        <h2>{appName}</h2>
        {content}
      </div>
    )
  }
}

module.exports = Detail
