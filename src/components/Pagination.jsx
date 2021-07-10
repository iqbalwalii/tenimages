import React, { Component } from "react";

export default class Pagination extends Component {
  images = this.props.images;
  render() {
    if (this.images.length !== 0) {
      return (
        <div>
          {console.log(this.images)}
          <button>Prev</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>Next</button>
        </div>
      );
    } else {
      return <div className=""></div>;
      //   console.log(this.images);
    }
  }
}
