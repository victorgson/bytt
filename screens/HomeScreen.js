import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import styled from 'styled-components';
import SwipeCard from '../components/SwipeCard/SwipeCard';

const HomeScreen = () => {
  return (
    <Container>
      <SwipeCard />
    </Container>
  );
};

export default HomeScreen;

const Container = styled.View`
  height: 100%;
  width: 100%;
  margin-bottom: 100px;
`;
const styles = StyleSheet.create({});
