import React, { useEffect, useRef } from 'react';
import { TMessageListProps } from './types.ts';
import { StyledScrollView } from './styled.ts';
import { useUserData } from '@store/tools.ts';
import { Message } from '../Message/Message.tsx';
import { TChatGptMessage } from '@common/types/chatGPT.ts';
import { FlatList, ListRenderItem, StyleSheet } from 'react-native';

export const MessageList = ({ messages }: TMessageListProps) => {
  const scrollViewRef = useRef();
  const renderItem: ListRenderItem<TChatGptMessage> = ({ item }) => (
    <Message key={item.uuid} message={item} type={item.role === "user" ? 'my' : 'other'}/>
  );
  return (
    // <StyledScrollView 
    
    // >
    //   {messages.map((message) => {
    //     return (
    //       <Message
    //         key={message.uuid}
    //         message={message}
    //         type={message.role === "user" ? 'my' : 'other'}
    //       />
    //     );
    //   })}
      
    // </StyledScrollView>

    <FlatList style={styles.scrollView}
      ref={ref => {this.flatList = ref}}
      data={messages}
      renderItem={renderItem}
      inverted={true}
    >
      
    </FlatList>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#0e1621",
    paddingTop: 0,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    height: "80%",
    width: "100%"
    
  },
});