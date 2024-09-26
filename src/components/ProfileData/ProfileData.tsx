import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { updateUser } from '../../store/slices/usersSlice/usersSlice';
import { Container, Form } from './styles';
import { User } from '../../types/User';
import { FormField } from '../../ui-kit/TextField/TextField';
import { Button } from '../../ui-kit/Button/Button';
import { Text } from '../../ui-kit/Text/Text';
import { DivideLine } from '../../components/DivideLine/DivideLine';

interface FormValues {
  name: string;
  username: string;
  email: string;
  city: string;
  phone: string;
  companyName: string;
}

interface ProfileDataProps {
  user: User;
  showPopup: boolean;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProfileData: React.FC<ProfileDataProps> = ({ user, showPopup, setShowPopup }) => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    mode: 'onBlur',
  });

  useEffect(() => {
    reset({
      name: user.name,
      username: user.username,
      email: user.email,
      city: user.address.city,
      phone: user.phone,
      companyName: user.company.name,
    });
  }, [user, reset]);

  const onSubmit: SubmitHandler<FormValues> = data => {
    if (user) {
      const updatedUser: User = {
        ...user,
        name: data.name,
        username: data.username,
        email: data.email,
        address: { ...user.address, city: data.city },
        phone: data.phone,
        company: { ...user.company, name: data.companyName },
      };
      dispatch(updateUser(updatedUser));
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 4000);
    }
  };

  return (
    <Container>
      <Text variant='title'>Данные профиля</Text>
      <DivideLine margin={'15px 0 24px'}/>

      <Form onSubmit={handleSubmit(onSubmit)}>
      <div>
          <FormField
            label="Heading"
            id="name"
            register={register}
            requiredMessage="The field is required"
            errors={errors.name}
          />
          <FormField
            label="Username"
            id="username"
            register={register}
            requiredMessage="The field is required"
            errors={errors.username}
          />
          <FormField
            label="Email"
            id="email"
            register={register}
            requiredMessage="The field is required"
            errors={errors.email}
          />
          <FormField
            label="City"
            id="city"
            register={register}
            requiredMessage="The field is required"
            errors={errors.city}
          />
          <FormField
            label="Phone"
            id="phone"
            register={register}
            requiredMessage="The field is required"
            errors={errors.phone}
          />
          <FormField
            label="Company Name"
            id="companyName"
            register={register}
            requiredMessage="The field is required"
            errors={errors.companyName}
          />
        </div>

        <Button type="submit">Сохранить</Button>
      </Form>
    </Container>
  );
};

