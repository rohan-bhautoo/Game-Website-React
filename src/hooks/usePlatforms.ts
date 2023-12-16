import { useQuery } from "@tanstack/react-query";
import apiClient, { Response } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery<Response<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<Response<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
  });

export default usePlatforms;
