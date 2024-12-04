import { Text, View } from 'react-native';
import styled from 'styled-components';

export const MainView = styled(View)`
  position: absolute;
  bottom: 7%;
  right: 0;
  left: 0;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const BottomText = styled(Text)`
  color: rgba(255, 255, 255, 0.5);
  font-size: 17px;
  font-weight: 400;
`;

export const BottomRedirectText = styled(Text)`
  color: #333333;
  font-size: 16px;
  font-weight: 400;
`;

export const Row = styled(View)`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;
