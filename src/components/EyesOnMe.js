import React from 'react';

class EyesOnMe extends React.Component {
  render() {
    return (
      <div>
        <button onFocus={'Good!'} onBlur={"Hey! Eyes on me!"}></button>
      </div>
    )
  }
}
export default EyesOnMe
