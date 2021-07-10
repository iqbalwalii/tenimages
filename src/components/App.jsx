import React, { Component } from "react";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
import Search from "./Search";
import Pagination from "./Pagination";
// import Validator from "./Validator";

export default class App extends Component {
  state = {
    images: [],
  };
  onSearchSubmit = async (term) => {
    const res = await unsplash.get("search/photos?", {
      params: { query: term, per_page: 30 },
    });
    this.setState({ images: res.data.results });
  };
  render() {
    return (
      <div className="ui container">
        <Search onSubmit={this.onSearchSubmit} />
        Found {this.state.images.length} Images
        <ImageList images={this.state.images} />
        <Pagination images={this.state.images} />
      </div>
    );
  }
}
