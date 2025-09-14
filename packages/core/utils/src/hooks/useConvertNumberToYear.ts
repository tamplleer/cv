import { getYear } from "../utils";

export const convertNumberToYear = (number?: number | null) => {
  const startYear = getYear(number);

  const nextYearDigits = (startYear + 1).toString().slice(2);
  return `${startYear}/${nextYearDigits}`;
};
