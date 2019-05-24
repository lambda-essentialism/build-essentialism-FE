import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addValue} from '../actions'
import '../App.css'


class ValueForm extends Component {
 state={
   value:{
     title:''
    
   }
 }


  changeHandler=ev=>{
    ev.persist();
    let value=ev.target.value;
    if(ev.target.name==='title'){
      value=parseInt(value,10);
    }

    this.setState(prevState=>({
      value:{
        ...prevState.value,
        [ev.target.name]:value
      }

    }))
  }

  handleSubmit=e=>{
    e.preventDefault();
    this.props.addValue(this.state.value);
  }

  render() {
    return (
      <div className="addvalue">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.changeHandler}
            placeholder="value"
            value={this.state.title}
            name="name"
          />
         
          <button className='addvaluesbtn' type="submit">Add to Values</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    values: state.values
});


export default connect(mapStateToProps, {addValue})(ValueForm);