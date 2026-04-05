import API from "./api";

const getallcategory = async () => {
  const res = await API.get("category/all");
  return res.data;
};

const createcategory = async (data) => {
  const res = await API.post("category/create", data);
  return res.data;
};

const updatecategory = async (categoryId, data) => {
  const res = await API.put(`category/update/${categoryId}`, data);
  return res.data;
};

const hidecategory = async (categoryId) => {
  const res = await API.delete(`category/hide/${categoryId}`);
  return res.data;
};

export { 
    getallcategory, 
    createcategory,
     updatecategory,
      hidecategory
     };s