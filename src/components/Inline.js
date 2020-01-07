import React from 'react';

class Inline extends React.Component{
     render(){

        const heading={
            color:'orange',
            fontSize:'72px'
        }
         return(
             <div>
                <h1 style={heading}>Heading</h1>
             </div>
         )
     }
}

export default Inline;