// src/Users.js
import DataTable from '../Components/DataTable';
import { AppContext } from '../Context/AppContext';
import React, { useContext } from 'react';
import Filters from '../Components/Filters';
import Pagination from '../Components/Pagination';
import {
    Table,
    Icon
} from '@mui/material';
const Users = () => {
    const { users, loading, searchTerm, totalUsers } = useContext(AppContext);
    /* const filteredUsers = users.filter(user => 
         user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
     );*/
    const filteredUsers = users.filter(item =>
        Object.values(item).some(value =>
            String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
    const titles = ["Name", "Nameww"];
    return (
        <div className='report-div'>
            <h1>Users</h1>
            <Filters />
            <div className='table-div'>
                <Table >

                    <thead>
                        <tr >
                            <th>#</th>
                            <th>User Name</th>
                            <th>Image</th>
                            <th> Age</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Birth Date</th>
                            <th>Height</th>
                            <th>Weight</th>
                        </tr>
                    </thead>
                    <DataTable data={filteredUsers} loading={loading} />

                </Table>
            </div>
            <Pagination total={totalUsers} />
        </div>
    );
};
export default Users;
