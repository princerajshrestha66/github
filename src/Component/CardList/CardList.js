import React, { Component } from 'react'
import CardItem from '../CardItem'
import {Grid, Row} from 'react-bootstrap'
export default class CardList extends Component {

  render() {  console.log(this.props)
    return (
      <React.Fragment>
          <div className="cardList">
          <Grid>
            <Row>
            {
              this.props.cards.map((item) => {
                return (
                    <CardItem
                        avatarUrl={item.avatar_url}
                        bio = {item.bio}
                        company={item.company}
                        name= {item.name}
                        key={item.id}
                        followers = {item.followers}
                        country= {item.country}
                    />
                  )
                })
              }
              </Row>
            </Grid>
          </div>
      </React.Fragment>
    )
  }
}
