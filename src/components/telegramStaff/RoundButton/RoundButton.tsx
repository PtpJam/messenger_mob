import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import PencilIcon from '@assets/icons/Pencil/PencilIcon'; // Импорт иконки по умолчанию

const RoundButton = ({
  Icon = PencilIcon, // Иконка по умолчанию - PencilIcon
  size = 50,
  onPress,
  backgroundColor = '#639fd8',
  iconColor = '#ffffff',
}) => {
  const iconSize = size * 0.4; // Уменьшаем размер иконки до 60% от размера кнопки

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: backgroundColor,
        },
      ]}
    >
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Icon width={iconSize} height={iconSize} fill={iconColor} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100, // Оставил радиус для круглой формы кнопки
  },
});

export default RoundButton;
