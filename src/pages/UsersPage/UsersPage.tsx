import { useEffect, useState  } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, unarchiveUser } from '../../store/slices/usersSlice/usersSlice';
import { RootState, AppDispatch } from '../../store/store';
import UserCard from '../../components/UserCard/UserCard';
import { Container, UserList, ArchivedSection, ArchivedTitle, ErrorText } from './styles';
import { DivideLine } from '../../components/DivideLine/DivideLine';
import Loader from '../../components/Loader/Loader';
import { Text } from '../../ui-kit/Text/Text';


const UsersPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { users, archived, hidden, loading } = useSelector((state: RootState) => state.users);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    if (loading) {
      setShowLoader(true);
    } else {
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [loading]);


  const handleUnarchive = (id: number) => {
    dispatch(unarchiveUser(id));
  };

  const visibleUsers = users.filter(user => !hidden.includes(user.id));

  return (
    <>
      {showLoader && <Loader />}

      <Container>
        <div>
          <Text variant='title'>Активные</Text>
          <DivideLine margin={'20px 0 26px'}/>
          <UserList>
            {visibleUsers.map(user => (
              <UserCard key={user.id} user={user} />
            ))}
          </UserList>
        </div>

        <div>
          <Text variant='title'>Архив</Text>
          <DivideLine margin={'20px 0 26px'}/>
          {archived.length > 0 && (
            <ArchivedSection>
              <UserList>
                {archived.map(user => (
                  <UserCard key={user.id} user={user} isArchived onUnarchive={handleUnarchive} />
                ))}
              </UserList>
            </ArchivedSection>
          )}
        </div>
      </Container>
    </>

  );
};

export default UsersPage;
