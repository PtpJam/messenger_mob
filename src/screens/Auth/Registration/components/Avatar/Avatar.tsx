import React, { useState } from 'react';
import { TAvatarProps } from './types.ts';
import { ButtonContainer, ImagePicker } from './styled.ts';
import {
  Asset,
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import { Alert } from 'react-native';
import { Images } from '@assets/Images.ts';

export const Avatar = ({ onSelect }: TAvatarProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Asset | null>(null);
  const options: ImageLibraryOptions = {
    mediaType: 'photo',
  };

  const handlePickPhoto = () => {
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        Alert.alert('Cancelled', 'Image selection was cancelled');
      } else if (response.errorCode) {
        Alert.alert('Error', response.errorMessage ?? 'Unknown error');
      } else if (response.assets && response.assets.length > 0) {
        const source = response.assets[0];
        setSelectedPhoto(source);
        onSelect(source);
      }
    });
  };

  return (
    <ButtonContainer onPress={handlePickPhoto}>
      <ImagePicker
        source={selectedPhoto ? selectedPhoto : Images.ImagePicker}
      />
    </ButtonContainer>
  );
};
