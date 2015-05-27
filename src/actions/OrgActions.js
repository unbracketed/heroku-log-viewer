import alt from "../alt"

class OrgActions {

  addOrg(org) {
    //TODO check for existing

    //let orgs = localStorage.getItem('organizations')
    let orgs = this.alt.stores.OrgStore.getState().orgs
    orgs.push({name: org})
    //this.dispatch({name: org})
    localStorage.setItem('organizations', JSON.stringify(orgs))
    this.actions.updateOrgs(orgs)
  }
  updateOrgs(orgs) {
    this.dispatch(orgs);
  }
}

module.exports = alt.createActions(OrgActions);
