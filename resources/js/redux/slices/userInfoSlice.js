import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userInfo: {},

}
const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        acceptUserInfo(state, action) {
            state.userInfo = action.payload;

        }
    }
})

export const userInfoActions = userInfoSlice.actions;
export default userInfoSlice.reducer