import { createReducer } from "@reduxjs/toolkit";

export const carReducer = createReducer({ cars: {} }, {
    allCarRequest: (state) => {
        state.loading = true;
    },
    allCarSuccess: (state, action) => {
        state.loading = false;
        state.cars = action.payload;
        // CarCount= action.payload.CarCount;
        // resultPerPage= action.payload.resultPerPage;
    },
    allCarFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },


    createCarRequest: (state, action) => {
        state.loading = true;
    },
    createCarSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.message = action.payload.message;
    },
    createCarFail: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
    },

    clearError: (state) => {
        state.error = null
    }
});

export const singleCarReducer = createReducer({ car: {} }, {

    singleCarRequest: (state) => {
        state.loading = true;
    },
    singleCarSuccess: (state, action) => {
        state.loading = false;
        state.car = action.payload;
    },
    singleCarFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    clearError: (state) => {
        state.error = null
    }

});