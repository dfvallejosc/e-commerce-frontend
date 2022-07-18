import axiosClient from "./client";

export const getProductsList = async () => {
    const products = await axiosClient.get('/products');
    return products;
};

