import React, { useEffect } from 'react';
import { TMessageListProps } from './types.ts';
import { StyledScrollView } from './styled.ts';
import { useUserData } from '@store/tools.ts';
import { Message } from '../Message/Message.tsx';
import { FlatList, ScrollView, StyleSheet, ListRenderItem } from 'react-native';
import { MessageFromDB } from '@common/socket/interface/chat.interface.ts';

export const MessageList = ({ messages, setIsChatGptPopupVisible, setChatGptRequestText, setDaleeRequestText, setIsDaleePopupVisible, selectedFile, setSelectedFile }: TMessageListProps) => {
  const { user } = useUserData();

  const renderItem: ListRenderItem<MessageFromDB> = ({ item }) => (
    <Message 
      key={item.uuid}
      message={item}
      type={item.from.uuid === user?.uuid ? 'my' : 'other'}
      setIsChatGptPopupVisible={setIsChatGptPopupVisible}
      setChatGptRequestText={setChatGptRequestText}
      setIsDaleePopupVisible={setIsDaleePopupVisible}
      setDaleeRequestText={setDaleeRequestText}
      selectedFile={selectedFile}
      setSelectedFile={setSelectedFile}
      />
  );

  return (
    // <ScrollView style={styles.scrollView}
    // ref={ref => {this.scrollView = ref}}
    // onContentSizeChange={() => this.scrollView.scrollToEnd({animated: false})}
    
    // >
    //   {messages.map((message) => {
    //     return (
    //       <Message
    //         key={message.uuid}
    //         message={message}
    //         type={message.from.uuid === user?.uuid ? 'my' : 'other'}
    //         setIsVisible={setIsVisible}
    //         setChatGptRequestText={setChatGptRequestText}
    //       />
    //     );
    //   })}
    // </ScrollView>

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

