import React, { Component } from 'react'
import {FormGroup, Form, FormControl, Button} from 'react-bootstrap';
import axios from'axios';
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName:''
    }
  }
  render() {
    return (
      <React.Fragment>
        <h2>Search Github Profile</h2>
            <Form 
            inline
            onSubmit={this.handleSubmit}
            >
              <FormGroup>
                <FormControl
                  type="text"
                  placeholder="Search Users"
                  onChange={(e) => this.setState({userName: e.target.value})}
                  value={this.state.userName}
                />
                <Button bsStyle="primary">
                  Add 
                </Button>
              </FormGroup>
            </Form>
            
      </React.Fragment>
    )
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.userName}`)
    .then(Response => {
      this.props.onSubmit(Response.data)
    })
    this.setState({
      userName:''
    })
  }


}
