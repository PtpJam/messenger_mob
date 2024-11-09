import React from 'react';
import { THeaderProps } from './types.ts';
import { MainView, StyledImage, Title } from './styled.ts';
import { ActivityIndicator, View } from 'react-native';
import ProfileDefaultIcon from '@assets/icons/ProfileDefault/ProfileDefaultIcon';

export const Header = ({ avatar_url, title }: THeaderProps) => {
  return (
    <MainView>
      {avatar_url !== "no logo" ? (
        <StyledImage source={{ uri: avatar_url }} resizeMode="contain" />
      ) : (
        <View
            style={{
              width: 40,
              height: 40,
            }}
          >
          <ProfileDefaultIcon width={40} height={40} />
        </View>
      )}
      <Title>{title}</Title>
    </MainView>
  );
};
