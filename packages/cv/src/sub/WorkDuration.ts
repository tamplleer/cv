export const workDurationString = () => {
  return getDateDifference(new Date("2020-09-02"), new Date());
};

export const getDateDifference = (startDate: Date, endDate: Date): string => {
  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  let result = "";

  if (years > 0) {
    result += `${years} ${getYearWord(years)} `;
  }

  if (months > 0) {
    result += `${months} ${getMonthWord(months)}`;
  }

  return result.trim();
};

const getYearWord = (years: number): string => {
  if (years === 1) {
    return "год";
  } else if (years >= 2 && years <= 4) {
    return "года";
  } else {
    return "лет";
  }
};

const getMonthWord = (months: number): string => {
  if (months === 1) {
    return "месяц";
  } else if (months >= 2 && months <= 4) {
    return "месяца";
  } else {
    return "месяцев";
  }
};


export const getDateDifferenceWithName = (startDate: Date, endDate: Date) => {
  const months = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь",
  ];

  const startMonth = months[startDate.getMonth()];
  const startYear = startDate.getFullYear();

  const endMonth = months[endDate.getMonth()];
  const endYear = endDate.getFullYear();

  return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
};
