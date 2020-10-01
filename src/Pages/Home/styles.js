import styled from 'styled-components';
import { FontConfig } from '../../Components/styles';

export const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Background = styled.img`
  width: 100%;
  height: auto;
  position: fixed;
  z-index: 1;
`;

export const ContainerText = styled.div`
  display: flex;
  position: relative;
  z-index: 2;
  flex-direction: column;
  width: 400px;
  height: 400px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 100px;
  background-color: rgba(0,0,0,0.4);
  border-radius: 16px
`;

export const TextName = styled(FontConfig)`
  color: white;
  font-size: 3em;
  margin-bottom: 20px;
`;

export const FirstDescription = styled(FontConfig)`
  color: white;
  font-size: 3em;
  text-align: center;
`;

export const SecondaryDescription = styled(FontConfig)`
  color: white;
  font-size: 12px;
`;
