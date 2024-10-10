// src/Products.js
import DataTable from '../Components/DataTable';
import { AppContext } from '../Context/AppContext';
import React, { useContext } from 'react';
import Filters from '../Components/Filters';
import Pagination from '../Components/Pagination';
import {
    Table,
    MenuItem,
    Box,
    Button,
    TextField,
    Icon
} from '@mui/material';
const Products = () => {
    const { products, loading, searchTerm, totalProducts } = useContext(AppContext);
    /* const filteredUsers = users.filter(user => 
         user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
     );*/
    const filteredProducts = products.filter(item =>
        Object.values(item).some(value =>
            String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
    return (
        <div className='report-div'>
            <h1>Products</h1>
            <Filters />

            <div className='table-div'>
                <Table >

                    <thead>
                        <tr >
                            <th>#</th>
                            <th>Title</th>
                            <th>Image</th>

                            <th>Description</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>rating</th>
                            <th>warrantyInformation</th>
                            <th>shippingInformation	</th>
                            <th>availabilityStatus</th>

                        </tr>
                    </thead>
                    <DataTable data={filteredProducts} loading={loading} />

                </Table>
            </div>
            <Pagination total={totalProducts} />
        </div>
    );
};

export default Products;
