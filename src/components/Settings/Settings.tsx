import { useState } from 'react';
import { SettingsStyled, Avatar, SettingsList } from './styles';
import { Category } from '../../ui-kit/Category/Category';
import defaultAvatar from '../../assets/images/rayul-_M6gy9oHgII-unsplash1.png';

export const Settings = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Данные профиля');

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <SettingsStyled>
      <Avatar src={defaultAvatar} />
      <SettingsList>
        <Category 
          category="Данные профиля" 
          isActive={activeCategory === 'Данные профиля'} 
          onClick={handleCategoryClick}
        />
        <Category 
          category="Рабочее пространство" 
          isActive={activeCategory === 'Рабочее пространство'} 
          onClick={handleCategoryClick}
        />
        <Category 
          category="Приватность" 
          isActive={activeCategory === 'Приватность'} 
          onClick={handleCategoryClick}
        />
        <Category 
          category="Безопасность" 
          isActive={activeCategory === 'Безопасность'} 
          onClick={handleCategoryClick}
        />
      </SettingsList>
    </SettingsStyled>
  );
};
