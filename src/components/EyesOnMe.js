import React from 'react';

class EyesOnMe extends React.Component {
  
  render() {
    function focus (){
      console.log("Good!")
    }
    return (
      <div>
        <button onFocus={this.focus} onBlur={console.log("Hey! Eyes on me!")}></button>
      </div>
    )
  }
}
export default EyesOnMe
