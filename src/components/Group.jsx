import React from 'react'
import { connect } from 'redux/react'
import { prepareRoute } from '../lib/decorators'
import { loadGroup } from '../actions'



@prepareRoute(async function ({store, params}) {
  console.log('GROUP prepR', params)
  return await store.dispatch(loadGroup(params.groupSlug))
})
@connect(state => ({group: state.currentGroup}))
class Group {
  render () {
    const { group } = this.props
    if (group) {

      return (
        <div>
          <h2>{group.name}</h2>
          <ul>
              {group.apps.map(app => <li>{app}</li>)}
          </ul>
        </div>
      )
    } else {
      return <div>Loading</div>
    }
  }
}

module.exports = Group
