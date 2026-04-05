import API from "./api";

const getallorder = async () => {
  const res = await API.get("order/all");
  return res.data;
};

const createorder = async (data) => {
  const res = await API.post("order/create", data);
  return res.data;
};

const updateorder = async (orderId, data) => {
  const res = await API.put(`order/update/${orderId}`, data);
  return res.data;
};

const hideorder = async (orderId) => {
  const res = await API.delete(`order/hide-order/${orderId}`);
  return res.data;
};

const listorder = async () => {
  const res = await API.get("order/show-pre-order");
  return res.data;
};

export {
     getallorder, 
    createorder, 
    updateorder, 
    hideorder, 
    listorder
 };