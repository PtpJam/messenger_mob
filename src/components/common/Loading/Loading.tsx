import { useEffect, useState } from 'react';
import { LoadingTitle, MainContainerLoading } from './styles';
import { Text } from 'react-native';

const MAX_DOTS = 5;
export const Loading = () => {
  const [dots, setDots] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots === MAX_DOTS ? 0 : prevDots + 1));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const printDots = () => {
    return Array.from({ length: dots }).map((_, index) => (
      <LoadingTitle key={index} style={{ color: 'white' }}>
        .
      </LoadingTitle>
    ));
  };

  return (
    <MainContainerLoading>
      <LoadingTitle style={{ color: 'white' }}>
        Loading{printDots()}
      </LoadingTitle>
    </MainContainerLoading>
  );
};
