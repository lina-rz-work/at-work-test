import { useNavigate } from 'react-router-dom';
import { BackElemStyled, BackContainer } from './styles';
import { ReactComponent as BackarrowIcon } from '../../assets/icons/arrow-left.svg';
import { Text } from '../../ui-kit/Text/Text';

export const BackHomeElem = () => {
  const navigate = useNavigate();

  return (
    <BackElemStyled>
      
      <BackContainer onClick={() => navigate('/')}>
        <BackarrowIcon />
        <Text variant='headline'>Назад</Text>
      </BackContainer>
    </BackElemStyled>
  )
}
