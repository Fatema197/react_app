
# react_app
# React Assignment
* **Author**: Fatema Alabdalla
* **Last update**: 10/10/2024

## Prerequisites

Before setting up the project, ensure that the following are installed on your system:

- **Node.js** (Version v20.18.0 or bove)
- **NPM**  (Version 10.8.2 or bove)
- **React** (react@18.3.1or bove) 

## Overview

This project implements two pages, /users and /products, that utilize reusable components to fetch and display data from the Dummy JSON API. The pages include filtering and pagination features, allowing users to interactively manage the displayed data.

## Technologies Used

* **React**: For building user interfaces
* **Axios**: For making API requests
* **Context API**: For state management
* **CSS**: For styling components

## Features

* **Reusable Components** : Both pages utilize shared components for consistent design and functionality.
* **API Integration**: Data is fetched from the Dummy JSON API using Axios.
* **Filtering Options**:
        Page Size: Options to select page sizes (5, 10, 20, 50).
        Search Functionality: Client-side filtering based on user input.
        Dynamic Filters: Filters reset other fields when a new value is entered.
        Data Table: Displays fetched data with 10 columns.
        Pagination: Navigates through pages of data, fetching new data from the API as needed.
        Responsive Design: Ensures usability on various devices.

## Installation

1- Clone the repository:

git clone [repository_link]

2- Navigate to the project directory:

cd my-react-app

3- Install the required dependencies:

npm install

4- Start the development server:

npm start