import React from 'react';
import { TRowProps } from './types';
import { RowView } from './styled';

export const Row = ({ children, style }: TRowProps) => {
  return <RowView style={style}>{children}</RowView>;
};
