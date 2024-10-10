import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import {
    Button,
    Box,
    Typography,
} from '@mui/material';
const Pagination = ({ total }) => {
    const { currentPage, setCurrentPage, pageSize, setPageSize, totalUsers, settotalUsers } = useContext(AppContext);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);

    };
    return (
        <Box className="box-pagination" >
            <Button
                variant="outlined"
                className='btn-pagination'
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage <= 1}
            >
                Previous
            </Button>
            <Typography> Page {currentPage} / {Math.ceil(total / pageSize)} </Typography>
            <Button disabled={currentPage >= Math.ceil(total / pageSize)} variant="outlined" className='btn-pagination' onClick={() => handlePageChange(currentPage + 1)}>Next</Button>
        </Box>
    );
};

export default Pagination;
