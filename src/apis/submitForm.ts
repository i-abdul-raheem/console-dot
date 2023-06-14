import { BASE_URL } from "./config";
import axios from "axios";

export const submitJobApplication = async (data: any) => {
  const response = await axios.post(`${BASE_URL}/application`, data);
    console.log(response, 'test')
  return response;
};
