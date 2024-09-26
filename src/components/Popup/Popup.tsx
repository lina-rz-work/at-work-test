import { ReactComponent as PopupIcon } from '../../assets/icons/checked-box.svg';
import { ReactComponent as CrossIcon } from '../../assets/icons/cross.svg';
import { Overlay, PopupContainer, Message, CloseButton } from './styles';
import { Text } from '../../ui-kit/Text/Text';

interface PopupProps {
  message: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ message, onClose }) => {

  return (
    <Overlay onClick={onClose}>
      <PopupContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <CrossIcon />
        </CloseButton>

        <PopupIcon />

        <Message>
          <Text variant='headline'>{message}</Text>
        </Message>
      </PopupContainer>
    </Overlay>
  );
};

export default Popup;
