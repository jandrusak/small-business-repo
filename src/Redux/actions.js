export const ADD_BUSINESS = 'ADD_BUSINESS'
export const DELETE_BUSINESS = 'DELETE_BUSINESS'

export const AddBusiness = (business) => ({
    type: "ADD_BUSINESS", 
    payload: business
});

export const DeleteBusiness = (id) => ({
    type: "DELETE_BUSINESS", 
    payload: id,
});