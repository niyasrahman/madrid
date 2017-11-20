const React = require("react");
const SearchImg = require('../../../assets/icons/search.svg');

const { Button } = require('./button.jsx')

class Search extends require("quintype-toddy-libs/components/navigation-component-base") {
  constructor(props) {
    super(props);
    this.state = {
      isSearchFormOpen: false,
      searchQuery: '',
      searchFormHeight: 0,
      initialized: false
    };
    this.openSearchForm = this.openSearchForm.bind(this);
    this.keyPress = this.keyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const searchFormHeight = this.searchForm.clientHeight
    this.setState({
      searchFormHeight: searchFormHeight,
      initialized: true
    })
  }
  handleChange(event) {
    this.setState({searchQuery: event.target.value});
  }

  keyPress(event) {
    if (event.keyCode == 27) {
      this.setState({
        isSearchFormOpen: false
      })
    }
  }

  handleSubmit(event) {
    // TODO: Navigate to search results page on correct Redux way.
    // This is a hack right now. Directly navigating to search page using JS.
    this.navigateTo('/search/' + this.state.searchQuery);
    event.preventDefault();
  }

  openSearchForm() {
    this.setState({
      isSearchFormOpen: !this.state.isSearchFormOpen
    }, () => {
      this.input.focus();
    })
  }

  render() {
    let formStyle = {
      height: this.state.isSearchFormOpen ? this.state.searchFormHeight : 0
    }
    let initialStyle = {
      opacity: this.state.initialized ? 1 : 0
    }
    return <div className="qt-search" style={initialStyle}>
      <img src={SearchImg} alt="" className="qt-search__icon" onClick={this.openSearchForm}/>
      <div className='qt-search__form-wrapper' style={formStyle}>
        <form onSubmit={this.handleSubmit} className="qt-search__form component-wrapper" ref={(searchForm) => this.searchForm = searchForm}>
          <label className="qt-search__form-label" htmlFor="searchForm">
            <span>Search query: </span>
            <input type="text" value={this.state.searchQuery}
              onChange={this.handleChange}
              id="searchForm"
              onKeyDown={this.keyPress}
              className="qt-search__form-input"
              placeholder="What are you looking for?"
              ref={(input) => this.input = input}/>
          </label>
          <Button type="submit" classNamesString="qt-button--transparent" className="qt-search__form-submit">Search</Button>
        </form>
      </div>
    </div>
  }
}

exports.Search = Search;
