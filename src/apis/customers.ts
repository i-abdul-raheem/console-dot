import axios from "axios";
import { BASE_URL } from "./config";

export const getAllCustomers = async () => {
  const response = await axios.get(`${BASE_URL}/customer`).then((res) => {
    return res?.data?.data;
  });
  return response;
};

var id: any = null;

export const getCustomersId = async () => {
  id = await axios.get(`${BASE_URL}/customer`).then((res) => {
    return res?.data?.data.id;
  });
  return id;
};

export const getSingleCustomerDetail =async () => {
 const detail = await axios.get(`${BASE_URL}/customer`).then((res) => {
    return res?.data?.data.id;
  });
  
}

export const getProjectCaseStudy = async () => {
  const response = await axios.get(`${BASE_URL}/customer/${id}`).then((res) => {
    return res?.data?.data;
  });
  console.log(response, "debug"); // Debugging: Log the response
  return response;
};