import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import loadable from '@loadable/component';

const Dynamic = loadable(() => import('./Dynamic.jsx'));

const Title = styled.h1`
  font-size: 1em;
  text-align: center;
  color: palevioletred;
`;

const Button = styled.button`
  font-size: 2rem;
  border-radius: 0.25em;
  background: red;
  color: white;
`;

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clicked: true });
  }

  render() {
    const { clicked } = this.state; 

    return (
      <div className={ `${this.props.className} box` }>
        <Title>
          I am a React component (hot hot)
        </Title>
        <Button onClick={this.handleClick}>
          Load More
        </Button>
        {clicked && <Dynamic/>}
      </div>
    );
  }
}

Main.propTypes = {
  className: PropTypes.string,
};

export default styled(Main)`
  background: whitesmoke;
`;
