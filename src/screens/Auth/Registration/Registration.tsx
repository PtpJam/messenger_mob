import { BackgroundImage, Row, Title } from './styles';
import { Avatar } from './components/Avatar';
import { Asset } from 'react-native-image-picker';
import { useState } from 'react';
import { Form } from './components/Form';
import { TForm } from './components/Form/types';
import { Images } from '@assets/Images';
import { FadeButton, Header, Submit } from '@components/common';
import { useNavigation } from '@react-navigation/native';
import { EScreens } from '@navigation/screens';
import { Service } from '@common/services';
import { Loading } from '@components/common/Loading/Loading';

export const Registration = () => {
  const navigate = useNavigation<any>();
  const [photo, setPhoto] = useState<Asset | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<TForm>({
    email: '',
    phone: '',
    nickname: '',
    password: '',
    confirmPassword: '',
  });

  const handleSelectImage = (photo: Asset) => {
    setPhoto(photo);
  };

  const handleMoveToLogin = () => {
    navigate.navigate(EScreens.AuthAuthorization);
  };

  const handleSignUp = () => {
    console.log('Avatar: ');
    console.log(photo);

    const formDataPayload = new FormData();
    formDataPayload.append('nickname', formData.nickname);
    formDataPayload.append('phone', formData.phone);
    formDataPayload.append('email', formData.email);
    formDataPayload.append('password', formData.password);
    formDataPayload.append('confirmPassword', formData.confirmPassword);
    formDataPayload.append('avatar', {
      uri: photo?.uri,
      name: photo?.fileName,
      type: photo?.type,
    });

    setIsLoading(true);
    Service.AuthService.postSignUp({ ...formData, avatar: photo })
      .then((res) => {
        setIsLoading(false);
        console.log('res => ', res.data);
      })
      .catch((e) => {
        setIsLoading(false);
        console.log({ ...e });
        console.error(e.message);
        console.error(e.name);
        console.error(e.code);
        console.error(e.config);
        console.error(e.request);
      });
  };

  return (
    <BackgroundImage source={Images.AuthBackground}>
      {isLoading && <Loading />}

      <Header />
      <Avatar onSelect={handleSelectImage} />
      <Row>
        <Title>Sign up</Title>
        <FadeButton
          startColor={'#003b37'}
          text="Login"
          direction="leftToRight"
          onClick={handleMoveToLogin}
        />
      </Row>

      <Form setFormData={setFormData} />

      <Submit
        buttonText="Sign up"
        onSubmitClick={handleSignUp}
        bottomText="Already have an account?"
        bottomRedirectText="Login"
        onRedirectClick={handleMoveToLogin}
      />
    </BackgroundImage>
  );
};
