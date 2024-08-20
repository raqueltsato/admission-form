import { format, parseISO } from "date-fns";

export const formatDate = (inputDate: string, dateFormat = "dd/MM/yyyy") => {
  const date = parseISO(inputDate);
  return format(date, dateFormat);
};
