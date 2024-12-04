import React from 'react';
import { TFooterProps } from './types.ts';
import { BottomRedirectText, BottomText, MainView, Row } from './styled.ts';
import { FooterButton } from '../FooterButton/FooterButton.tsx';
import { TouchableOpacity } from 'react-native';

export const Submit = ({
  buttonText,
  onSubmitClick,
  bottomText,
  bottomRedirectText,
  onRedirectClick,
}: TFooterProps) => {
  return (
    <MainView>
      <FooterButton text={buttonText} onClick={onSubmitClick} />
      <Row>
        <BottomText>{bottomText}</BottomText>
        <TouchableOpacity onPress={onRedirectClick}>
          <BottomRedirectText>{bottomRedirectText}</BottomRedirectText>
        </TouchableOpacity>
      </Row>
    </MainView>
  );
};
