import {ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';

export const MessageContainer = styled(View)`
  min-width: 20%; /* Устанавливаем минимальную ширину контейнера */
  padding: 0px 0px 0px 0px; /* Снижаем отступы для аккуратного вида */
  margin: 0px 5px 0px 0px;
  border-radius: 15px; /* Уменьшаем радиус для более аккуратного вида */
  background-color: #2A3C52;
  position: relative; /* Для позиционирования времени */
  height: 30px;
`;

// Текст сообщения
export const UsernameText = styled(Text)`
  font-size: 14px;
  color: #e1e1e1; /* Светлый цвет текста */
  align-self: center;
  padding: 0px 20px 0px 0px;
`;