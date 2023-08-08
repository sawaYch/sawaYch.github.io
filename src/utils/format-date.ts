import dayjs from 'dayjs';

// ISO date string to formatted date string
export const formatDate = (input: string) =>
  dayjs(input).format('DD/MM/YYYY HH:mm A');
export const formatDateMonthName = (input: string) =>
  dayjs(input).format('DD MMMM, YYYY HH:mm A');
