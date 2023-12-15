import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { TweetType } from "../types";
import { api, uri } from "../constants/api";

// type User = {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   address: {
//     street: string;
//     suite: string;
//     city: string;
//     zipcode: string;
//     geo: {
//       lat: string;
//       lng: string;
//     };
//   };
//   phone: string;
//   website: string;
//   company: {
//     name: string;
//     catchPhrase: string;
//     bs: string;
//   };
// };

export default function useTweetById(id: string) {
  return useQuery({
    queryKey: ["tweet", id],
    queryFn: async () => {
      console.log("Fetching tweet by id");
      // const response = await fetch(
      //   "https://jsonplaceholder.typicode.com/users"
      // );
      // const user = await response.json();
      // return user as User | undefined;
      // const response = await axios.get(
      //   "https://jsonplaceholder.typicode.com/users"
      // );
      // const result = response.data;
      console.log(`${api}/test`);

      //Get Post By Id
      const response = await axios.post(`${api}/post/getAllPosts`);
      const result = response.data.result;

      return result as TweetType | undefined;
    },
  });
}
