const React = require("react");
const SearchImg = require('../../../assets/icons/search.svg');

class Search extends React.Component {
  render() {
    return <div className="header__last__search">
      <img src={SearchImg} alt="" className="search--black" />
    </div>
  }
}

exports.Search = Search;
