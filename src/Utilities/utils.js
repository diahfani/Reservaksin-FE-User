export const GetAge = (dateString) => {
  var birthday = +new Date(dateString);
  return ~~((Date.now() - birthday) / 31557600000);
};

export const CustomUTC = (date) => {
  return new Date(date).toUTCString().slice(0, 25);
};

export const ToCapitalize = (string) => {
  return string
    .trim()
    .toLowerCase()
    .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
};
