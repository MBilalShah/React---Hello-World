import React from 'react';

class ClassClick extends React.Component{

    render(){
        return (
            <div>
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
    clickHandler(){
        console.log('class clicked')
    }
}

export default ClassClick;