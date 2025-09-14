import { useQueryClient } from "@tanstack/react-query";

export const useRefetchOld = () => {
  const queryClient = useQueryClient();
  return (keys: (string | undefined)[]) =>
    queryClient.invalidateQueries({
      queryKey: keys.filter((f) => f !== undefined),
    }); //todo change key to generate enum from all query keys
};

export const useRefetch = () => {
  const queryClient = useQueryClient();


  return (keys: (string | undefined)[]) => {
    const filteredKeys = keys.filter((f): f is string => f !== undefined);
    if (filteredKeys.length === 0) return;

    const allQueries = queryClient.getQueryCache().findAll();
    queryClient.invalidateQueries({
      predicate: (query) => {
        const result = filteredKeys.every((key) => query.queryKey.includes(key));
        return result;
      },
    });
  };
};
