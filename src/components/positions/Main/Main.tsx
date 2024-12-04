import React from 'react';
import { MainView } from './styled';
import { TMainProps } from './types';

export const Main = ({ children, style }: TMainProps) => {
  return <MainView style={style}>{children}</MainView>;
};
