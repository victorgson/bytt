import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const ChatScreen = () => {
  return (
    <Container>
      <Text> ChatScreen</Text>
    </Container>
  );
};

export default ChatScreen;

const Container = styled.View`
  height: 100%;
  width: 100%;
  margin-bottom: 100px;
`;
