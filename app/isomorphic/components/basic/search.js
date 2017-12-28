import React from "react";
import SearchImg from '../../../assets/icons/search.svg';

import { SearchBox } from '@quintype/components'
import { Button } from './button.js'

function DrawForm({children}) {
  return [
    <label className="qt-search__form-label" htmlFor="searchForm" key="1">
      <span>Search query: </span>
      {children}
    </label>,
    <Button type="submit" classNamesString="qt-button--transparent" className="qt-search__form-submit" key="2">Search</Button>
  ];
}

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchFormOpen: false,
      searchFormHeight: 0,
      initialized: false
    };
  }

  componentDidMount() {
    const searchFormHeight = this.searchForm.clientHeight
    this.setState({
      searchFormHeight: searchFormHeight,
      initialized: true
    })
  }

  toggleSearchForm() {
    this.setState({isSearchFormOpen: !this.state.isSearchFormOpen}, () => {document.getElementById("searchForm").focus();})
  }

  render() {
    let formStyle = {
      height: this.state.isSearchFormOpen ? this.state.searchFormHeight : 0
    }
    let initialStyle = {
      opacity: this.state.initialized ? 1 : 0
    }
    return <div className="qt-search" style={initialStyle}>
      <img src={SearchImg} alt="" className="qt-search__icon" onClick={() =>this.toggleSearchForm()}/>
      <div className='qt-search__form-wrapper' style={formStyle}>
        <SearchBox className="qt-search__form component-wrapper"
                   template={DrawForm}
                   inputId="searchForm"
                   inputRef={(input) => this.input = input}
                   inputClassName="qt-search__form-input"
                   formRef={(searchForm) => this.searchForm = searchForm}
                   onSubmitHandler={() => this.setState({isSearchFormOpen: false})}
                   onEscape={() => this.setState({isSearchFormOpen: false})}
                   placeholder="What are you looking for?" />
      </div>
    </div>
  }
}

export { Search };
