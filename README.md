# CorenetTech
# E-commerce Product Management Dashboard

## Project Overview
This is a single-page application (SPA) for managing products in an e-commerce platform. The dashboard allows users to view, add, edit, and delete products, with filtering and sorting functionalities.

## Technologies Used
- **Frontend**: React, Material-UI, React Router, Axios
- **Backend**: Node.js, Express.js, MongoDB
- **Code Quality**: ESLint, Prettier

## Features
1. **Product List**:
   - View a list of products fetched from the API.
   - Sort and filter products.
   - Edit and delete products.
   
2. **Add Product**:
   - Add a new product through a form with validation.
   - Send a POST request to the API.

3. **Edit Product**:
   - Edit an existing product's details.
   - Before editing we are showing conformation modal.
   - Send a PUT request to update the product.

4. **Delete Product**:
   - Delete a product with confirmation through a modal.
   - Send a DELETE request to the API.

## Project Setup

### 1. Clone the repository
```bash
git clone https://github.com/harshshriva/CorenetTech.git


2. Set up the Backend
Navigate to the backend directory:
cd CorenetTech/backend

Install dependencies:
npm install

Start the backend server using nodemon:
npm run start

## Frontend
3. Set up the Frontend
Navigate to the frontend directory:
cd CorenetTech/frontend

Install dependencies:
npm install

Start the frontend server:
npm start

