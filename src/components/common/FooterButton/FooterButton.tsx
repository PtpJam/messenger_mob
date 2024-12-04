import React, { useState } from 'react';
import { TFooterButtonProps } from './types.ts';
import { ButtonContainer, ButtonText, StyledImage } from './styled.ts';
import { Images } from '@assets/Images.ts';

export const FooterButton = ({ text, onClick }: TFooterButtonProps) => {
  const [isPressed, setIsPressed] = useState<boolean>(false);

  const handlePressStart = () => {
    setIsPressed(true);
    onClick();
  };

  const handlePressEnd = () => {
    setIsPressed(false);
  };

  return (
    <ButtonContainer
      underlayColor={''}
      onPressIn={handlePressStart}
      onPressOut={handlePressEnd}
    >
      {/* <StyledImage source={Png.AuthButtonUp} resizeMode='contain' /> */}
      <StyledImage
        source={isPressed ? Images.AuthButtonDown : Images.AuthButtonUp}
        resizeMode="contain"
      >
        <ButtonText>{text}</ButtonText>
      </StyledImage>
    </ButtonContainer>
  );
};
