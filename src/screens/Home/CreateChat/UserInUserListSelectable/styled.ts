import {ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';

export const MessageContainer = styled(View)`
  min-width: 20%; /* Устанавливаем минимальную ширину контейнера */
  padding: 2px 0px 0px 10px; /* Снижаем отступы для аккуратного вида */
  margin: 3px 0;
  border-radius: 12px; /* Уменьшаем радиус для более аккуратного вида */
  
  position: relative; /* Для позиционирования времени */
`;

// Текст сообщения
export const UsernameText = styled(Text)`
  font-size: 16px;
  color: #e1e1e1; /* Светлый цвет текста */
  margin-bottom: 2px; /* Уменьшение отступов, чтобы текст не уходил далеко от времени */
`;