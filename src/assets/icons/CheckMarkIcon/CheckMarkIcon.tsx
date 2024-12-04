import React from 'react';
import Svg, { Path, G } from 'react-native-svg';

const CheckMarkIcon = ({ width = 10, height = 16, style = {} }) => {
  return (
    <Svg viewBox="0 0 18 18" width={width} height={height} style={style}>
      <G fill="none" stroke="#6bbfff" strokeWidth="2">
        {/* Первая галочка */}
        <Path d="M2 12l5 5l10-10" />
        {/* Вторая галочка, немного смещенная вправо и вниз */}
        <Path d="M7 12l5 5l10-10" />
      </G>
    </Svg>
  );
};

export default CheckMarkIcon;
