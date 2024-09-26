import { Link } from 'react-router-dom';
import { Text } from "../../ui-kit/Text/Text";
import defaultAvatar from '../../assets/images/rayul-_M6gy9oHgII-unsplash1.png';
import { StyledNavbar, MenuContainer, Logo, RegisteredMenu, IconButton, ProfileInfo, Avatar } from "./styles";
import { ReactComponent as LogoIcon } from '../../assets/logo/лого_атворк.svg';
import { ReactComponent as FavouriteIcon } from '../../assets/icons/ic_baseline-favorite-border.svg';
import { ReactComponent as NotificationIcon } from '../../assets/icons/mi_notification.svg';

export const Navbar: React.FC = () => {

  return (
    <StyledNavbar>
      <MenuContainer>
        <Logo> 
          <Link to='/'><LogoIcon /></Link>
        </Logo>

        <RegisteredMenu>
          <IconButton>
            <FavouriteIcon />
            </IconButton>
          <IconButton>
            <NotificationIcon />
          </IconButton>
          
          <ProfileInfo>
            <Avatar src={defaultAvatar} alt={`user avatar`} />
            <Text variant="text2Medium">Ivan1234</Text>
          </ProfileInfo>
        </RegisteredMenu>
      </MenuContainer>
    </StyledNavbar>
  )
}
