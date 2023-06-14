import axios from "axios";
import { BASE_URL } from "./config";

export const getProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/product`);
    console.log(response?.data);
    return response?.data?.data;
  } catch (error) {
    // Handle the error
    console.log(error);
    return null;
  }
};

export const getProductCaseStudy = async (id: any) => {
  const response = await axios.get(`${BASE_URL}/case_study`).then((res) => {
    return res?.data?.data?.filter((i: any) => i?.ref_id === id);
  });
  console.log(response, "debug");
  return response;
};
