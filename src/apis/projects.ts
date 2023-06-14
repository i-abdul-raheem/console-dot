import axios from "axios";
import { BASE_URL } from "./config";

export const getAllProjects = (customer_id: any) => {
  return axios.get(`${BASE_URL}/project`).then((customers) => {
    const newData = customers?.data?.data.filter(
      (i: any) => i?.customer_id === customer_id
    );
    return newData
  });
};
