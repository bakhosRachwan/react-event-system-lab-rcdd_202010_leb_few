import React from 'react';

class EyesOnMe extends React.Component {
  function focus (){
    console.log("Good!")
  }
  render() {
    return (
      <div>
        <button onFocus={this.focus} onBlur={console.log("Hey! Eyes on me!")}></button>
      </div>
    )
  }
}
export default EyesOnMe
