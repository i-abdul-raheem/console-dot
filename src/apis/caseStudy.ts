// interface Types {
//   ref_id: string;
//   overview: string;
//   technologies: string[];
//   challenge_short: string;
//   challenge_long: string;
// }

// const UserList = () => {
//   const [users, setUsers] = useState<Types[]>([]);

//   useEffect(() => {
//     const getUsers = async () => {
//       try {
//         const usersData = await fetch(`https://api.consoledot.com/case_study`);
//         const result: Types[] = await usersData.json();
//         setUsers(result);
//         console.log(users);
//       } catch (error) {
//         // Handle error
//       }
//     };

//     getUsers();
//   }, []);
// };

import axios from "axios";
import { BASE_URL } from "./config";


export const getCustomersId = async () => {
  const id = await axios.get(`${BASE_URL}/customer`).then((res) => {
    return res?.data?.data.id;
  });
  return id;
};

export const getCaseStudy = async (id: any) => {
  const response = await axios.get(`${BASE_URL}/case_study`).then((res) => {
    return res?.data?.data?.filter((i:any) => i?.ref_id === id)[0];
  });
  // console.log(response, "debug");
  return response;
};
