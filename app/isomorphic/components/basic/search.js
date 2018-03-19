import React from "react";
import { SearchBox } from '@quintype/components';
import {SearchIcon } from '../layout/icon/search.js';

class Search extends React.Component {
  constructor() {
    super()
    this.state = {
    isHidden: true
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({isHidden: !this.state.isHidden
    })
}

render() {
    return (
      <div className="search-icon">
      <div onClick={this.handleClick}>
          <SearchIcon/>


             </div>
         {!this.state.isHidden &&
       <div className='qt-search__form-wrapper'>
        <SearchBox className="qt-search__form component-wrapper"
                   inputId="searchForm"
                   inputRef={(input) => this.input = input}
                   inputClassName="qt-search__form-input"
                   formRef={(searchForm) => this.searchForm = searchForm}
                   onSubmitHandler={() => this.setState({isHidden: false})}
                   onEscape={() => this.setState({isHidden: false})}
                   placeholder="search" 
                   inputClassName="search-text" />
                </div>  

}
      </div>
    );
  }
}

export { Search };
