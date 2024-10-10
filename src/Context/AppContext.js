// src/AppContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);
    const [totalUsers, settotalUsers] = useState([]);
    const [totalProducts, setTotalProducts] = useState([]);

    const [pageSize, setPageSize] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [filters, setFilters] = useState({
        name: '',
        email: '',
        // Add other filters as necessary
    });
    const BaseUrl = "https://dummyjson.com";
    console.log("Users:", users);


    const fetchUsers = async (pageSize, currentPage) => {
        const { username, email } = filters;
        let url = `${BaseUrl}/users/search?limit=${pageSize}&skip=${(currentPage - 1) * pageSize}`;
        setLoading(true);


        if (username) url += `&q=${username}`;
        else if (email) url += `&email=${email}`;
        const response = await axios.get(url);
        setUsers(response.data.users);
        settotalUsers(response.data.total);
        console.log("totalUsers" + response.data.total);
        setLoading(false);

    };

    const fetchProducts = async (pageSize, currentPage) => {
        const { username, email } = filters;
        let url = `${BaseUrl}/products/search?limit=${pageSize}&skip=${(currentPage - 1) * pageSize}`;
        setLoading(true);
        if (username) url += `&q=${username}`;
        else if (email) url += `&email=${email}`;
        const response = await axios.get(url);
        setProducts(response.data.products);
        setTotalProducts(response.data.total);
        setLoading(false);
    };

    const handleFilterChange = (field, value) => {
        setFilters((prev) => {
            const newFilters = { ...prev, [field]: value };
            // Reset other filters when one is used
            for (const key in newFilters) {
                if (key !== field) newFilters[key] = '';
            }
            return newFilters;
        });
    };
    useEffect(() => {
        fetchUsers(pageSize, currentPage);
        fetchProducts(pageSize, currentPage);
    }, [pageSize, currentPage, filters]);

    return (
        <AppContext.Provider value={{ users, products, fetchProducts, fetchUsers, pageSize, setPageSize, currentPage, setCurrentPage, searchTerm, setSearchTerm, loading, totalUsers, settotalUsers, handleFilterChange, totalProducts, setTotalProducts }}>
            {children}
        </AppContext.Provider>
    );
};
