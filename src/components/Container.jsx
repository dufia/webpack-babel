import React from 'react';
import { hot } from 'react-hot-loader/root';
import Main from './Main.jsx';

class Container extends React.Component {
  render() {
    return (
      <div>
        <Main/>
      </div>
    );
  }
}

export default hot(Container);
