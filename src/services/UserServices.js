import API from "./api";

const createuser = async (data) => {
  const res = await API.post("users/creates", data);
  return res.data;
};

const getprofile = async (userId) => {
  const res = await API.get(`users/${userId}`);
  return res.data;
};

export { createuser, getprofile };