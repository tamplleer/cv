import { ReactNode } from "react";

export type ProviderType = {
  children: ReactNode | ReactNode[] | null;
};

export const floatRegex = /^\d+(\.\d{1,2})?$/;
export const emailRegex = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;

export const isNumberString = (value: string) => {
  return floatRegex.test(value);
};

export const areAllUndefined = (obj: {
  [key: string]: string | Date | undefined;
}) => {
  return Object.values(obj).every((value) => value === undefined);
};

export const getTime = (date: number | null | undefined): number => {
  if (date) {
    return new Date(date * 1000).getTime();
  }
  return new Date().getTime();
};

export const getYear = (date: number | null | undefined): number => {
  if (date) {
    return new Date(date * 1000).getFullYear();
  }
  return new Date().getFullYear();
};

export const scrollByClassName = (className: string, index: number) =>
  setTimeout(() => {
    document
      .getElementsByClassName(className)
      ?.[index].scrollIntoView({ behavior: "smooth" });
  }, 50);

export const formatter = Intl.NumberFormat("ru", {
  notation: "compact",
  maximumFractionDigits: 2,
});

/**
 * this function reduces millions and billions to small numbers
 * examples:
 * 545321 => '545 321'
 * 45345999 => '45,35'
 * 45366999000 => '45,37'
 * @param value the number to format
 * @returns formatted number as string
 */
export const formatNumber = (value: number, hideUnits?: boolean) => {
  const result =
    value < 1_000_000
      ? value
      : formatter
          .format(value)
          .replace(/\s(млн|млрд)$/, hideUnits ? "" : " $1.")
          .trim();
  return result.toLocaleString("ru");
};

export const formatTime = (date: Date): string => {
  const pad = (n: any) => n.toString().padStart(2, "0");

  const tzOffsetMin = date.getTimezoneOffset();
  const offsetSign = tzOffsetMin <= 0 ? "+" : "-";
  const offsetHours = pad(Math.floor(Math.abs(tzOffsetMin) / 60));
  const offsetMinutes = pad(Math.abs(tzOffsetMin) % 60);

  const isoWithOffset =
    date.getFullYear() +
    "-" +
    pad(date.getMonth() + 1) +
    "-" +
    pad(date.getDate()) +
    "T" +
    pad(date.getHours()) +
    ":" +
    pad(date.getMinutes()) +
    ":" +
    pad(date.getSeconds()) +
    offsetSign +
    offsetHours +
    ":" +
    offsetMinutes;

  return encodeURIComponent(isoWithOffset);
};

export const formatTimeToView = (timeInSeconds: number | undefined): string => {
  if (timeInSeconds === undefined || isNaN(timeInSeconds)) return "0:00";
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};
