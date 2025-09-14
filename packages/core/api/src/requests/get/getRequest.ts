import { useQuery } from "@tanstack/react-query";

import { transformQueryParams } from "./transformQueryParams";
import axiosInstance from "../axiosInstance";

type UseGetRequestType<P> = {
  url: string;
  queryKeys?: string[];
  params?: P;
  enabled?: boolean;
  staleTime?: number;
};

export const useGetRequest = <T, P = void>({
  url,
  queryKeys = [],
  params,
  enabled,
  staleTime = 0,
}: UseGetRequestType<P>) => {
  const urlWithParams = url + transformQueryParams(params);
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: [...queryKeys, urlWithParams],
    enabled: enabled,
    staleTime: staleTime,
    queryFn: () =>
      axiosInstance.get(urlWithParams).then((res: { data: T }) => res.data),
  });

  return { isPending, error, data, isFetching };
};
