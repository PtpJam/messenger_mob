import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import socket from '../../socket/connection';
import { userSliceActions } from '@store/modules/user/reducer';
import { Room } from '@common/socket/interface/chat.interface';

const useSocketEvents = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('rooms', (rooms: Room[]) => {
      console.log('__________________--------------_________---');
      
      // Логируем данные для анализа их структуры
      console.log('Rooms received: ', JSON.stringify(rooms, null, 2));
      
      rooms.forEach(room => {
        console.log(`Room UUID: ${room.uuid}, Room Name: ${room.name}`);
        
        // Если room содержит поле users, выводим данные о пользователях
        if (room.users) {
          room.users.forEach(user => {
            console.log(`User UUID: ${user.uuid}, User Name: ${user.nickname}`);
          });
        }
      });
    
      // Обновляем список комнат
      dispatch(userSliceActions.setChats(rooms));
    });
    

    return () => {
      socket.off('rooms');
    };
  }, [dispatch]);
};

export default useSocketEvents;
