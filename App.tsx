import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import Navigator from './src/navigation/Navigator';
import store from './src/store/store';
import socket from '@common/socket/connection';
import { registerRootComponent } from 'expo';

function App(): JSX.Element {
  useEffect(() => {
    socket
      .on('connect', () => {
        console.log('Successful connection to the server via socket!');
      })
      .on('disconnect', () => {
        console.log('Socket disconnection from server!');
      });
  }, []);

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

export default App;
