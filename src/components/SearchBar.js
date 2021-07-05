import "./SearchBar.css";
import React, { useState } from "react";

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    onTermSubmit(term);
  };

  return (
    <div className="search-bar">
      <form onSubmit={onSubmit}>
        <label>Search</label>
        <input
          type="text"
          value={term}
          onChange={(event) => setTerm(event.target.value)}
        />
      </form>
    </div>
  );
};

// Class component
// class SearchBar extends React.Component {
//   state = { term: "" };

//   onFormSubmit = (event) => {
//     event.preventDefault();
//     this.props.onTermSubmit(this.state.term);
//   };

//   render() {
//     return (
//       <div className="search-bar">
//         <form onSubmit={this.onFormSubmit}>
//           <label>Search</label>
//           <input
//             type="text"
//             value={this.state.term}
//             onChange={(e) => this.setState({ term: e.target.value })}
//           />
//         </form>
//       </div>
//     );
//   }
// }

export default SearchBar;
