import React from 'react';
import { FooterView } from './styled';
import { TFooterProps } from './types';

export const Footer = ({ children }: TFooterProps) => {
  return <FooterView>{children}</FooterView>;
};
