import { useMutation, useQueryClient } from "@tanstack/react-query";

import axiosInstance from "../axiosInstance";

type UseLazyPostRequestType<P> = {
  url: string;
  transformBody?: (data: P) => object;
  invalidateQueryKeys?: string[];
};

export const useLazyPostRequest = <T, P = void>({
  url,
  transformBody = (data: P) => data as object,
  invalidateQueryKeys = [],
}: UseLazyPostRequestType<P>) => {
  const queryClient = useQueryClient();
  const { isPending, error, data, isIdle, mutate } = useMutation<T, Error, P>({
    mutationKey: [url],
    mutationFn: async (body: P) =>
      axiosInstance
        .post(url, transformBody(body))
        .then((res: { data: T }) => res.data),
    onSuccess: () => {
      invalidateQueryKeys.forEach((key) => {
        queryClient.invalidateQueries({ queryKey: [key] });
      });
    },
  });
  const mutateSync = async (body: P): Promise<T> => {
    return new Promise((resolve, reject) => {
      mutate(body, {
        onSuccess: (data: T) => {
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
