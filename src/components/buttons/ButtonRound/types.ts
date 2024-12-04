import React from 'react';
import { ColorValue, ImageSourcePropType } from 'react-native';

export type TButtonRoundProps = {
  onPress: () => void;
  Icon: ImageSourcePropType;
  size: number;
  backgroundColor?: ColorValue | undefined;
  children?: React.ReactNode;
};
