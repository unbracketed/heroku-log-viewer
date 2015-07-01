import _ from 'lodash'

class GroupsActions {

  addGroup(group) {
    let groups = this.alt.stores.GroupsStore.getState().groups
    if (!groups) {
      groups = []
    }
    if (_.filter(groups, {name: group}).length){
      this.dispatch({error: 'Group name already used'})
      return false
    }

    const newGroup = {
      name: group,
      apps: [],
      groups: []
    }
    groups.push(newGroup)
    localStorage.setItem('groups', JSON.stringify(groups))
    this.actions.updateGroups(groups)
  }

  updateGroups(groups) {
    this.dispatch(groups);
  }
}

module.exports = alt.createActions(GroupsActions);
