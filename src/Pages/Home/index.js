import React from 'react';
import {
  Background,
  FirstDescription,
  SecondaryDescription,
  Container,
  ContainerText,
  TextName,
} from './styles';

import background from '../../Images/background.png';

const Home = () => {
  const VARIAVEEEEL = '<KauanCS />';
  return (
    <Container>
      <Background src={background} />
      <ContainerText>
        <TextName>{VARIAVEEEEL}</TextName>
        <FirstDescription>Just another coder</FirstDescription>
        <SecondaryDescription>and maybe a react developer</SecondaryDescription>
      </ContainerText>
    </Container>
  );
};

export default Home;
