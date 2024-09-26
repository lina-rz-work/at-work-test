import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../../../types/User';

interface UsersState {
  users: User[];
  archived: User[];
  hidden: number[]; // массив ID скрытых пользователей
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  archived: [],
  hidden: [],
  loading: false,
  error: null,
};


export const fetchUsers = createAsyncThunk(
  'users/fetchUsers', 
  async () => {
  const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
  return response.data.slice(0, 6);
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    archiveUser: (state, action: PayloadAction<number>) => {
      const userIndex = state.users.findIndex(user => user.id === action.payload);
      if (userIndex !== -1) {
        const [archivedUser] = state.users.splice(userIndex, 1);
        state.archived.push(archivedUser);
      }
    },
    unarchiveUser: (state, action: PayloadAction<number>) => {
      const archivedIndex = state.archived.findIndex(user => user.id === action.payload);
      if (archivedIndex !== -1) {
        const [user] = state.archived.splice(archivedIndex, 1);
        state.users.push(user);
      }
    },
    hideUser: (state, action: PayloadAction<number>) => {
      state.hidden.push(action.payload);
    },
    showUser: (state, action: PayloadAction<number>) => {
      state.hidden = state.hidden.filter(id => id !== action.payload);
    },
    updateUser: (state, action: PayloadAction<User>) => {
      const index = state.users.findIndex(user => user.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
      const archivedIndex = state.archived.findIndex(user => user.id === action.payload.id);
      if (archivedIndex !== -1) {
        state.archived[archivedIndex] = action.payload;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch users';
      });
  },
});

export const { archiveUser, unarchiveUser, hideUser, showUser, updateUser } = usersSlice.actions;

export default usersSlice.reducer;
