import { notification } from "antd";
import truncate from "truncate";
import numeral from "numeral";
export const useNotification = () => {
  return (type, description) => {
    if (type === "success") {
      return notification["success"]({
        message: "Success",
        description,
      });
    } else if (type === "warning") {
      return notification["warning"]({
        message: "Warning",
        description,
      });
    } else if (type === "error") {
      return notification["error"]({
        message: "Error",
        description,
      });
    } else {
      return;
    }
  };
};

export const useTruncate = () => {
  const stringTruncated = (text, length) => {
    return truncate(text, Number(length));
  };
  return stringTruncated;
};

export const usePriceFormat = () => {
  const stringFormated = (price) => {
    return "₫ " + numeral(price).format("0,0[.]00");
  };
  return stringFormated;
};
