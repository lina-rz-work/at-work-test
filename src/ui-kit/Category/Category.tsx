import { StyledCategory } from './styles';
import { Text } from '../Text/Text';

interface CategoryProps {
  category: string;
  isActive: boolean;
  onClick: (category: string) => void;
}

export const Category: React.FC<CategoryProps> = ({ category, isActive, onClick }) => {
  const handleClick = () => {
    onClick(category);
  };

  return (
    <StyledCategory isActive={isActive} onClick={handleClick}>
      <Text variant="text2Medium">{category}</Text>
    </StyledCategory>
  );
};
