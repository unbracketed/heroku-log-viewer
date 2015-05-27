import alt from '../alt'
import GroupsActions from '../actions/GroupsActions'


class GroupsStore {
  constructor() {
    this.groups = []
    this.error = null

    this.bindListeners({
      handleAddGroup: GroupsActions.ADD_GROUP,
      handleUpdateGroups: GroupsActions.UPDATE_GROUPS
    })
  }

  handleAddGroup(group) {
    this.error = group.error
  }

  handleUpdateGroups(groups) {
    this.groups = groups
    this.error = null
  }

}

module.exports = alt.createStore(GroupsStore, 'GroupsStore');
