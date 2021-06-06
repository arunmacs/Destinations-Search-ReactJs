import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  initialDestinationsList = this.props

  state = {searchInput: '', destinationsList: this.initialDestinationsList}

  onSearchInput = event => {
    this.setState({searchInput: event.target.value.toLowerCase()})
  }

  render() {
    const {searchInput, destinationsList} = this.state
    const {initialDestinationsList} = destinationsList
    const filteredResults = initialDestinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="bg-container">
        <div className="heading-input-div">
          <h1 className="heading">Destination Search</h1>
          <div className="search-box-div">
            <input
              type="search"
              value={searchInput}
              onChange={this.onSearchInput}
              placeholder="search"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
        </div>
        <ul className="destination-items-div">
          {filteredResults.map(eachItem => (
            <DestinationItem destinationItem={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
