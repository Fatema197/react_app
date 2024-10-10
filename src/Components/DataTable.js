import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import Users from '../Pages/Users';
import Filters from './Filters';
import Pagination from './Pagination';
import {
    Table,
    MenuItem,
    Box,
    Button,
    TextField,
    Icon
} from '@mui/material';

const DataTable = ({ data, loading }) => {

    if (loading) return <div>Loading...</div>;

    return (

        <tbody>
            {data.map(item => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td> {item.username || item.title}</td>
                    <td><img src={item.image || item.images[0]} /></td>

                    <td>{item.age || item.description}</td>
                    <td>{item.gender || item.category}</td>
                    <td>{item.email || item.price}</td>
                    <td>{item.phone || item.rating}</td>
                    <td>{item.birthDate || item.warrantyInformation}</td>
                    <td>{item.height || item.shippingInformation}</td>
                    <td>{item.weight || item.availabilityStatus}</td>

                </tr>
            ))}
        </tbody>
    );
};

export default DataTable;
