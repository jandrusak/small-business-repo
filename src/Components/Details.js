import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DeleteBusiness } from "../Redux/actions";

function Details() {
    // const businessId = match.params.businessId;
    const {id} = useParams();
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(DeleteBusiness(id));
    }
    return <div>
        Details for page {id}
        <button onClick={handleDelete}>Delete Business</button>
    </div>
}

export default Details