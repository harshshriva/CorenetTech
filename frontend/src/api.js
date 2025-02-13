import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchProducts = () => API.get("/api/products/get-Product");
export const addProduct = (newProduct) => API.post("/api/products/add-products", newProduct);
export const editProduct = (id, updatedProduct) =>
  API.put(`/api/products/update-product/${id}`, updatedProduct);
export const deleteProduct = (id) => API.delete(`/api/products/delete-product/${id}`);
