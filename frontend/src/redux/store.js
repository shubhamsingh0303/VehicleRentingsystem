import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducers/userReducer';
import {carReducer, singleCarReducer} from "./reducers/CarReducer"


const store = configureStore({
    reducer: {
        user:userReducer,
        car:carReducer,
        singleCar:singleCarReducer
    }
});

export default store;