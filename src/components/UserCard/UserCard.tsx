import { useState, useEffect, useRef } from 'react';
import { User } from '../../types/User';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Card, Avatar, Info, Username, Company, City, DropdowBtn } from './styles';
import { ReactComponent as DrodownIcon } from '../../assets/icons/dropdown_icon.svg';
import defaultAvatar from '../../assets/images/rayul-_M6gy9oHgII-unsplash1.png';
import { Dropdown } from '../Dropdown/Dropdown';
import { Text } from '../../ui-kit/Text/Text';

interface UserCardProps {
  user: User;
  isArchived?: boolean;
  onUnarchive?: (id: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, isArchived = false, onUnarchive }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(target) &&
        !(target instanceof Element && target.closest('.dropdown-btn'))
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <Card>
      <Avatar src={defaultAvatar} alt={`${user.username}'s avatar`} isArchived={isArchived}/>
      <Info>
        <div>
          <Username isArchived={isArchived}>
            <Text variant="headline">{user.username}</Text>
          </Username>
          <Company isArchived={isArchived}>
            <Text variant="text2Medium">{user.company.name}</Text>
          </Company>
        </div>

        <City isArchived={isArchived}>
          <Text variant="caption">{user.address.city}</Text>
        </City>

        <DropdowBtn
          className="dropdown-btn"
          onClick={handleDropdownToggle}
          isOpen={isDropdownOpen}>
          <DrodownIcon />
        </DropdowBtn>
      </Info>

      {isDropdownOpen && (
        <Dropdown
          ref={dropdownRef}
          userId={user.id}
          isArchived={isArchived}
          onUnarchive={onUnarchive}
        />
      )}
    </Card>
  );
};

export default UserCard;
