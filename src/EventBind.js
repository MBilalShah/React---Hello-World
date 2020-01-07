import React from 'react';

class EventBind extends React.Component{
  constructor(props){
super(props)
this.state={message:'Hello'}
this.clickHandler=this.clickHandler.bind(this)
  }
  clickHandler=()=>{
    //   console.log(this)
      this.setState({message:'GoodBye'})
  }
    render(){
        return (
            <div>
                {this.state.message}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind