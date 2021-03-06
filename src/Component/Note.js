import React, { Component } from 'react'

export default class Note extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editing:false

        }
            this.edit = this.edit.bind(this)
            this.remove = this.remove.bind(this)
            this.save = this.save.bind(this)

            
        
    }

    edit = () => {
        this.setState({
            editing:true
        })
    }
    remove = () => {
       this.props.onRemove(this.props.index);
    }
    add = () => {
        this.props.onAdd()
    }
    save = (e) => {
        e.preventDefault();
        this.props.onChange(this._newText.value, this.props.index);
        this.setState({
            editing:false
        })
    }


    renderForm() {
        return (
            <div className="note">
                <form onSubmit={this.save}>
                    <textarea ref={input => this._newText = input} >
                    </textarea>
                    <button  id="save">Save</button>
                 </form>
            </div>
        )
    }
    renderDispaly() {
        return (
            <React.Fragment>
        <div className="note">
            <p>
                {
                    this.props.children
                }
                </p>

                <button onClick={this.edit} id="edit">
                    Edit
                </button>
                <button onClick={this.remove}  id="remove">
                    Delete    
                </button> 
        </div>
        </React.Fragment>
        )
    }
    
 render(){
     if (this.state.editing) {
         return this.renderForm()
         
     } else {
         return this.renderDispaly()
     }
 }
}
