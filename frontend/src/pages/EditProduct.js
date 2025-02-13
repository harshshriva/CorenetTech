import React, { useEffect, useState } from "react";
import { editProduct, fetchProducts } from "../api";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Container, TextField, Typography, Box } from "@mui/material";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [nameError, setNameError] = useState("");
  const [priceError, setPriceError] = useState("");

  useEffect(() => {
    fetchProducts().then((res) => {
      const product = res.data.find((p) => p._id === id);
      if (product) {
        setName(product.name);
        setPrice(product.price);
      }
    });
  }, [id]);

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
      editProduct(id, { name, price }).then(() => navigate("/products"));
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Edit Product
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
          Update
        </Button>
      </Box>
    </Container>
  );
};

export default EditProduct;
