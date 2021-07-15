import {createSlice} from '@reduxjs/toolkit';

export const NotificationSlice = createSlice({
  name: 'Notifications',
  initialState: {
    notifications: [],
  },
  reducers: {
    SET_NOTIFICATIONS: (state, action) => {
      state.notifications = action.payload;
    },
    ADD_NOTIFICATION: (state, action) => {
      state.notifications = [...state.notifications, action.payload.data];
    },
    UPDATE_NOTIFICATION: (state, action) => {
      let reserveList = [...state.notifications];
      reserveList.splice(action.payload.index, 1);
      reserveList.push(action.payload.data);
      state.notifications = [...reserveList];
    },
    DELETE_NOTIFICATION: (state, action) => {
      let reserveList = [...state.notifications];
      reserveList.splice(action.payload.index, 1);
      state.notifications = [...reserveList];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  SET_NOTIFICATIONS,
  ADD_NOTIFICATION,
  UPDATE_NOTIFICATION,
  DELETE_NOTIFICATION,
} = NotificationSlice.actions;

export default NotificationSlice.reducer;
