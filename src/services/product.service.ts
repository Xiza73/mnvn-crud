import axios from "./axios";
import { Product } from "@/interfaces/product.interface";
import { AxiosResponse } from "axios";

export const createProduct = async (product: Product) => {
  try {
    return await axios.post("/product", product);
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = async (): Promise<
  AxiosResponse<{ message: string; products: Product[] }> | undefined
> => {
  try {
    return await axios.get("product");
  } catch (error) {
    console.log(error);
    return;
  }
};

export const getProduct = async (
  id: string
): Promise<
  AxiosResponse<{ message: string; product: Product }> | undefined
> => {
  try {
    return await axios.get(`/product/${id}`);
  } catch (error) {
    console.log(error);
    return;
  }
};

export const updateProduct = async (
  id: string,
  product: Product
): Promise<
  AxiosResponse<{ message: string; product: Product }> | undefined
> => {
  try {
    return await axios.put(`/product/${id}`, product);
  } catch (error) {
    console.log(error);
    return;
  }
};

export const deleteProduct = async (
  id: string
): Promise<
  AxiosResponse<{ message: string; product: Product }> | undefined
> => {
  try {
    return await axios.delete(`/product/${id}`);
  } catch (error) {
    console.log(error);
    return;
  }
};
