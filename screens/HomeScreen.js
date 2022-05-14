import React from 'react';
import { Button, Text } from 'react-native';
import styled from 'styled-components/native';
import * as Linking from 'expo-linking';

const HomeScreen = () => {
  return (
    <Container>
      <Button title="HEJ" onPress={() => console.log('asd')}></Button>
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
