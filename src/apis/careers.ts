import axios from "axios";
import { BASE_URL } from "./config";

export const getCareers = async () => {
  const jobs = await axios.get(`${BASE_URL}/careers`).then((res) => {
    //    console.log(res)
    return res?.data?.data;
  });
  return jobs;
};

export const getSingleCareer= async (id:any) => {
  const jobs = await axios.get(`${BASE_URL}/careers/${id}`).then((res) => {
       console.log(res)
    return res?.data?.data;
  });
  return jobs;
};
