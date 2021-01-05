import React from 'react';

class Keypad extends React.Component {
  render() {
    return (
      <div>
        <input type="password" onKeyUp={console.log('Entering Password ...')} />
      </div>
    )
  }
}

export default Keypad
