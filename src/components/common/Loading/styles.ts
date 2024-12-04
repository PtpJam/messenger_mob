import { Text, View } from 'react-native';
import styled from 'styled-components';

export const MainContainerLoading = styled(View)`
  position: absolute;
  /* flex: 1;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0; */
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const LoadingTitle = styled(Text)`
  font-size: 30px;
  display: flex;
  flex-direction: row;
  color: white;
`;
