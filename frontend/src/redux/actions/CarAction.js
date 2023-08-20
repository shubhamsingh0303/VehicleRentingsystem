import axios from 'axios';

// *+=*+=*/+*+*=+*=/+*+=*+= Get All Car *+=*+=*/+*+*=+*=/+*+=*+=
export const getAllCars = (currentPage = 1) => async (dispatch) => {
    try {
        dispatch({ type: "allCarRequest" });

        let link = `/car/allCar?page=${currentPage}`;

        const { data } = await axios.get(link);

        dispatch({ type: "allCarSuccess", payload: data.cars })
    } catch (error) {
        dispatch({
            type: "allCarFail",
        })
    }
};

// *+=*+=*/+*+*=+*=/+*+=*+= Create Car *+=*+=*/+*+*=+*=/+*+=*+=
export const createCar = (formData) => async (dispatch) => {
    try {
        dispatch({ type: "createCarRequest" });

        const config = { headers: { "Content-Type": "multipart/form-data" } }

        const { data } = await axios.post(
            `/car/create`,
            formData,
            config
        );
        dispatch({
            type: "createCarSuccess",
            payload: data.user
        })
    } catch (error) {
        dispatch({ type: "createCarFail" });
    }
}

// *+=*+=*/+*+*=+*=/+*+=*+= Get Single Car *+=*+=*/+*+*=+*=/+*+=*+=
export const getSingleCarsDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: "singleCarRequest" });

       
        const { data } = await axios.get(`/car/getSingleCar/${id}`);

        dispatch({
            type: "singleCarSuccess",
            payload: data
        });
    } catch (error) {
        dispatch({
            type: "singleCarFail",
            payload: error.response.data.message
        })
    }
};

// *+=*+=*/+*+*=+*=/+*+=*+= ClearErrors *+=*+=*/+*+*=+*=/+*+=*+=
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: "clearError"
    });
};