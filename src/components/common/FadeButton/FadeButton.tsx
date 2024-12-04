import React from 'react';
import { TFadeButtonProps } from './types.ts';
import { ButtonContainer, ButtonText, StyledGradient } from './styled.ts';

export const FadeButton = ({
  startColor,
  direction,
  text,
  onClick,
}: TFadeButtonProps) => {
  const start =
    direction === 'leftToRight' ? { x: 0, y: 0.5 } : { x: 1, y: 0.5 };
  const end =
    direction === 'leftToRight' ? { x: 0.85, y: 0.5 } : { x: 0.15, y: 0.5 };

  return (
    <ButtonContainer onPress={onClick}>
      <StyledGradient colors={[startColor, '#000']} start={start} end={end}>
        <ButtonText>{text}</ButtonText>
      </StyledGradient>
    </ButtonContainer>
  );
};
