export const transformQueryParams = <P>(
  params?: P,
  page?: number,
  size?: number
): string => {
  if (!params && page === undefined) {
    return "";
  }
  const result: string[] = [];
  if (page !== undefined) {
    result.push(`page=${page}`);
    if (size) {
      result.push(`size=${size}`);
    }
  }

  for (const key in params) {
    if (Array.isArray(params[key])) {
      result.push(`${key}=${(params[key] as Array<P>).join(",")}`);
    } else if (params[key] !== undefined && params[key] !== "") {
      result.push(`${key}=${params[key]}`);
    }
  }
  return "?" + result.join("&");
};
