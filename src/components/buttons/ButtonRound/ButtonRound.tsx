import React from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { TButtonRoundProps } from './types';

export const ButtonRound = ({
  Icon,
  onPress,
  size = 100,
  backgroundColor,
  children,
}: TButtonRoundProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ width: size, height: size, backgroundColor }}
    >
      {children ? (
        <ImageBackground
          source={Icon}
          style={{
            width: size,
            height: size,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {children}
        </ImageBackground>
      ) : (
        <Image
          source={Icon}
          style={{ width: size, height: size, resizeMode: 'contain' }}
        />
      )}
    </TouchableOpacity>
  );
};
