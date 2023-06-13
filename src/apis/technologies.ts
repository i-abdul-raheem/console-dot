import axios from "axios";
import { BASE_URL } from "./config";

export const getTechnologies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/technology`);
    return response?.data;
  } catch (error) {
    // Handle the error
    console.log(error);
    return null;
  }
};

export const getSingleTechnology = async (id: any) => {
  try {
    const response = await axios.get(`${BASE_URL}/technology/${id}`);
    return response?.data;
  } catch (error) {
    // Handle the error
    console.log(error);
    return null;
  }
};
