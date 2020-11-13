import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
`;

const Text = styled.span`
  color: ${(props) => props.color};
  font-size: 50px;
  font-weight: 600;
`;

const Error = ({ text, color }) => (
  <Container>
    <Text color={color}>{text}</Text>
  </Container>
);

Error.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Error;
