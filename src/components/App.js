import React from "react";
import youtube from "../api/youtube";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

class App extends React.Component {
  onSearchSubmit = async (term) => {
    const response = await youtube.get("/search/photos", {
      params: {
        query: term,
      },
    });

    this.setState({ videos: response.data.results });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <VideoDetail />
        <VideoList />
      </div>
    );
  }
}

export default App;
