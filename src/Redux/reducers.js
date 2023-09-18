import { ADD_BUSINESS, DeleteBusiness } from "./actions";

const initialState = {
    businesses: []
};

const businessReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_BUSINESS":
        return {
            ...state, 
            businesses: [...state.businesses, action.payload]
        };
    case "DELETE_BUSINESS":
        return {
            ...state, 
            businesses: state.businesses.filter(business => business.id !== action.payload)
        };

    default:
        return state;
    }
}

export default businessReducer;