import axios from "axios";

export interface Response<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d3a85973e8f5426194c769ec66cec385",
  },
});
