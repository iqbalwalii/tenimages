import React from "react";
// import { Input, Button, Card } from "semantic-ui-react";
export default class Search extends React.Component {
    state={term:''};
 
  onFormSubmit=(event)=>
  {
    event.preventDefault();
    this.props.onSubmit(this.state.term)
  }
  
  render() {
    return (
      <div className="ui segment" style={{marginTop:'2rem', backgroundColor:'#ccc'}}>
      <form className='ui form' onSubmit={this.onFormSubmit}>
        <div className="field">
          <label> IMAGE SEARCH...</label>
          <input
            type="text"
            placeholder="Search..."
          
            value={this.state.term}
            onChange={e=> this.setState({term:e.target.value})}
          />
          </div>
      </form>
      </div>
    );
  }
}
// const mystyle = {
//   width: "90%",
//   margin: "auto",
//   marginTop: "1rem",
//   padding: "1rem",
// };
