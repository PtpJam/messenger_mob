import React, { useEffect, useState } from 'react';
import { TDaleePopUpProps } from './types.ts';
import { ActivityIndicatorContainer, StyledButtonView, StyledInput, StyledView } from './styled.ts';
import { useUserData } from '@store/tools.ts';
import { Message } from '../Message/Message.tsx';
import { ActivityIndicator, Button, Image, Keyboard, Modal, Platform, Pressable, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native';
import CloseIconSvg from '@assets/icons/ChatGpt/cross-close-svgrepo-com.svg'; // Импорт SVG компонента
import CheckMark from '@assets/icons/CheckMarkIcon/checkmark-done-sharp-svgrepo-com.svg'; // Импорт SVG компонента
import { ChatGptService } from '@common/services/ChatGpt/chatGpt.service.ts';
import { DaleeService } from '@common/services/Dalee/dalee.service.ts';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import axios from 'axios';
import * as Sharing from 'expo-sharing';
import { DocumentPickerAsset } from 'expo-document-picker/build/types';

export const DaleePopUp = ({ setIsVisible, daleeRequestText, setDaleeRequestText, setSelectedFiles }: TDaleePopUpProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [generatedImageUri, setGeneratedImageUri] = useState<string>('');

  const [imageWasDownloaded, setImageWasDownloaded] = useState<boolean>(false)
  const [imageWasAttached, setImageWasAttached] = useState<boolean>(false)
  const [cachedImageUri, setCachedImageUri] = useState<FileSystem.FileSystemDownloadResult>()
  const [cachedImageIsUpdating, setCachedImageIsUpdating] = useState(false)

  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();

  // useEffect(() => {
  //   console.log("triggered")
  //   setCachedImageIsUpdating(false)
  // }, [cachedImageUri])

  const handleSend = async () => {
    setIsLoading(true)
    // Проверяем, что есть текст или файл
    setDaleeRequestText('');
    Keyboard.dismiss();
    try {
      const response = await DaleeService.generateImage({
        prompt: daleeRequestText
      });
      console.log(response.data)
      setGeneratedImageUri(response.data.image.url)
      
      // setGeneratedImageUri("https://oaidalleapiprodscus.blob.core.windows.net/private/org-jGqZVW3XVh3pBLB4tLXMRkVL/user-0584rxyszLqsNTkaVUa2Lfq2/img-qWNFfFSk3g5IzrnL9iiwllgm.png?st=2024-11-04T15%3A44%3A26Z&se=2024-11-04T17%3A44%3A26Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-11-04T03%3A05%3A35Z&ske=2024-11-05T03%3A05%3A35Z&sks=b&skv=2024-08-04&sig=XI2HrmAQglqAEXyCOtRijKu8MiIYdMhnUkkdTB4Wqro%3D")

    }
    catch {

    }
    finally {
      setIsLoading(false)
    }
  };

  const handleTextChange = (newText: string) => {
    setDaleeRequestText(newText);
  };

  const handleSaveImageIntoCache = async (): Promise<FileSystem.FileSystemDownloadResult> => {
    // await MediaLibrary.saveToLibraryAsync(generatedImageUri)
    const currentTime = new Date()
  //   const {config, fs} = RNFetchBlob;
  //  let PictureDir = fs.dirs.PictureDir;
  //   let options = {
  //     fileCache: true,
  //     addAndroidDownloads: {
  //       // Related to the Android only
  //       useDownloadManager: true,
  //       notification: true,
  //       path:
  //         PictureDir +
  //         "/image_" +
  //         Math.floor(date.getTime() + date.getSeconds() / 2) +
  //         ext,
  //       descrip tion: "Image",
  //     },
  //   };
    const localUri = `dalle-generated-${currentTime}.png`
    const result = await FileSystem.downloadAsync(generatedImageUri, FileSystem.cacheDirectory + localUri);
    
    setCachedImageUri(result)

    return result
  }

  const handleCopyImageIntoDownloadFolder = async (uri: string) => {
    // const permission = await MediaLibrary.requestPermissionsAsync(true, ['audio', 'photo', 'video'])
    // MediaLibrary.usePermissions(true, ['photo'])
    if (permissionResponse.status !== 'granted') {
      await requestPermission();
    }
    const asset = await MediaLibrary.createAssetAsync(uri)
    const album = await MediaLibrary.getAlbumAsync('Download')

    await MediaLibrary.addAssetsToAlbumAsync([asset], album, true)
    setImageWasDownloaded(true)
    ToastAndroid.showWithGravity(
      'Картинка загружена успешно',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    );
    // FileSystem.deleteAsync(result.uri)
    // saveFile(result.uri, localUri, result.headers["Content-Type"])
  }

  const handleSaveImage = async () => {
    setIsLoading(true)
    if (cachedImageUri === undefined) {
      const result = await handleSaveImageIntoCache()
      await handleCopyImageIntoDownloadFolder(result.uri)
    }
    else {
      if (cachedImageUri)
      await handleCopyImageIntoDownloadFolder(cachedImageUri?.uri)
    }
    setIsLoading(false)
  }

  const handleAttachImageToMessage = async () => {
    setIsLoading(true)
    let cachedImage: FileSystem.FileSystemDownloadResult;
    if (cachedImageUri === undefined) {
      cachedImage = await handleSaveImageIntoCache()
    }
    else {
      cachedImage = cachedImageUri
    }
    
    if (cachedImage) {
      const currentTime = new Date()
      var date = currentTime.toString().replace(/ /g,"_");
      // const name = `dalle_generated_${date}`
      const name = '123'
      const image: DocumentPickerAsset = {
        name: name,
        uri: cachedImage?.uri,
        mimeType: "image/png"
      }
      setSelectedFiles([image])
      setImageWasAttached(true)
      ToastAndroid.showWithGravity(
        'Картинка прикреплена к сообщению',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
    }
    setIsLoading(false)
  }

  return (
    <StyledView >
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <StyledButtonView onPress={() => {
          setIsVisible(false)
        }}
        >
          <View>
            <CloseIconSvg width={12} height={12}></CloseIconSvg>
          </View>
        </StyledButtonView>
        <Text style={{
          verticalAlign: 'middle',
          paddingRight: 10
        }}>Генерация картинок</Text>
      </View>
      
      {generatedImageUri === '' ? (
            <>
              <StyledInput
                  value={daleeRequestText}
                  keyboardAppearance="dark"
                  placeholder="Введите запрос"
                  placeholderTextColor={'#6d7883'}
                  textAlignVertical='top'
                  multiline={true}
                  onChangeText={handleTextChange}
                />
                <Button onPress={handleSend} title='Отправить'></Button>
            </>
          ) : ( 
            <>
              <Image style={styles.image} source={{uri: generatedImageUri}}></Image>
              <View style={styles.buttons}>
                <Button disabled={imageWasDownloaded} title='Сохранить' onPress={handleSaveImage}></Button>
                <Button 
                  title='Прикрепить к сообще.'
                  onPress={handleAttachImageToMessage}
                  disabled={imageWasAttached}
                  />
              </View>
            </>
 
          )}
      
      
     {isLoading && <ActivityIndicatorContainer>
        <ActivityIndicator size={'large'} color={'#fff'} />
      </ActivityIndicatorContainer>}

    </StyledView>
      
  );
};

const styles = StyleSheet.create({
  image: {
    width: 256,
    height: 256,
    margin: "auto",
    display: "flex",
  },
  buttons: {
    width: "100%",
    flexDirection: 'row',
    verticalAlign: "bottom",
    justifyContent: "space-between"
  },
  attach: {
    fontSize: 12
  }
})