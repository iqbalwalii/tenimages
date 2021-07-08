import {Component} from "react";
// import { Input, Button, Card } from "semantic-ui-react";
export default class Validator extends Component {
    state={password:''};
    validate(){
        
        if (this.state.password.length <= 8)
        {
            return 'Password Must be 8 Charcters Long'
        }
        else
        {
            return 'Password Must be 8 Charcters Long ✅'
        }
    }
    validate1(){
        
    }
  render() {
    return (
      <div className="ui segment">
          <div className="ui form">
              <div className="field">
                  <label htmlFor="">Enter password</label>
                  <input type="password"
                  value={this.state.password}
                  onChange={e=>this.setState({password : e.target.value})}/>
              </div>
              {this.validate()}<br/>
              {/* {this.validate1()} */}
          </div>
      </div>
    );
  }
}