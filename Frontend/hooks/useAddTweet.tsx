import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { TweetType } from "../types";
import { useAuth, useUser } from "@clerk/clerk-expo";

type IUser = {
  id: number;
  name: string;
  username: string;
  //  email: string;
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
};

type IPost = {
  id: number;
  title: string;
  body: string;
};

const user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
};

const post = {
  id: 1,
  title:
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body:
    "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit" +
    " molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
};

type addTweetParams = {
  content: string;
  image?: any;
};

export default function useAddTweet() {
  const queryClient = useQueryClient();
  const { user } = useUser();

  const addTweet = async (tweet: addTweetParams): Promise<TweetType> => {
    console.log("add tweet");
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(user.id);
    alert(tweet.content);
    return response.data;
  };

  return useMutation({
    mutationFn: (params: addTweetParams) => addTweet(params),
    onSettled: () => {
      // @ts-ignore
      queryClient.invalidateQueries(["tweet"]);
    },
  });
}
