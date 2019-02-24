import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.h1`
  font-size: 2rem;
  color: black;
`;

class Dynamic extends React.Component {
  render() {
    return (
      <Paragraph>
        I am so dynamically loaded
      </Paragraph>
    );
  }
}

export default Dynamic;
