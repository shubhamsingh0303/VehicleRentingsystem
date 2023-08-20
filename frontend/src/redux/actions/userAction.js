import axios from 'axios';

// *+=*+=*/+*+*=+*=/+*+=*+= Login *+=*+=*/+*+*=+*=/+*+=*+=
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: "loginRequest" });

        const config = { headers: { "Content-Type": "application/json" } }

        const { data } = await axios.post(
            `/user/login`,
            { email, password },
            config
        );
        dispatch({
            type: "loginSuccess",
            payload: data.user
        })
        console.log(data)
    } catch (error) {
        dispatch({ type: "loginFail", payload: error.response.message });
    }
};

// *+=*+=*/+*+*=+*=/+*+=*+= Register *+=*+=*/+*+*=+*=/+*+=*+=
export const register = (formData) => async (dispatch) => {
    try {
        dispatch({ type: "registerRequest" });

        const config = { headers: { "Content-Type": "multipart/form-data" } }

        const { data } = await axios.post(
            `/user/register`,
            formData,
            config
        );
        dispatch({
            type: "registerSuccess",
            payload: data.user
        })
        console.log(data)
    } catch (error) {
        dispatch({ type: "registerFail", payload: error.response.message });
    }
};

// *+=*+=*/+*+*=+*=/+*+=*+= Load User *+=*+=*/+*+*=+*=/+*+=*+=
export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: "loadUserRequest" });
        const { data } = await axios.get(`/user/me`);
        dispatch({
            type: "loadUserSuccess",
            payload: data.user
        })
        console.log(data)
    } catch (error) {
        dispatch({ type: "loadUserFail", payload: error.response.message });
    }
};

// *+=*+=*/+*+*=+*=/+*+=*+= Logout User *+=*+=*/+*+*=+*=/+*+=*+=
export const logout = () => async (dispatch) => {
    try {
        await axios.post('/user/logout');
        dispatch({ type: "logoutSuccess" });
    } catch (error) {
        dispatch({ type: "logoutFail", payload: error.response.data.message });
    }
};


// *+=*+=*/+*+*=+*=/+*+=*+= ClearErrors *+=*+=*/+*+*=+*=/+*+=*+=
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: "clearError"
    });
};