import { Modal, Pressable, ScrollView, TextInput, View } from 'react-native';
import styled from 'styled-components';

export const StyledView = styled(View)`
  background-color: white;
  padding-left: 1rem; /* 16px */
  padding-right: 1rem; /* 16px */
  width: 80%;
  height: 60%;
  display: flex;
  flex-flow: column;
  border-radius: 12px;
`;

export const StyledButtonView = styled(Pressable)`
  padding: 10px;
  flex: 0 1 auto;
`;

export const StyledInput = styled(TextInput)`
  height: 0%;
  width: 100%;
  background-color: #17212b;
  padding: 10px 15px;
  margin: 0;
  color: white;
  font-size: 16px;
  flex: 1 1 auto;
`;

export const ActivityIndicatorContainer = styled(View)`
  min-width: 100%;
  min-height: 100%;
  position: absolute;
  justify-content: center;
  align-items: center;
  align-self: center;
  vertical-align: middle;
  background-color: rgba(42, 47, 51, .4); /* Темный фон */
`;
