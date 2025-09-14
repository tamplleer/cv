import { useMutation, useQueryClient } from "@tanstack/react-query";

import { transformQueryParams } from "./transformQueryParams";
import { useInfiniteScroll } from "../../hooks/use-infinite-scroll";
import axiosInstance from "../axiosInstance";

type UseLazyGetRequestType<P> = {
  url: string;
  queryKeys?: string[];
  params?: P;
};

export const useLazyGetRequest = <T, P = void>({
  url,
  queryKeys = [""],
}: UseLazyGetRequestType<P>) => {
  const queryClient = useQueryClient();
  // todo If you need autocaching, you can replace it with useQuery and use refetch()
  const { isPending, error, data, isIdle, mutate } = useMutation<
    T,
    Error,
    P | undefined
  >({
    mutationKey: [...queryKeys],
    mutationFn: async (params?: P) =>
      axiosInstance
        .get(url + transformQueryParams(params))
        .then((res: { data: T }) => res.data),
  });
  const mutateSync = async (params?: P): Promise<T> => {
    return new Promise((resolve, reject) => {
      mutate(params, {
        onSuccess: (data: T) => {
          queryClient.setQueryData([...queryKeys, params], data);
          resolve(data as T);
        },
        onError: (error) => {
          reject(error);
        },
      });
    });
  };
  return {
    isPending,
    error,
    data,
    isIdle,
    mutate,
    mutateSync,
  };
};
type UseGetRequestType<P> = {
  url: string;
  queryKeys?: string[];
  params?: P;
  enabled?: boolean;
  staleTime?: number;
};

type InfinityProps<T, P> = {
  size: number;
  selectListFromResponse: (data: T) => P;
};

export const useInfinityGetRequest = <T, P, ListItemType>({
  params,
  url,
  enabled = true,
  size,
  staleTime,
  selectListFromResponse,
  queryKeys = [],
}: UseGetRequestType<P> & InfinityProps<T, ListItemType[]>) => {
  const urlWithParams = url + transformQueryParams({ ...params, size });
  const { data, isFetchingNextPage, loadMoreTriggerRef, isPending } =
    useInfiniteScroll<ListItemType>({
      queryKey: [urlWithParams, ...queryKeys],
      queryFn: (page) =>
        axiosInstance
          .get(url + transformQueryParams({ ...params, page, size }))
          .then((res: { data: T }) => selectListFromResponse(res.data)),
      pageSize: size,
      enabled,
      staleTime,
    });
  return { data, isFetchingNextPage, loadMoreTriggerRef, isPending };
};
