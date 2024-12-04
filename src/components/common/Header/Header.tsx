import { Images } from '@assets/Images';
import { HeaderContainer, StyledLogo } from './styles';

export const Header = () => {
  return (
    <HeaderContainer>
      <StyledLogo source={Images.Logo} resizeMode="contain" />
    </HeaderContainer>
  );
};
