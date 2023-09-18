import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DeleteBusiness } from "../Redux/actions";

function AdminView() {
  const businesses = useSelector((state) => state.businesses.businesses);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(DeleteBusiness(id));
  };
  return (
    <div>
      <h1>Admin View</h1>
      {businesses.length === 0 ? (
        <p>No businesses added yet</p>
      ) : (
        <ul>
          {businesses.map((business) => (
            <li key={business.id}>
              {business.name}
              <button onClick={() => handleDelete(business.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AdminView;
