import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Container, DataContainer } from './styles';
import { User } from '../../types/User';
import Popup from '../../components/Popup/Popup';
import { BackHomeElem } from '../../components/BackHomeElem/BackHomeElem';
import { Settings } from '../../components/Settings/Settings';
import { ProfileData } from '../../components/ProfileData/ProfileData';

const EditUser: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { users, archived } = useSelector((state: RootState) => state.users);
  const [user, setUser] = useState<User | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const allUsers = [...users, ...archived];
    const foundUser = allUsers.find(u => u.id === Number(id));
    if (foundUser) {
      setUser(foundUser);
    }
  }, [id, users, archived]);

  return (
    <Container>
      <BackHomeElem />

      <DataContainer>
        {user && <Settings />}
        {user && <ProfileData user={user} showPopup={showPopup} setShowPopup={setShowPopup} />}
      </DataContainer>

      {showPopup && (
        <Popup
          message="Изменения сохранены!"
          onClose={() => setShowPopup(false)}
        />
      )}
    </Container>
  );
};

export default EditUser;

