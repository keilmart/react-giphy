import React from 'react'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      userSearch: ''
    }
  }

  handleSearchBarChange(userSearch) {
    this.setState({ userSearch })
    this.props.onChange(userSearch)
  }

  render() {
    return (
        <div className="flexContent">
          <h2>Enter a keyword to return your results</h2>
          <div className="flexContent searchBar">
            <input
              className="inputClass"
              type="text"
              placeholder="Enter your search..."
              value={this.state.userSearch}
              onChange={(event) => this.handleSearchBarChange(event.target.value)}
            />
            </div>
        </div>
    )
  }
}

export default SearchBar