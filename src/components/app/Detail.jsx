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
        <table className="summary mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
          <thead>
            <tr>
              <th className="mdl-data-table__cell--non-numeric">attribute</th>
              <th className="mdl-data-table__cell--non-numeric">value</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(info).map(k => (
              <tr key={k}>
                <td className="mdl-data-table__cell--non-numeric">{k}</td>
                <td className="mdl-data-table__cell--non-numeric">{info[k]}</td>
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
