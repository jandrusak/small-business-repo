import React from "react";
import { useSelector } from "react-redux";
import { Table, TableBody, TableCell, TableRow } from "@mui/material"

// function Listing() {
//     const businesses = [
//         {id: 1, name: "Home Slice Pizza", description: "Home slice pizza is an pizza joint serving NY.", address: "1415 S Congress Ave, Austin TX 78704", hours: "1PM - 2PM"}, 
//         {id: 2, name: "Joe's Coffee", description: "Strmptown coffee, baked good and sandwiches in colorful sdigs with outdoor area.", address: "242 W 2nd St, Austin, TX 78701", hours: "2PM - 3PM"}, 

//     ];

function Listing() {
    const businesses = useSelector(state => state.businesses.businesses);


    return (
        <Table>
            <TableBody>
                {businesses.map(biz => (
                    <TableRow key={biz.id}>
                        <TableCell>{biz.name}</TableCell>
                        <TableCell>{biz.description}</TableCell>
                        <TableCell>{biz.address}</TableCell>
                        <TableCell>{biz.hours}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>

    );

}

export default Listing