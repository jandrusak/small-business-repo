import { useState } from "react";
import { connect } from "react-redux";
import { AddBusiness } from  '../Redux/actions'

const AddListing = (props) => {
    const [business, setBusiness] = useState({name: "", description: "", address: "", hours: ""});

    const handleSubmit = () => {
        props.AddBusiness(business);
    }

return( 
    <div>
        <input type="text" value={business.name} onChange={e => setBusiness({...business, name: e.target.value})} placeholder="Business Name"/>
        <input type="text" value={business.description} onChange={e => setBusiness({...business, description: e.target.value})} placeholder="Business Description"/>
        <input type="text" value={business.address} onChange={e => setBusiness({...business, address: e.target.value})} placeholder="Business Address"/>
        <input type="text" value={business.hours} onChange={e => setBusiness({...business, hours: e.target.value})} placeholder="Business Hours"/>

        <button onClick={handleSubmit}>Add Business</button>
    </div>
)}

export default connect(null, {AddBusiness})(AddListing);