import React, { Component } from 'react'
import Note from './Note'
export default class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notes:[]
        }
        
    }
    
    update = (newText, i)  => {
        this.setState(prevState=> ({
            notes:prevState.notes.map(
                note => (note.id !== i) ? note : {...note, note:newText}
            )
        }))
    }
    remove = (id) => {
        console.log('remove', id)
        this.setState(prevState=> ({
            notes:prevState.notes.filter(note=> note.id !== id)
        }))
    }

    add = (text) => {
        this.setState(prevState=> ({
            notes:[
                ...prevState.notes,
                {
                    id:this.nextid(),
                    note:text
                }
            ]
            
        }))
    }

    nextid = ()=> {
        this.uniqueId = this.uniqueId || 0
        return this.uniqueId++
    }

    eachNote = (note, i) =>  {
        return (
            <React.Fragment>
                <Note onAdd={this.add} onRemove={this.remove} index={i} onChange={this.update} key={i}>
                    {
                        note.note
                    }
                </Note>
            </React.Fragment>
        )
    }



  render() {
    return (
      <div className="board">
       <button  id="add" onClick={this.add.bind(null, 'New Note')}>
                    Add Your Notes
        </button>
        {
            this.state.notes.map(this.eachNote) 
        }
        
      </div>
    )
  }
}
