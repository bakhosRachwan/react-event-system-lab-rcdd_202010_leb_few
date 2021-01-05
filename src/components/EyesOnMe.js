import React from 'react';

class EyesOnMe extends React.Component {
  render() {
    return (
      <div>
        <button onFocus={console.log('Good!')} onBlur={condole.log("Hey! Eyes on me!")}></button>
      </div>
    )
  }
}
export default EyesOnMe
