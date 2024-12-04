import { Image, Text, View } from 'react-native';
import styled from 'styled-components';

export const HeaderContainer = styled(View)`
  background: black;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  height: 105px;
  padding: 5px 0;
`;

export const StyledLogo = styled(Image)`
  width: 150px;
  height: 50px;
  /* height: fit-content; */
`;
