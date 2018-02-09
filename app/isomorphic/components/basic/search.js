import React from "react";
import SearchImg from '../../../assets/icons/search.svg';
import assetify from '@quintype/framework/assetify';
import { SearchBox } from '@quintype/components'
import { Button } from './button.js'

function DrawForm({children}) {
  return [
    <label className="qt-search__form-label" htmlFor="searchForm" key="1">
      <span>Search query: </span>
      {children}
    </label>,
    <Button type="submit" classNamesString="qt-button--transparent qt-theme__color qt-theme__color--border" className="qt-search__form-submit" key="2">Search</Button>
  ];
}

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchFormOpen: false,
      initialized: false
    };
  }

  componentDidMount() {
    this.setState({
      initialized: true
    })
  }

  toggleSearchForm() {
    this.setState({isSearchFormOpen: !this.state.isSearchFormOpen}, () => {document.getElementById("searchForm").focus();})
  }

  render() {
    let formStyle = {
      height: this.state.isSearchFormOpen ? this.searchForm.clientHeight : 0
    }
    let initialStyle = {
      opacity: this.state.initialized ? 1 : 0
    }
    return <div className="qt-search" style={initialStyle}>
      <div className="qr-search__icon qt-theme__color--header" onClick={() =>this.toggleSearchForm()}>
        <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg"><path d="M11.736 23.472c6.482 0 11.736-5.254 11.736-11.736C23.472 5.254 18.218 0 11.736 0 5.254 0 0 5.254 0 11.736c0 6.482 5.254 11.736 11.736 11.736zm0-2.271a9.465 9.465 0 1 1 0-18.93 9.465 9.465 0 0 1 0 18.93zm7.371-.334s.883-.675 1.607-1.606c.807.561 9.286 9.133 9.286 9.133L28.394 30l-9.287-9.133z" fill="currentColor" fillRule="evenodd"/></svg>
      </div>
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
