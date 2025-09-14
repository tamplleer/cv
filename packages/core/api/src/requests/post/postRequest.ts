import { useQuery } from "@tanstack/react-query";

import axiosInstance from "../axiosInstance";

type UsePostRequestType<P> = {
  url: string;
  body?: P;
  queryKey: string;
  enabled?: boolean;
};

export const usePostRequest = <T, P>({
  url,
  body,
  enabled = true,
  queryKey = "",
}: UsePostRequestType<P>) => {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: [queryKey],
    enabled: enabled,
    queryFn: () =>
      axiosInstance.post(url, body).then((res: { data: T }) => res.data),
  });

  return { isPending, error, data, isFetching };
};
