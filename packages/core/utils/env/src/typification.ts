export const getString = (arg: string): string | null => {
  if (!!arg && typeof arg === "string") return arg;

  console.error(`can't convert value \\"${arg}\\" to string`);
  return null;
};

export const getBoolean = (arg: string): boolean | null => {
  if (arg === "true") return true;
  if (arg === "false") return false;

  console.error(`can't convert value \\"${arg}\\" to boolean`);
  return null;
};

export const getNumber = (arg: string): number | null => {
  const num = Number(arg);
  if (!!arg && isFinite(num) && !isNaN(num)) return num;

  console.error(`can't convert value \\"${arg}\\" to number`);
  return null;
};
