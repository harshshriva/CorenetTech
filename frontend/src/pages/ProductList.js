import React, { useEffect, useState } from "react";
import { fetchProducts, deleteProduct } from "../api";
import {
  Button,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [open, setOpen] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts().then((res) => {
      setProducts(res.data);
      setFilteredProducts(res.data);
    });
  }, []);

  const handleDelete = () => {
    deleteProduct(productIdToDelete).then(() => {
      setProducts(products.filter((product) => product._id !== productIdToDelete));
      setFilteredProducts(filteredProducts.filter((product) => product._id !== productIdToDelete));
      setOpen(false); // Close the modal after deletion
    });
  };

  const handleOpenModal = (id) => {
    setProductIdToDelete(id);
    setOpen(true); // Open the confirmation modal
  };

  const handleCloseModal = () => {
    setOpen(false); // Close the modal without deleting
    setProductIdToDelete(null);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleSort = (event) => {
    const order = event.target.value;
    setSortOrder(order);
    const sorted = [...filteredProducts].sort((a, b) => {
      if (order === "asc") {
        return a.name.localeCompare(b.name);
      }
      return b.name.localeCompare(a.name);
    });
    setFilteredProducts(sorted);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Product List
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/add-product")}
      >
        Add Product
      </Button>

      {/* Search Input */}
      <TextField
        label="Search by Name"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearch}
        fullWidth
        sx={{ marginTop: 2 }}
      />

      {/* Sort Dropdown */}
      <FormControl variant="outlined" sx={{ marginTop: 2, minWidth: 120 }}>
        <InputLabel>Sort Order</InputLabel>
        <Select value={sortOrder} onChange={handleSort} label="Sort Order">
          <MenuItem value="asc">Ascending</MenuItem>
          <MenuItem value="desc">Descending</MenuItem>
        </Select>
      </FormControl>

      <TableContainer component={Paper} sx={{ marginTop: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProducts.map((product) => (
              <TableRow key={product._id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>${product.price}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => navigate(`/edit-product/${product._id}`)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleOpenModal(product._id)}
                    sx={{ marginLeft: 2 }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Confirmation Dialog */}
      <Dialog open={open} onClose={handleCloseModal}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this product?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ProductList;
