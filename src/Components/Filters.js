// src/Filter.js
import React, { useEffect, useContext, useState } from 'react';
import { AppContext } from '../Context/AppContext';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Select,
    MenuItem,
    Box,
    Button,
    TextField,
    Icon
} from '@mui/material';
//import {SearchIcon }from '@mui/icons-material/Search';  

const Filter = () => {
    const { users, searchTerm, setSearchTerm } = useContext(AppContext);
    const [filteredData, setFilteredData] = useState([]);
    const [isSearchInputVisible, setIsSearchInputVisible] = useState(false);
    const { currentPage, setCurrentPage, pageSize, setPageSize } = useContext(AppContext);
    const { handleFilterChange } = useContext(AppContext);

    const handleRowsPerPageChange = (e) => {
        setPageSize(Number(e.target.value));
    };
    const toggleSearchInput = () => {
        setIsSearchInputVisible(!isSearchInputVisible);
        setSearchTerm(''); // Clear search term when toggling
    };

    useEffect(() => {
        if (searchTerm) {
            console.log("searchTerm" + searchTerm);
            console.log("users search" + users);
            const filtered = users.filter(item =>
                Object.values(item).some(value =>
                    String(value).toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
            setFilteredData(filtered);
        } else {
            setFilteredData(users);
        }
    }, [searchTerm, users]);
    return (
        <Box className="box-pagination" >
            <Box className="box-pagination" >
                <label>Page Size:   </label>

                <Select
                    labelId="rows-per-page-label"
                    value={pageSize}
                    onChange={handleRowsPerPageChange}
                    label="Rows per page"
                    className='select-number'
                >
                    {[5, 10, 20, 50].map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>



                <Button

                    onClick={toggleSearchInput}
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button>
                {isSearchInputVisible && (
                    <input
                        className='text-field'
                        variant="outlined"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                )}
            </Box>
            <Box>
                <div>
                    <input
                        className='text-field'
                        type="text"
                        placeholder="Filter on all the rows"
                        onChange={(e) => handleFilterChange('username', e.target.value)}
                    />

                    {/* Add more filters as necessary 
                    <input
                        className='text-field'
                        type="text"
                        placeholder="Filter by email"
                        onChange={(e) => handleFilterChange('email', e.target.value)}
                    />*/}
                </div>
            </Box>
        </Box>
    );
};

export default Filter;
