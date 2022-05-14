import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const HomeScreen = () => {
  return (
    <Container>
      <Text> HomeScreen </Text>
    </Container>
  );
};

export default HomeScreen;

const Container = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
