import React, { useState } from "react";
import { addProduct } from "../api";
import {
  Button,
  Container,
  TextField,
  Typography,
  Box,
  FormHelperText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [nameError, setNameError] = useState("");
  const [priceError, setPriceError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    // Validate product name
    if (!name) {
      setNameError("Product name is required");
      valid = false;
    } else {
      setNameError("");
    }

    // Validate price
    if (!price || isNaN(price) || parseFloat(price) <= 0) {
      setPriceError("Please enter a valid price");
      valid = false;
    } else {
      setPriceError("");
    }

    if (valid) {
      addProduct({ name, price }).then(() => navigate("/products"));
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Add Product
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="Product Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
          error={!!nameError}
          helperText={nameError}
        />
        <TextField
          label="Price"
          fullWidth
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          margin="normal"
          error={!!priceError}
          helperText={priceError}
        />
        <Button type="submit" variant="contained" color="primary">
          Add
        </Button>
      </Box>
    </Container>
  );
};

export default AddProduct;
