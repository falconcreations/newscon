import { createSlice } from "@reduxjs/toolkit";
import { store } from "../store";
import { userSignUpApi } from "../../utils/api";
import { apiCallBegan } from "../actions/apiActions";

// state
const initialState = {
    data: null,
    isLogin: false,
};

// slice
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSuccess: (user, action) => {
            let { data } = action.payload;
            user.data = data;

        },
        logoutSuccess: (user) => {
            user = initialState;
            return user;
        },
    }

});

export const { loginSuccess, logoutSuccess } = userSlice.actions;
export default userSlice.reducer;

// api calls

// register
export const register = (firebase_id, name, email, mobile, type, profile, status, fcm_id, onSuccess, onError, onStart) => {
    store.dispatch(apiCallBegan({
        ...userSignUpApi(firebase_id, name, email, mobile, type, profile, status, fcm_id),
        displayToast: false,
        onSuccessDispatch: loginSuccess.type,
        onStart,
        onSuccess,
        onError
    }))
};

// logout
export const logoutUser = () => {
    store.dispatch(logoutSuccess())
}


// selectors
export const selectUser = (state) => state.user;
