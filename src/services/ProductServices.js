import API from "./api";

const getallproduct = async () => {
  const res = await API.get("products/all");
  return res.data;
};

const getCategoryProduct = async (categoryId) => {
  const res = await API.get(`products/CategoryProduct/${categoryId}`);
  return res.data;
};

const createproduct = async (data) => {
  const res = await API.post("products/create", data);
  return res.data;
};

const updateproduct = async (productId, data) => {
  const res = await API.put(`products/update/${productId}`, data);
  return res.data;
};

const hideproduct = async (productId) => {
  const res = await API.delete(`products/hide/${productId}`);
  return res.data;
};

const searchproduct = async (name) => {
  const res = await API.get(`products/Filter-name-product?name=${name}`);
  return res.data;
};

const getproductbyid = async (productId) => {
  const res = await API.get(`products/product-details/${productId}`);
  return res.data;
};

export {
     getallproduct, 
     getCategoryProduct,
    createproduct,
    updateproduct,
     hideproduct,
    searchproduct,
    getproductbyid
         };