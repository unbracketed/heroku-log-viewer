import alt from '../alt'
import OrgActions from '../actions/OrgActions'


class OrgStore {
  constructor() {
    this.orgs = [];

    this.bindListeners({
      handleAddOrg: OrgActions.ADD_ORG,
      handleUpdateOrgs: OrgActions.UPDATE_ORGS
    })
  }

  handleAddOrg(org) {
    this.orgs.push(org)
  }

  handleUpdateOrgs(orgs) {
    this.orgs = orgs
  }

}

module.exports = alt.createStore(OrgStore, 'OrgStore');
