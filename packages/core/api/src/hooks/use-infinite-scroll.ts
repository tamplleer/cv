import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { keepPreviousData } from "@tanstack/react-query";

import { useIntersection } from "./use-intersection";

type UseInfiniteScrollOptions<T> = {
  queryKey: QueryKey;
  queryFn: (page: number) => Promise<T[]>;
  pageSize: number;
  enabled: boolean;
  staleTime?: number;
};

export const useInfiniteScroll = <T>({
  queryKey,
  queryFn,
  pageSize,
  enabled,
  staleTime = 0,
}: UseInfiniteScrollOptions<T>) => {
  const { data, isFetchingNextPage, fetchNextPage, hasNextPage, isPending } =
    useInfiniteQuery({
      queryKey,
      queryFn: ({ pageParam }) => queryFn(pageParam),
      getNextPageParam: (lastPage, _, lastPageParam) =>
        lastPage.length === pageSize ? lastPageParam + 1 : undefined,
      initialPageParam: 1,
      select: (data: InfiniteData<T[], number>) => data.pages.flat(),
      placeholderData: keepPreviousData,
      staleTime: staleTime,
      enabled,
    });

  const loadMoreTriggerRef = useIntersection(() => {
    if (!isFetchingNextPage && hasNextPage) {
      fetchNextPage();
    }
  });

  return {
    data: data ?? [],
    isFetchingNextPage,
    loadMoreTriggerRef,
    isPending,
  };
};
