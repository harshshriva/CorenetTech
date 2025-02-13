import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchProducts = () => API.get("/api/products/getProduct");
export const addProduct = (newProduct) => API.post("/api/products/addProducts", newProduct);
export const editProduct = (id, updatedProduct) =>
  API.put(`/api/products/updateProduct/${id}`, updatedProduct);
export const deleteProduct = (id) => API.delete(`/api/products/deleteProduct/${id}`);
