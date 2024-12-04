import React from 'react';
import { StyleSheet } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

const ProfileDefaultIcon = ({ width = 50, height = 50, style = {} }) => {

  const styles = StyleSheet.create({
    styleBase: {
      viewBox: `0 0 ${width} ${height}`,
    },
  });

  return (
    <Svg width={width} height={height} style={[styles.styleBase, style]}>
      {/* Контур головы */}
      <Circle
        r={width/2}
        fill="#6bbfff"
        cx={width/2} 
        cy={height/2}
      />
      {/* <Path
        d="M0,0 L50,0 L50,50 L0,50 L0,0"
        fill="#6bbfff"
        stroke="#6bbfff"
        strokeWidth="0"
      /> */}

    </Svg>
  );
};


export default ProfileDefaultIcon;
