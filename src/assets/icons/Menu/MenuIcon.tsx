import React from 'react';
import Svg, { Path } from 'react-native-svg';

const MenuIcon: React.FC<SvgProps> = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 256 256"
    width="25px"
    height="25px"
    fillRule="nonzero"
    {...props}
  >
    <Path
      d="M0,7.5v5h50v-5zM0,22.5v5h50v-5zM0,37.5v5h50v-5z"
      transform="scale(5.12,5.12)"
      fill="#ffffff"
    />
  </Svg>
);

export default MenuIcon;