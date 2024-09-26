import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { archiveUser, hideUser } from '../../store/slices/usersSlice/usersSlice';
import { Actions, Button } from './styles';
import { Text } from '../../ui-kit/Text/Text';

interface DropdownProps {
  userId: number;
  isArchived: boolean;
  onUnarchive?: (id: number) => void;
}

export const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  ({ userId, isArchived, onUnarchive }, ref) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleEdit = () => {
      navigate(`/edit/${userId}`);
    };

    const handleArchive = () => {
      dispatch(archiveUser(userId));
    };

    const handleHide = () => {
      dispatch(hideUser(userId));
    };

    const handleUnarchive = () => {
      if (onUnarchive) {
        onUnarchive(userId);
      }
    };

    return (
      <Actions ref={ref}>
        {!isArchived ? (
          <>
            <Button onClick={handleEdit}><Text variant='text2Medium'>Редактировать</Text></Button>
            <Button onClick={handleArchive}><Text variant='text2Medium'>Архивировать</Text></Button>
            <Button onClick={handleHide}><Text variant='text2Medium'>Скрыть</Text></Button>
          </>
        ) : (
          <Button archived onClick={handleUnarchive}>
            <Text variant='text2Medium'>Активировать</Text>
          </Button>
        )}
      </Actions>
    );
  }
);
