import React from 'react'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: ''
    }
  }

  handleSearchBarChange(searchTerm) {
    this.setState({ searchTerm })
    this.props.onChange(searchTerm)
  }

  render() {
    return (
        <div className="searchContainer">
          <h1>Start Searching now!</h1>
          <div>
            <input
              type="text"
              placeholder="Start Searching"
              value={this.state.searchTerm}
              onChange={(ev) => this.handleSearchBarChange(ev.target.value)}
            />
            </div>
        </div>
    )
  }
}

export default SearchBar