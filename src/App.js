import React, { Component } from 'react';
import Search from './Component/Search'
import CardList from './Component/CardList'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cards:[]
    }
  }
  addCard = (cardinfo) => {
    this.setState(prevState =>({
        cards:prevState.cards.concat(cardinfo)
    }))
  }
  render() {
    return (
      <div className="container">
        <Search onSubmit={this.addCard}/>
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
