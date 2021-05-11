import { notification } from "antd";
import truncate from "truncate";
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
