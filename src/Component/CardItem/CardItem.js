import React, { Component } from 'react'
import {Col} from 'react-bootstrap'
export default class CardItem extends Component {
  render() {
    return (
        <React.Fragment>
          <Col xs={6} md={3}>
              <div className="card-item">
                <img src={this.props.avatarUrl} alt="dfdf"/>
                <div>
                  <h4>
                   {this.props.name}
                  </h4>

                  <ul>
                    <li>
                      {
                        this.props.bio
                      }
                    </li>
                    <li>
                     
                     <span>Company: </span> {this.props.company}
                    </li>
                    <li>
                      Followers: {this.props.followers}
                    </li>
                    <li>
                      {this.props.country}
                    </li>
                  </ul>
                </div>
              </div>
          </Col>   
        </React.Fragment>
    )
  }
}
