import React, { Component } from 'react'
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
import Search from "./Search";
// import Validator from "./Validator";

export default class App extends Component {
  state={
    images:[],
  }
  onSearchSubmit = async (term) =>{
    const res = await unsplash.get('search/photos',{
      params: { query: term},
      
    });
    this.setState({images:res.data.results});
  }
  render() {
    return (
     <div className="ui container">
      <Search onSubmit={this.onSearchSubmit}/>
      Found {this.state.images.length} Images
    
      <ImageList images={this.state.images}/>
    </div>
    )
  }
}