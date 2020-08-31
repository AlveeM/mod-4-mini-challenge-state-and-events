import React from 'react'
import SpiceItem from './SpiceItem'

class SpiceList extends React.Component {
  state = {
    fourStarOnly: false,
    search: ""
  }

  filteredSpicesBySearch(arr) {
    return arr.filter(spice => spice.notes.toLowerCase().includes(this.state.search.toLowerCase()));
  }

  filteredSpicesByRating(arr) {
    return arr.filter(spice => spice.rating >= 4);
  }

  renderSpices() {
    let spices = this.filteredSpicesBySearch(this.props.spices);

    if (this.state.fourStarOnly) {
      spices = this.filteredSpicesByRating(spices);
    }

    return spices.map(spice => (
      <SpiceItem key={spice.id} spice={spice} />
    ))
  }

  render() {
    return (
      <section className="spice-list">
        <div className="card">
          <h2>Filter Spices</h2>
          <div className="filters">
            <div>
              <label>Search: </label>
              <input type="text" placeholder="Search By Tasting Notes..." onChange={e => this.setState({ search: e.target.value })} />
            </div>
            <label>
              4 Star Only <input type="checkbox" onChange={e => this.setState({ fourStarOnly: !this.state.fourStarOnly })} />
            </label>
          </div>
        </div>
        {this.renderSpices()}
      </section>
    )
  }
}

export default SpiceList