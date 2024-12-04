import { Button, Pressable } from 'react-native';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

export const MessageContainer = styled(View)<{ $type: 'my' | 'other' }>`
  align-self: ${(props) => (props.$type === 'my' ? 'flex-end' : 'flex-start')};
  max-width: 70%;
  min-width: 30%; /* Устанавливаем минимальную ширину контейнера */
  padding: 10px 15px; /* Снижаем отступы для аккуратного вида */
  margin: 5px 0;
  border-radius: 12px; /* Уменьшаем радиус для более аккуратного вида */
  background-color: ${(props) =>
    props.$type === 'my' ? '#2b5278' : '#182533'}; /* Цвета фонов сообщений */
  border-bottom-right-radius: ${(props) =>
    props.$type === 'my' ? '0' : '12px'}; /* Уменьшаем радиус для сообщений с треугольником */
  border-bottom-left-radius: ${(props) =>
    props.$type === 'my' ? '12px' : '0'}; /* Уменьшаем радиус для сообщений с треугольником */
  position: relative; /* Для позиционирования времени */
`;

// Треугольник под сообщением
export const Triangle = styled(View)<{ $type: 'my' | 'other' }>`
  position: absolute;
  bottom: 0; /* Положение чуть ниже нижнего края */
  ${(props) => (props.$type === 'my' ? 'right: -8px;' : 'left: -8px;')}; /* Подгоняем треугольник ближе к краям */
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 8px;
  border-color: transparent;
  ${(props) =>
    props.$type === 'my'
      ? `
    border-bottom-color: #2b5278; 
    border-left-width: 0; 
    border-right-width: 8px; 
    `
      : `
    border-bottom-color: #182533; /* Цвет треугольника для полученных сообщений */
    border-right-width: 0; /* Убираем правую границу */
    border-left-width: 8px; /* Устанавливаем левую границу */
    `};
`;

// Время сообщения
export const MessageInfo = styled(View)`
  font-size: 12px; /* Размер шрифта */
  display: flex;
  flex-direction: row;
  align-items: center;
  float: right;
  justify-content: space-between;
`;

// Текст сообщения
export const MessageText = styled(Text)`
  font-size: 16px;
  color: #e1e1e1; /* Светлый цвет текста */
  margin-bottom: 5px; /* Уменьшение отступов, чтобы текст не уходил далеко от времени */
`;

export const MessageDate = styled(Text)<{ $type: 'my' | 'other' }>`
  padding-left: 10px;
  color: ${(props) =>
    props.$type === 'my' ? '#7da8d3' : '#6b7d8c'}; /* Цвет времени */
`;

export const ChatGPTButton = styled(Pressable)`
  align-items: center;
  justify-content: left;
  float: left;
  padding: 0px 8px;
  elevation: 3;
  background-color: #28a08c;
  border-radius: 6px
`

export const DaleeButton = styled(Pressable)`
  align-items: center;
  justify-content: left;
  float: left;
  padding: 0px 8px;
  elevation: 3;
  background-color: #54c3ff;
  border-radius: 6px
`

export const MessageSentStatus = styled(View)`
  padding-top: 1px;
`;

export const MessageSentContainer = styled(View)`
  display: flexbox;
  flex-direction: row-reverse;
`;